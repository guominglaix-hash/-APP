import { useState, useRef, useEffect, useCallback } from "react";
import imgBg from "../../imports/image-1.png";

// ── Ai助手-4 assets (welcome screen) ──
import img158 from "../../imports/Ai助手-4/c01d5e8bcf95ce7f5f642d271a6039064578e9ef.png";
import imgHero from "../../imports/Ai助手-4/de5538ac1d22c320664ed6f984392c584781eab9.png";
import imgRestaurant from "../../imports/Ai助手-4/7e22b49997440bc27ff9ba789af7d4715f23d42f.png";
import imgFilmAvatar from "../../imports/Ai助手-4/a4fa1c57dde0007e4a6b293a0b97587256aec1e9.png";
import imgCalendarAvatar from "../../imports/Ai助手-4/91bbb9f7ae30b1f6448335f4aac1ab4c1b295d43.png";
import imgDeepSeekMask from "../../imports/Ai助手-4/aa27909696618e1f7e601e7eeabcb16d448a4068.png";
import imgDeepSeek from "../../imports/Ai助手-4/8f5a18a7ffcdbd0cfc427440aea93ecf1999d779.png";

// ── Ai助手-5 assets (music card) ──
import imgNetEaseLogo from "../../imports/image-2.png";
import imgCover1 from "../../imports/Ai助手-5/d0a59a865e0ff58124aaf5562c31483656dec6e3.png";
import imgCover2 from "../../imports/Ai助手-5/4e49d53d7bd3210f8808c1030215d55bc14ff626.png";
import imgCover3 from "../../imports/Ai助手-5/91821d8142d648f20fd59bc63cb41ac1b484dc3e.png";

/* ─────────────────────────────────────────────
   Types & constants
───────────────────────────────────────────── */
type MsgType = "text" | "music" | "info-cards";
type Msg = {
  id: number;
  role: "user" | "ai";
  text?: string;
  type?: MsgType;
};

const MUSIC_TRACKS = [
  { id: 1, title: "忘情水忘情水忘情水忘情...", artist: "刘德华", album: "精选集", cover: imgCover1 },
  { id: 2, title: "冰雨", artist: "刘德华", album: "经典金曲", cover: imgCover2 },
  { id: 3, title: "谢谢你的爱", artist: "刘德华", album: "必听曲目", cover: imgCover3 },
];

const INITIAL_CARDS = [
  { id: 1, image: null as string | null, title: "苏超精彩回看，连云港队vs苏州队", source: "影视通", avatar: null as string | null },
  { id: 2, image: imgRestaurant, title: "阿生鱼捞，2-3人餐，98元", source: "影视通", avatar: imgFilmAvatar },
  { id: 3, image: null as string | null, title: "您今日有3个待办日程，记得按时完成~", source: "日程助手", avatar: imgCalendarAvatar },
];

function isMusicRequest(text: string) {
  return /歌|音乐|刘德华|播放|唱/.test(text);
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function AIGradientIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" style={{ flexShrink: 0 }}>
      <rect width="36" height="36" rx="18" fill="white" fillOpacity="0.5" stroke="white" />
      <path
        d="M18 6C11.373 6 6 11.373 6 18C6 24.627 11.373 30 18 30C24.627 30 30 24.627 30 18C30 11.373 24.627 6 18 6Z"
        fill="url(#aiGradChat)"
      />
      <defs>
        <linearGradient id="aiGradChat" x1="2.15" y1="18" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FB6FF" />
          <stop offset="0.35" stopColor="#9278FF" />
          <stop offset="0.72" stopColor="#F6746B" />
          <stop offset="1" stopColor="#FFA83D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Play button (gray circle with triangle) */
function PlayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
        border: "1px solid #ccc", background: "#f9f9f9",
        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
      }}
    >
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
        <path d="M1 1.5L9 6L1 10.5V1.5Z" fill="#666" />
      </svg>
    </button>
  );
}

/* Pause button (blue circle with two bars) */
function PauseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
        border: "1.5px solid #2A92FE", background: "#EDF5FD",
        display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
      }}
    >
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
        <rect x="1" y="1" width="3" height="10" rx="1" fill="#2A92FE" />
        <rect x="6" y="1" width="3" height="10" rx="1" fill="#2A92FE" />
      </svg>
    </button>
  );
}

/* ── Music card ── */
function MusicCard() {
  const [playing, setPlaying] = useState<number | null>(1);

  const toggleTrack = (id: number) => {
    setPlaying(playing === id ? null : id);
  };

  return (
    <div
      style={{
        background: "#f6f6f6",
        borderRadius: "12px 12px 12px 2px",
        border: "0.5px solid rgba(210,218,242,0.5)",
        width: 327,
        overflow: "hidden",
      }}
    >
      {/* Header: 网易云音乐 logo */}
      <div style={{ padding: "12px 12px 0" }}>
        <img src={imgNetEaseLogo} alt="网易云音乐" style={{ height: 16, width: "auto" }} />
      </div>

      {/* Track list */}
      <div style={{ margin: "10px 0 0" }}>
        {MUSIC_TRACKS.map((track, i) => (
          <div key={track.id}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 12px",
                background: "#f9f9f9",
              }}
            >
              {/* Album cover */}
              <img
                src={track.cover}
                alt=""
                style={{ width: 48, height: 48, borderRadius: 4, objectFit: "cover", flexShrink: 0 }}
              />
              {/* Title + artist */}
              <div style={{ flex: 1, overflow: "hidden" }}>
                <p
                  style={{
                    fontFamily: "'PingFang SC', sans-serif",
                    fontWeight: 400,
                    fontSize: 16,
                    lineHeight: "22.4px",
                    color: i === 0 ? "#2A92FE" : "#333",
                    margin: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {track.title}
                </p>
                <p
                  style={{
                    fontFamily: "'PingFang SC', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: "16.8px",
                    color: "#999",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {track.artist} - {track.album}
                </p>
              </div>
              {/* Play/pause */}
              {playing === track.id ? (
                <PauseButton onClick={() => toggleTrack(track.id)} />
              ) : (
                <PlayButton onClick={() => toggleTrack(track.id)} />
              )}
            </div>
            {/* Divider between tracks */}
            {i < MUSIC_TRACKS.length - 1 && (
              <div style={{ height: 0.5, background: "rgba(126,134,142,0.12)", margin: "0 12px" }} />
            )}
          </div>
        ))}
      </div>

      {/* 查看全部 */}
      <div style={{ padding: "8px 12px 12px" }}>
        <button
          style={{
            width: "100%", height: 40,
            background: "#fcfcff",
            border: "0.5px solid rgba(210,218,242,0.5)",
            borderRadius: 8,
            fontFamily: "'PingFang SC', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#3d3d3d",
            cursor: "pointer",
          }}
        >
          查看全部
        </button>
      </div>
    </div>
  );
}

/* ── Initial card carousel ── */
function CardCarousel() {
  return (
    <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none" }}>
      {INITIAL_CARDS.map((card) => (
        <div
          key={card.id}
          style={{
            flexShrink: 0, width: 270, height: 110, borderRadius: 12,
            background: "white", border: "0.5px solid rgba(126,134,142,0.12)",
            display: "flex", overflow: "hidden", cursor: "pointer",
          }}
        >
          <div style={{ width: 79, flexShrink: 0, overflow: "hidden" }}>
            {card.image ? (
              <img src={card.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <div
                style={{
                  width: "100%", height: "100%",
                  background: "linear-gradient(135deg,#e8f0fe 0%,#d0e4ff 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10l4.553-2.277A1 1 0 0121 8.72v6.56a1 1 0 01-1.447.897L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="#9278FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
          <div style={{ flex: 1, padding: "8px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <p style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 15, lineHeight: "21px", color: "#333", margin: 0, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
              {card.title}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {card.avatar ? (
                <img src={card.avatar} alt="" style={{ width: 18, height: 18, borderRadius: "50%" }} />
              ) : (
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(143,193,246,0.2)" }} />
              )}
              <span style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 13, color: "#666" }}>
                {card.source}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main ChatScreen
───────────────────────────────────────────── */
export function ChatScreen({ onBack }: { onBack: () => void }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showInitial, setShowInitial] = useState(true);
  // quick replies change per context
  const [quickReplies, setQuickReplies] = useState([
    "最近有什么好看的电影？",
    "周边有什么美食推荐？",
    "今天天气怎么样？",
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || typing) return;
      const userMsg: Msg = { id: Date.now(), role: "user", text, type: "text" };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setShowInitial(false);
      setTyping(true);

      setTimeout(() => {
        if (isMusicRequest(text)) {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, role: "ai", text: "好的，为您找到以下歌曲", type: "text" },
            { id: Date.now() + 2, role: "ai", type: "music" },
          ]);
          setQuickReplies(["刘德华热门歌曲", "刘德华经典曲目合集", "喜欢刘德华的还喜欢"]);
        } else if (text === "最近有什么好看的电影？") {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, role: "ai", text: "最近口碑不错的电影有《哪吒之魔童降世2》《长安三万里》，周末档还有院线新片上映，推荐您查看附近影院排片哦～", type: "text" },
          ]);
          setQuickReplies(["周边有什么美食推荐？", "今天天气怎么样？", "播放一首刘德华的歌"]);
        } else if (text === "周边有什么美食推荐？") {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, role: "ai", text: "您附近3公里内有：阿生鱼捞（人均98元）、老街肠粉王（人均25元）、正宗港式茶餐厅（人均60元），要我帮您导航过去吗？", type: "text" },
          ]);
          setQuickReplies(["今天天气怎么样？", "播放一首刘德华的歌", "最近有什么好看的电影？"]);
        } else if (text === "今天天气怎么样？") {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, role: "ai", text: "今天晴转多云，最高温28°C，最低温20°C，空气质量优。出行建议带一件薄外套，早晚温差较大注意保暖。", type: "text" },
          ]);
          setQuickReplies(["周边有什么美食推荐？", "播放一首刘德华的歌", "最近有什么好看的电影？"]);
        } else {
          setMessages((prev) => [
            ...prev,
            { id: Date.now() + 1, role: "ai", text: "好的，我来帮您处理这个问题！（演示模式，接入真实AI后将获得更丰富的回复）", type: "text" },
          ]);
        }
        setTyping(false);
      }, 900);
    },
    [typing]
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  /* ─── Status Bar ─── */
  const StatusBar = () => (
    <div style={{ height: 44, display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0 }}>
      <span style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 600, fontSize: 15, color: "#333" }}>10:00</span>
      <div style={{ flex: 1 }} />
      {/* cell bars */}
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" style={{ marginRight: 4 }}>
        <rect x="0" y="7" width="3" height="5" rx="1" fill="#333" />
        <rect x="5" y="4.5" width="3" height="7.5" rx="1" fill="#333" />
        <rect x="10" y="2" width="3" height="10" rx="1" fill="#333" />
        <rect x="15" y="0" width="3" height="12" rx="1" fill="#333" />
      </svg>
      {/* wifi */}
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" style={{ marginRight: 4 }}>
        <circle cx="8" cy="10.5" r="1.5" fill="#333" />
        <path d="M4.5 7.5C5.5 6.5 6.7 5.8 8 5.8s2.5.7 3.5 1.7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M1.5 5C3.2 3.3 5.5 2.3 8 2.3s4.8 1 6.5 2.7" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </svg>
      {/* battery */}
      <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="2.2" stroke="#333" strokeOpacity="0.35" />
        <rect x="2" y="2" width="17" height="8" rx="1.3" fill="#333" />
        <path d="M23 4v4a2 2 0 000-4z" fill="#333" fillOpacity="0.4" />
      </svg>
    </div>
  );

  /* ─── Nav Bar ─── */
  const NavBar = () => (
    <div style={{ height: 44, display: "flex", alignItems: "center", padding: "0 16px", flexShrink: 0, position: "relative" }}>
      <button
        onClick={onBack}
        style={{ width: 36, height: 36, border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", padding: 0 }}
      >
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M10.5 1.5L2 10L10.5 18.5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {/* center */}
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 8 }}>
        <img src={img158} alt="" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
        <div>
          <p style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 600, fontSize: 15, lineHeight: "21px", color: "#333", margin: 0, textAlign: "center" }}>爱小宝</p>
          <p style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 10, lineHeight: "14px", color: "#999", margin: 0, textAlign: "center" }}>内容由AI生成</p>
        </div>
      </div>
      <div style={{ flex: 1 }} />
      {/* phone */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginRight: 4 }}>
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.01l-2.2 2.21z" fill="#3D3D3D" />
      </svg>
      {/* more */}
      <svg width="5" height="20" viewBox="0 0 5 20" fill="none">
        <circle cx="2.5" cy="3" r="2" fill="#333" />
        <circle cx="2.5" cy="10" r="2" fill="#333" />
        <circle cx="2.5" cy="17" r="2" fill="#333" />
      </svg>
    </div>
  );

  /* ─── Initial hero banner ─── */
  const HeroBanner = () => (
    <div style={{ position: "relative", height: 158, overflow: "hidden", flexShrink: 0 }}>
      <img src={imgHero} alt="" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "fill", maxWidth: "none", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        
        
      </div>
    </div>
  );

  /* ─── Initial AI bubble (welcome) ─── */
  const WelcomeBubble = () => (
    <div
      style={{
        margin: "12px 12px",
        borderRadius: "2px 12px 12px 12px",
        background: "linear-gradient(180deg,#eaf4ff 1.979%,#fdfdff 26.752%)",
        border: "0.5px solid #eaf4ff",
        padding: "14px 14px 12px",
      }}
    >
      <p style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 16, lineHeight: "28px", color: "#333", margin: "0 0 12px" }}>
        你好，我是苏晓伴！天气、美食景点、日程通知还有影视推荐等等信息我都能汇总给你~
      </p>
      <CardCarousel />
    </div>
  );

  /* ─── Render a single message row ─── */
  const renderMsg = (msg: Msg) => {
    const isUser = msg.role === "user";

    if (msg.type === "music") {
      return (
        <div key={msg.id} style={{ display: "flex", alignItems: "flex-end", margin: "0 12px 12px" }}>
          <MusicCard />
        </div>
      );
    }

    return (
      <div
        key={msg.id}
        style={{ display: "flex", flexDirection: isUser ? "row-reverse" : "row", alignItems: "flex-end", gap: 8, margin: "0 12px 12px" }}
      >
        <div
          style={{
            maxWidth: isUser ? 260 : 375,
            padding: isUser ? "10px 14px" : "12px 16px",
            borderRadius: isUser ? "12px 2px 12px 12px" : "2px 12px 12px 12px",
            background: isUser ? "#2A92FE" : "#f6f6f6",
            border: isUser ? "none" : "none",
            position: "relative",
            fontFamily: "'PingFang SC',sans-serif",
            fontWeight: 400, fontSize: 16, lineHeight: "22.4px",
            color: isUser ? "white" : "#333",
            textAlign: isUser ? undefined : "justify",
          }}
        >
          {!isUser && (
            <div style={{
              position: "absolute",
              inset: -0.5,
              border: "0.5px solid rgba(210,218,242,0.5)",
              borderRadius: "2.5px 12.5px 12.5px 12.5px",
              pointerEvents: "none",
            }} />
          )}
          {msg.text}
        </div>
      </div>
    );
  };

  /* ─── Bottom toolbar ─── */
  const Toolbar = () => {
    const tools = [
      { label: "智能体广场" },
      { label: "DeepSeek", img: imgDeepSeek },
      { label: "日程助手" },
      { label: "社区通知" },
    ];
    return (
      <div style={{ height: 49, display: "flex", alignItems: "center", paddingLeft: 12, paddingRight: 12, overflowX: "auto", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" as any }}>
        {tools.map((t) => (
          <div
            key={t.label}
            style={{
              height: 25, borderRadius: 24, border: "0.5px solid #d2daf2",
              display: "flex", alignItems: "center", gap: 4, padding: "0 10px",
              cursor: "pointer", marginLeft: 8, flexShrink: 0,
            }}
          >
            {t.img ? (
              <img src={t.img} alt="" style={{ width: 14, height: 14, objectFit: "contain" }} />
            ) : (
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#d2daf2", flexShrink: 0 }} />
            )}
            <span style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 12, color: "#333", whiteSpace: "nowrap" }}>
              {t.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  /* ─── Input bar ─── */
  // (removed inner component — inlined below to prevent remount-on-rerender)

  return (
    <div style={{ position: "absolute", inset: 0, background: "white", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Background image */}
      <img src={imgBg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", pointerEvents: "none", zIndex: 0 }} />
      {/* Gradient blobs background -- remove old blobs */}
      {/* <div style={{ position: "absolute", top: -210, left: -210, width: 658, height: 282, pointerEvents: "none", zIndex: 0 }}>
        <svg width="658" height="282" viewBox="0 0 658 282" fill="none">
          <filter id="cblur1">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <ellipse cx="329" cy="141" rx="329" ry="141" fill="#C8E5FF" fillOpacity="0.8" filter="url(#cblur1)" />
        </svg>
      </div>
      <div style={{ position: "absolute", top: -153, left: -190, width: 323, height: 226, pointerEvents: "none", zIndex: 0 }}>
        <svg width="323" height="226" viewBox="0 0 323 226" fill="none">
          <filter id="cblur2">
            <feGaussianBlur stdDeviation="30" />
          </filter>
          <ellipse cx="161" cy="113" rx="161" ry="113" fill="#E1ECFF" filter="url(#cblur2)" />
        </svg>
      </div> */}

      {/* Header */}
      <div style={{ flexShrink: 0, position: "relative", zIndex: 10 }}>
        <StatusBar />
        <NavBar />
        {/* "下拉查看历史对话" divider */}
        <div style={{ height: 30, display: "flex", alignItems: "center", padding: "0 12px", gap: 8 }}>
          <div style={{ flex: 1, height: 0.5, backgroundImage: "repeating-linear-gradient(to right, rgba(126,134,142,0.24) 0, rgba(126,134,142,0.24) 4px, transparent 4px, transparent 8px)" }} />
          <span style={{ fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 10, color: "#999", whiteSpace: "nowrap" }}>下拉查看历史对话</span>
          <div style={{ flex: 1, height: 0.5, backgroundImage: "repeating-linear-gradient(to right, rgba(126,134,142,0.24) 0, rgba(126,134,142,0.24) 4px, transparent 4px, transparent 8px)" }} />
        </div>
      </div>

      {/* Scrollable chat area */}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden", paddingBottom: 12, scrollbarWidth: "none", position: "relative", zIndex: 1 }}>
        {/* Initial welcome */}
        {showInitial && <HeroBanner />}
        {showInitial && <WelcomeBubble />}

        {/* Chat messages */}
        {messages.map((msg) => renderMsg(msg))}

        {/* Typing indicator */}
        {typing && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, margin: "0 12px 12px" }}>
            <div style={{ padding: "12px 16px", borderRadius: "2px 12px 12px 12px", background: "#f6f6f6", border: "0.5px solid rgba(210,218,242,0.5)", display: "flex", gap: 4, alignItems: "center" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#9278FF", animation: `dotBounce 0.9s ${i * 0.15}s infinite ease-in-out` }} />
              ))}
            </div>
          </div>
        )}

        {/* Quick replies */}
        {!typing && (showInitial || messages.length > 0) && (
          <div style={{ margin: "4px 12px 0", display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            {quickReplies.map((text) => (
              <button
                key={text}
                onClick={() => sendMessage(text)}
                style={{
                  border: "0.5px solid #d2daf2", borderRadius: 8,
                  padding: "8px 14px", background: "transparent", cursor: "pointer",
                  fontFamily: "'PingFang SC',sans-serif", fontWeight: 400,
                  fontSize: 14, color: "#333", lineHeight: "19.6px", whiteSpace: "nowrap",
                }}
              >
                {text}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Bottom bar */}
      <div style={{ flexShrink: 0, background: "white", zIndex: 10, borderTop: "0.5px solid rgba(126,134,142,0.08)" }}>
        <Toolbar />
        {/* Input bar — inlined to avoid remount bug */}
        <div style={{ height: 53, margin: "0 12px", borderRadius: 157, background: "#f4f4f4", display: "flex", alignItems: "center", padding: "0 10px", gap: 0 }}>
          {/* Left: gradient AI icon */}
          <div style={{ width: 36, height: 36, flexShrink: 0 }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <g clipPath="url(#clip_ib)">
                <rect fill="white" fillOpacity="0.5" height="36" rx="18" stroke="white" width="36" />
                <path clipRule="evenodd" fillRule="evenodd"
                  d="M18 6C20.7028 6 22.4758 9.69372 22.498 9.74023C22.5674 9.88614 22.6384 10.0447 22.6406 10.0498C22.8169 10.0302 22.9824 10.0166 22.9824 10.0166C27.1265 9.67163 28.4929 11.978 28.5058 12C29.8632 14.3254 27.49 17.7101 27.4805 17.7236C27.3859 17.8581 27.2803 18 27.2803 18C27.3858 18.1415 27.4805 18.2764 27.4805 18.2764C29.8662 21.6701 28.5058 24 28.5058 24C27.3295 26.015 23.9597 26.0234 23.9307 26.0234C23.4775 26.0234 22.9963 25.9845 22.9824 25.9834C22.8214 25.97 22.6498 25.9512 22.6406 25.9502C22.5694 26.1116 22.499 26.2598 22.499 26.2598C20.7206 30.0003 18 30 18 30C15.2952 29.9999 13.5217 26.3012 13.5019 26.2598C13.4336 26.116 13.3645 25.9596 13.3603 25.9502C13.1839 25.9698 13.0176 25.9834 13.0176 25.9834C12.5281 26.0241 12.0693 26.0234 12.0693 26.0234C8.68914 26.0233 7.50386 24.0166 7.49413 24C6.13938 21.679 8.50129 18.3024 8.51952 18.2764C8.61329 18.143 8.71764 18.0028 8.71972 18C8.6142 17.8584 8.51952 17.7236 8.51952 17.7236C6.13392 14.33 7.49413 12 7.49413 12C8.84566 9.68473 12.9656 10.0124 13.0176 10.0166C13.183 10.0304 13.3603 10.0498 13.3603 10.0498C13.4315 9.88857 13.5019 9.74023 13.5019 9.74023C15.2746 6.01205 17.9826 6.00004 18 6ZM18 24.7373C16.4707 25.3457 15.0146 25.6709 15.0146 25.6709C16.3326 28.3842 17.9864 28.3955 18 28.3955C19.6618 28.3955 20.9853 25.6709 20.9853 25.6709C19.5295 25.3455 18 24.7373 18 24.7373ZM9.79101 19.2783C9.77578 19.3004 8.07182 21.78 8.89843 23.1973C8.89843 23.1973 9.7295 24.6211 12.7764 24.3926C12.771 24.3756 12.3321 22.9725 12.1016 21.3682C12.085 21.3553 10.7974 20.3558 9.79101 19.2783ZM26.209 19.2783C25.1985 20.3601 23.905 21.363 23.8984 21.3682C23.6676 22.9742 23.228 24.3785 23.2236 24.3926C26.2705 24.6214 27.1016 23.1973 27.1016 23.1973C27.9293 21.7782 26.22 19.2944 26.209 19.2783ZM13.9932 22.6914C14.1698 23.4607 14.4043 24.1611 14.4043 24.1611C15.1249 24.0132 15.8763 23.7842 15.8955 23.7783C15.4097 23.5283 14.9326 23.2549 14.9326 23.2549C14.4552 22.9822 13.9932 22.6914 13.9932 22.6914ZM22.0068 22.6914C21.5487 22.9802 21.0747 23.2507 21.0674 23.2549C20.5899 23.5275 20.1045 23.7783 20.1045 23.7783C20.8662 24.0116 21.5967 24.1611 21.5967 24.1611C21.8304 23.4609 22.0068 22.6914 22.0068 22.6914ZM18 13.002C16.8741 13.4905 15.7711 14.1184 15.7441 14.1338C14.6276 14.7714 13.624 15.501 13.624 15.501C13.4872 16.7246 13.4873 18 13.4873 18C13.4873 19.2712 13.6232 20.4913 13.624 20.499C14.627 21.2281 15.7441 21.8662 15.7441 21.8662C16.8552 22.5007 17.9893 22.9934 18 22.998C19.1399 22.5034 20.2568 21.8662 20.2568 21.8662C21.3675 21.2319 22.3663 20.5061 22.376 20.499C22.5127 19.2761 22.5127 18 22.5127 18C22.5127 16.729 22.3768 15.5087 22.376 15.501C21.3781 14.7756 20.2688 14.1406 20.2568 14.1338C19.1401 13.4961 18 13.002 18 13.002ZM11.8896 16.9141C11.3044 17.45 10.8076 18 10.8076 18C11.3039 18.5505 11.8896 19.0859 11.8896 19.0859C11.8658 18.5472 11.8652 18.0044 11.8652 18C11.8652 17.4637 11.8889 16.9316 11.8896 16.9141ZM24.1113 16.9141C24.1352 17.4549 24.1348 18 24.1348 18C24.1348 18.5367 24.1121 19.0693 24.1113 19.0859C24.6932 18.553 25.1871 18.0058 25.1924 18C24.7038 17.4581 24.129 16.9302 24.1113 16.9141ZM12.083 11.5811C12.0448 11.5811 9.60574 11.5905 8.89843 12.8018C8.89843 12.8018 8.06753 14.2259 9.79101 16.7217C9.79101 16.7217 10.8043 15.6367 12.1016 14.6309C12.1058 14.6017 12.3375 13.0044 12.7764 11.6074C12.7681 11.6068 12.4152 11.5811 12.083 11.5811ZM27.1016 12.8018C27.0866 12.7765 26.243 11.3808 23.2236 11.6074C23.2293 11.6255 23.6679 13.0282 23.8984 14.6318C23.908 14.6392 25.1999 15.6412 26.209 16.7217C26.2192 16.7068 27.93 14.221 27.1016 12.8018ZM14.4043 11.8389C14.1705 12.5392 13.9932 13.3086 13.9932 13.3086C14.4491 13.0212 14.921 12.7518 14.9326 12.7451C15.406 12.4748 15.8877 12.2257 15.8955 12.2217C15.1438 11.9914 14.4229 11.8427 14.4043 11.8389ZM21.5967 11.8389C20.8729 11.9875 20.1173 12.2177 20.1045 12.2217C20.5901 12.4717 21.0674 12.7451 21.0674 12.7451C21.5448 13.0177 22.0068 13.3086 22.0068 13.3086C21.832 12.5472 21.6014 11.8529 21.5967 11.8389ZM18 7.60449C17.9865 7.60454 16.3326 7.6158 15.0146 10.3291C15.0146 10.3291 16.4707 10.6544 18 11.2627C18 11.2627 19.5294 10.6545 20.9853 10.3291C20.9853 10.3291 19.6618 7.60449 18 7.60449Z"
                  fill="url(#paint_ib_linear)"
                />
              </g>
              <defs>
                <linearGradient id="paint_ib_linear" gradientUnits="userSpaceOnUse" x1="-3.84986" x2="20.0448" y1="18" y2="39.754">
                  <stop stopColor="#4FB6FF" />
                  <stop offset="0.35" stopColor="#9278FF" />
                  <stop offset="0.721429" stopColor="#F6746B" />
                  <stop offset="1" stopColor="#FFA83D" />
                </linearGradient>
                <clipPath id="clip_ib">
                  <rect fill="white" height="36" width="36" />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/* Text input */}
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="有问题尽管问我～"
            style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontFamily: "'PingFang SC',sans-serif", fontWeight: 400, fontSize: 14, color: "#333", padding: "0 8px" }}
          />
          {/* Right: always voice icon; tap sends if there's text */}
          <button
            onClick={() => input.trim() && sendMessage(input)}
            style={{ width: 36, height: 36, border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 0 }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 0C17.0751 0 22 4.92486 22 11C22 17.0751 17.0751 22 11 22C4.92486 22 0 17.0751 0 11C0 4.92486 4.92486 0 11 0ZM11 1.66992C5.84699 1.66992 1.66992 5.84699 1.66992 11C1.66992 16.153 5.84699 20.3301 11 20.3301C16.153 20.3301 20.3301 16.153 20.3301 11C20.3301 5.84699 16.153 1.66992 11 1.66992ZM12.2959 4.86719C12.5987 4.565 13.089 4.56491 13.3916 4.86719V4.86816L13.4902 4.96973C16.7201 8.33873 16.7165 13.6617 13.4824 17.0264L13.3828 17.1289L13.374 17.1377C13.2331 17.279 13.0402 17.3594 12.8389 17.3594C12.6335 17.3593 12.4366 17.2757 12.2939 17.1279C12.019 16.8351 12.019 16.3805 12.293 16.0889L12.2959 16.0869L12.3779 16.0029C15.0587 13.2284 15.0591 8.82277 12.3789 6.04785L12.2959 5.96387L12.2861 5.9541C11.9932 5.6507 11.9967 5.16679 12.2959 4.86719ZM9.46387 7.06836C9.75395 6.81052 10.1913 6.81066 10.4814 7.06836L10.4932 7.0791L10.4951 7.08105L10.5576 7.14648C12.5876 9.30842 12.588 12.6796 10.5586 14.8418L10.4922 14.9111L10.4893 14.9131L10.4805 14.9209C10.1892 15.1738 9.75617 15.1738 9.46484 14.9209L9.45215 14.9092L9.44824 14.9053L9.44043 14.8965C9.17992 14.6033 9.1824 14.1593 9.44824 13.8691L9.45117 13.8662L9.49805 13.8184C11.0152 12.2428 11.0152 9.74653 9.49805 8.1709L9.44922 8.12109L9.44727 8.11816L9.43945 8.10938C9.18413 7.81502 9.18681 7.37636 9.44727 7.08496L9.45117 7.08008L9.45508 7.07617L9.46387 7.06836ZM6.31934 10.1592C6.65483 9.82884 7.15675 9.7303 7.59375 9.91016C8.03527 10.092 8.32324 10.5224 8.32324 11C8.32324 11.4776 8.03527 11.908 7.59375 12.0898C7.15719 12.2695 6.65575 12.171 6.31934 11.8398L6.30859 11.8301L6.29785 11.8193C6.08348 11.6006 5.96381 11.3063 5.96387 11C5.96387 10.6931 6.08462 10.3985 6.2998 10.1797L6.30957 10.1699L6.31934 10.1592Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
        {/* Home indicator */}
        <div style={{ height: 34, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 134, height: 5, borderRadius: 100, background: "black", opacity: 0.2 }} />
        </div>
      </div>

      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}