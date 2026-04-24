import { useState } from "react";
import img160 from "figma:asset/18425d673c02cafb56f8123c07ccb5a50013f6a4.png";
import imgPhone from "figma:asset/03f03ca3b50e52b94cd0860f02311ed9d0509584.png";
import imgTV from "figma:asset/5ade974b4f4fa1d3905f7d555534e0cb729980e6.png";
import svgPaths from "../../imports/容器56843/svg-e6mfggpdeb";
import { imgGroup } from "../../imports/容器56843/svg-jmhy3";

// ─────────────────────────────────────────────
// Design tokens
// ─────────────────────────────────────────────
const FF = "'PingFang SC', sans-serif";
const BLUE = "#2A92FE";
const GREEN = "#21C77C";
const BG = "#f9f9f9";
const DIVIDER = "rgba(126,134,142,0.12)";
const IC = "#333";

// ─────────────────────────────────────────────
// Shared primitives
// ─────────────────────────────────────────────
function ChevronRight() {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
      <path d="M1 1L6 6L1 11" stroke="#C7C7CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      onClick={onBack}
      style={{
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
    >
      <svg width="11" height="19" viewBox="0 0 11.5 20" fill="none">
        <path d="M10 1L1.5 10L10 19" stroke={IC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <div
      onClick={() => onChange(!on)}
      style={{
        position: "relative",
        width: 37.5,
        height: 24,
        borderRadius: 12,
        background: on ? BLUE : "rgba(126,134,142,0.24)",
        flexShrink: 0,
        cursor: "pointer",
        transition: "background 0.2s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 1.5,
          left: on ? "calc(100% - 22.5px)" : 1.5,
          width: 21,
          height: 21,
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.16)",
          transition: "left 0.2s ease",
        }}
      />
    </div>
  );
}

function StatusBar() {
  return (
    <div
      style={{
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        flexShrink: 0,
      }}
    >
      <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 15, color: IC }}>10:00</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
          <rect x="0" y="5.5" width="3" height="5.5" rx="0.5" fill={IC} />
          <rect x="4.5" y="3.5" width="3" height="7.5" rx="0.5" fill={IC} />
          <rect x="9" y="1.5" width="3" height="9.5" rx="0.5" fill={IC} />
          <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill={IC} opacity="0.3" />
        </svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
          <path d="M8 2.5C9.8 2.5 11.5 3.2 12.8 4.4L14.2 3C12.5 1.4 10.3 0.5 8 0.5S3.5 1.4 1.8 3L3.2 4.4C4.5 3.2 6.2 2.5 8 2.5Z" fill={IC} />
          <path d="M8 5.5C9 5.5 9.9 5.9 10.6 6.6L12 5.2C10.9 4.2 9.5 3.5 8 3.5S5.1 4.2 4 5.2L5.4 6.6C6.1 5.9 7 5.5 8 5.5Z" fill={IC} />
          <circle cx="8" cy="9.5" r="1.5" fill={IC} />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.2" stroke={IC} strokeOpacity="0.35" strokeWidth="1" fill="none" />
          <rect x="2" y="2" width="15" height="7" rx="1.3" fill={IC} />
          <path d="M22.5 3.8v4.4a2 2 0 0 0 0-4.4z" fill={IC} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

function NavHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div
      style={{
        height: 44,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        borderBottom: `0.5px solid ${DIVIDER}`,
        background: "white",
      }}
    >
      <BackButton onBack={onBack} />
      <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 17, color: IC }}>{title}</span>
    </div>
  );
}

function MenuRow({
  icon,
  label,
  value,
  toggle,
  onToggle,
  onPress,
  last,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  toggle?: boolean;
  onToggle?: (v: boolean) => void;
  onPress?: () => void;
  last?: boolean;
}) {
  return (
    <div
      onClick={onToggle ? undefined : onPress}
      style={{
        display: "flex",
        alignItems: "center",
        height: 52,
        padding: "0 16px",
        background: "white",
        cursor: onPress ? "pointer" : "default",
        borderBottom: last ? "none" : `0.5px solid ${DIVIDER}`,
        gap: 12,
      }}
    >
      <div style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {icon}
      </div>
      <span style={{ fontFamily: FF, fontSize: 16, color: IC, flex: 1 }}>{label}</span>
      {onToggle !== undefined && toggle !== undefined ? (
        <Toggle on={toggle} onChange={onToggle} />
      ) : (
        <>
          {value && <span style={{ fontFamily: FF, fontSize: 14, color: "#999", marginRight: 4 }}>{value}</span>}
          {onPress && <ChevronRight />}
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// Black linear icons (unified stroke style)
// ─────────────────────────────────────────────────────
const icons = {
  person: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={IC} strokeWidth="1.5" />
      <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  device: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="2" width="14" height="20" rx="2" stroke={IC} strokeWidth="1.5" />
      <circle cx="12" cy="17" r="1" fill={IC} />
    </svg>
  ),
  bell: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a7 7 0 0 0-7 7v3l-2 2v1h18v-1l-2-2v-3a7 7 0 0 0-7-7Z" stroke={IC} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 0 0 4 0" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  gear: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke={IC} strokeWidth="1.5" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke={IC} strokeWidth="1.5" />
    </svg>
  ),
  book: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" stroke={IC} strokeWidth="1.5" />
    </svg>
  ),
  help: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={IC} strokeWidth="1.5" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="0.5" fill={IC} stroke={IC} strokeWidth="1" />
    </svg>
  ),
  info: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={IC} strokeWidth="1.5" />
      <line x1="12" y1="8" x2="12" y2="8" stroke={IC} strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="11" x2="12" y2="16" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  moon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  wifi: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M1.42 9A16 16 0 0 1 22.58 9" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="20" r="1" fill={IC} />
    </svg>
  ),
  trash: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <polyline points="3 6 5 6 21 6" stroke={IC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke={IC} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 11v6M14 11v6" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  play: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={IC} strokeWidth="1.5" />
      <path d="M10 8l6 4-6 4V8Z" stroke={IC} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={IC} strokeWidth="1.5" />
      <path d="M12 3c-2 2.5-3 5.5-3 9s1 6.5 3 9" stroke={IC} strokeWidth="1.5" />
      <path d="M12 3c2 2.5 3 5.5 3 9s-1 6.5-3 9" stroke={IC} strokeWidth="1.5" />
      <path d="M3 12h18" stroke={IC} strokeWidth="1.5" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────
// Bottom navigation bar (matches connected screen exactly,
// "我的" tab highlighted as active)
// ─────────────────────────────────────────────────────
function BottomNav({ onGoToChat, onGoToConnected }: { onGoToChat: () => void; onGoToConnected: () => void }) {
  return (
    <div style={{ height: 92, flexShrink: 0, background: "#f9f9f9", position: "relative", width: "100%" }}>

      {/* ── Icon tab row (58px), positioned above 34px home indicator ── */}
      <div style={{ position: "absolute", bottom: 34, left: 0, right: 0, height: 58, background: "white", overflow: "hidden" }}>
        {/* top border line */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 0, width: 375, height: 0 }}>
          <div style={{ position: "absolute", top: -0.25, left: 0, right: 0, height: 0.5 }}>
            <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" viewBox="0 0 375 0.5">
              <path d="M0 0.25H375" stroke="#7E868E" strokeOpacity="0.08" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        {/* inner 375px container, centered + overflow clipped — mirrors Figma Component5 */}
        <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translateX(-50%) translateY(-50%)", width: 375, height: 58, overflow: "hidden" }}>

          {/* ── 对话 (inactive) ── Component4 */}
          <div
            onClick={onGoToChat}
            style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 8, width: 89.75, height: 42, overflow: "hidden", cursor: "pointer" }}
          >
            <div style={{ position: "absolute", left: "calc(50% - 0.35px)", transform: "translateX(-50%)", top: 0, width: 23.3, height: 42 }}>
              {/* icon */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 23.3, height: 24 }}>
                <div style={{ position: "absolute", top: "12.5%", right: "34.09%", bottom: "26.85%", left: 0 }}>
                  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 15.3574 14.5566">
                    <path d={svgPaths.pec41e80} fill="#666666" />
                  </svg>
                </div>
                <div style={{ position: "absolute", top: "27.42%", right: "1.29%", bottom: "12.5%", left: "43.03%" }}>
                  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 12.9746 14.4202">
                    <path d={svgPaths.p13a0d400} fill="#666666" />
                  </svg>
                </div>
              </div>
              {/* label */}
              <p style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%) translateY(100%)", fontFamily: "'PingFang SC', sans-serif", fontSize: 10, color: "#6c6c6c", whiteSpace: "nowrap", margin: 0, lineHeight: "14px" }}>对话</p>
            </div>
          </div>

          {/* ── 连电视 (inactive) ── Component3 */}
          <div style={{ position: "absolute", left: "calc(50% - 44.88px)", transform: "translateX(-50%)", top: 8, width: 89.75, height: 42, overflow: "hidden" }}>
            {/* TV icon with mask */}
            <div style={{ position: "absolute", left: 33.25, top: 0, width: 23.3, height: 24, overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  top: "4%", right: "7.27%", bottom: "4.75%", left: "7.42%",
                  maskImage: `url('${imgGroup}')`,
                  WebkitMaskImage: `url('${imgGroup}')`,
                  maskSize: "23.3px 24px",
                  maskRepeat: "no-repeat",
                  maskPosition: "-1.73px -0.96px",
                }}
              >
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 19.8747 21.8998">
                  <path clipRule="evenodd" d={svgPaths.p39501d00} fill="#666666" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2b306a00} fill="#666666" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <p style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%) translateY(100%)", fontFamily: "'PingFang SC', sans-serif", fontSize: 10, color: "#6c6c6c", whiteSpace: "nowrap", margin: 0, lineHeight: "14px" }}>连电视</p>
          </div>

          {/* ── 连手机 (inactive) ── Component1 */}
          <div
            onClick={onGoToConnected}
            style={{ position: "absolute", left: "calc(50% + 44.88px)", transform: "translateX(-50%)", top: 8, width: 89.75, height: 42, overflow: "hidden", cursor: "pointer" }}
          >
            <div style={{ position: "absolute", top: 0, left: "36.63%", right: "36.63%", bottom: "42.86%" }}>
              <div style={{ position: "absolute", top: "13.12%", left: "13.12%", right: "17.29%", bottom: "8.96%" }}>
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 16.7002 18.7002">
                  <path d={svgPaths.pc76ef00} fill="#666666" />
                </svg>
              </div>
              <div style={{ position: "absolute", top: "38.15%", left: "46.46%", right: "29.79%", bottom: "33.96%" }}>
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 5.7002 6.69469">
                  <path d={svgPaths.pbcc9b00} fill="#666666" />
                </svg>
              </div>
            </div>
            <p style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%) translateY(100%)", fontFamily: "'PingFang SC', sans-serif", fontSize: 10, color: "#666", whiteSpace: "nowrap", margin: 0, lineHeight: "14px" }}>连手机</p>
          </div>

          {/* ── 我的 (ACTIVE) ── Component2: 3-layer icon + Semibold dark label */}
          <div style={{ position: "absolute", left: "calc(50% + 134.63px)", transform: "translateX(-50%)", top: 8, width: 89.75, height: 42, overflow: "hidden" }}>
            {/* Frame1: left 33.75px, top 0.5px */}
            <div style={{ position: "absolute", left: 33.75, top: 0.5, width: 23.3, height: 24 }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 23.2997 24">
                <path clipRule="evenodd" d={svgPaths.p172a9570} fill="#D1EEFF" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p55f2700} fill="#2A92FE" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.p1a9b8c00} fill="#333333" fillRule="evenodd" />
              </svg>
            </div>
            <p style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%) translateY(100%)", fontFamily: "'PingFang SC', sans-serif", fontWeight: 600, fontSize: 10, color: "#222", whiteSpace: "nowrap", margin: 0, lineHeight: "14px" }}>我的</p>
          </div>

        </div>
      </div>

      {/* Home Indicator */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 34, background: "white", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: 8, width: 134, height: 5, borderRadius: 100, background: "black" }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// Sub-pages
// ─────────────────────────────────────────────────────

function ProfilePage({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="个人信息" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ background: "white", borderRadius: 12, padding: "24px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative", width: 80, height: 80 }}>
            <img src={img160} alt="avatar" style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 24, height: 24, borderRadius: "50%", background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" />
              </svg>
            </div>
          </div>
          <span style={{ fontFamily: FF, fontSize: 12, color: "#999" }}>点击修改头像</span>
        </div>

        <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
          {[
            { label: "昵称", value: "爱小宝" },
            { label: "手机号", value: "135****3388" },
            { label: "账号", value: "AI000123" },
            { label: "性别", value: "保密" },
            { label: "生日", value: "未设置" },
          ].map((item, i, arr) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px", borderBottom: i < arr.length - 1 ? `0.5px solid ${DIVIDER}` : "none", cursor: "pointer" }}>
              <span style={{ fontFamily: FF, fontSize: 16, color: IC, width: 80 }}>{item.label}</span>
              <span style={{ fontFamily: FF, fontSize: 16, color: "#999", flex: 1 }}>{item.value}</span>
              <ChevronRight />
            </div>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, #2A92FE 0%, #9278FF 100%)", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: FF, fontWeight: 600, fontSize: 16, color: "white" }}>AI助手会员</div>
            <div style={{ fontFamily: FF, fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>到期时间：2025-12-31</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.25)", borderRadius: 16, padding: "6px 14px", fontFamily: FF, fontSize: 13, color: "white", cursor: "pointer" }}>立即续费</div>
        </div>
      </div>
    </div>
  );
}

function DevicesPage({ onBack }: { onBack: () => void }) {
  const [phoneOn, setPhoneOn] = useState(true);
  const [tvOn, setTvOn] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="我的设备" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: 0 }}>已连接设备</p>

        <div style={{ background: "white", borderRadius: 12, padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
          <img src={imgPhone} alt="phone" style={{ width: 44, height: 80, objectFit: "contain" }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 15, color: IC }}>我的手机</span>
              <span style={{ fontFamily: FF, fontSize: 11, color: phoneOn ? GREEN : "#999", background: phoneOn ? "rgba(33,199,124,0.1)" : "#f0f0f0", borderRadius: 4, padding: "2px 6px" }}>{phoneOn ? "在线" : "不在线"}</span>
            </div>
            <span style={{ fontFamily: FF, fontSize: 13, color: "#666" }}>最近连接：刚刚</span>
          </div>
          <Toggle on={phoneOn} onChange={setPhoneOn} />
        </div>

        <div style={{ background: "white", borderRadius: 12, padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
          <img src={imgTV} alt="tv" style={{ width: 64, height: 50, objectFit: "contain", opacity: tvOn ? 1 : 0.5 }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
              <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 15, color: IC }}>客厅电视</span>
              <span style={{ fontFamily: FF, fontSize: 11, color: tvOn ? GREEN : "#999", background: tvOn ? "rgba(33,199,124,0.1)" : "#f0f0f0", borderRadius: 4, padding: "2px 6px" }}>{tvOn ? "在线" : "未连接"}</span>
            </div>
            <span style={{ fontFamily: FF, fontSize: 13, color: "#666" }}>TV-1 · 最近连接：昨天</span>
          </div>
          <Toggle on={tvOn} onChange={setTvOn} />
        </div>

        <div style={{ background: "white", borderRadius: 12, height: 52, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", border: `1.5px dashed ${DIVIDER}` }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke={IC} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: FF, fontSize: 15, color: IC }}>添加新设备</span>
        </div>

        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", textAlign: "center", margin: 0 }}>最多可连接 5 台设备</p>
      </div>
    </div>
  );
}

function NotificationsPage({ onBack }: { onBack: () => void }) {
  const [aiReport, setAiReport] = useState(true);
  const [deviceAlert, setDeviceAlert] = useState(true);
  const [systemNotice, setSystemNotice] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [sound, setSound] = useState(true);
  const [vibration, setVibration] = useState(true);

  const rows = [
    { label: "AI播报通知", desc: "AI助手主动推送的内容", on: aiReport, onChange: setAiReport },
    { label: "设备状态提醒", desc: "设备上下线及异常提醒", on: deviceAlert, onChange: setDeviceAlert },
    { label: "系统通知", desc: "更新、维护等系统消息", on: systemNotice, onChange: setSystemNotice },
    { label: "营销消息", desc: "活动推广及优惠信息", on: marketing, onChange: setMarketing },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="消息通知" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: 0 }}>通知类型</p>
        <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
          {rows.map((row, i) => (
            <div key={row.label} style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: i < rows.length - 1 ? `0.5px solid ${DIVIDER}` : "none", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FF, fontSize: 16, color: IC }}>{row.label}</div>
                <div style={{ fontFamily: FF, fontSize: 12, color: "#999", marginTop: 2 }}>{row.desc}</div>
              </div>
              <Toggle on={row.on} onChange={row.onChange} />
            </div>
          ))}
        </div>

        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: 0 }}>提醒方式</p>
        <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px", borderBottom: `0.5px solid ${DIVIDER}` }}>
            <span style={{ fontFamily: FF, fontSize: 16, color: IC, flex: 1 }}>声音</span>
            <Toggle on={sound} onChange={setSound} />
          </div>
          <div style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px" }}>
            <span style={{ fontFamily: FF, fontSize: 16, color: IC, flex: 1 }}>震动</span>
            <Toggle on={vibration} onChange={setVibration} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsPage({ onBack }: { onBack: () => void }) {
  const [autoPlay, setAutoPlay] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifiOnly, setWifiOnly] = useState(false);
  const [cleared, setCleared] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="系统设置" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
          <MenuRow icon={icons.globe} label="语言设置" value="简体中文" onPress={() => {}} />
          <MenuRow icon={icons.play} label="自动播放" toggle={autoPlay} onToggle={setAutoPlay} />
          <MenuRow icon={icons.moon} label="深色模式" toggle={darkMode} onToggle={setDarkMode} />
          <MenuRow icon={icons.wifi} label="仅WiFi下使用" toggle={wifiOnly} onToggle={setWifiOnly} last />
        </div>

        <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
          <div onClick={() => setCleared(true)} style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px", cursor: "pointer" }}>
            <div style={{ width: 24, height: 24, marginRight: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>{icons.trash}</div>
            <span style={{ fontFamily: FF, fontSize: 16, color: IC, flex: 1 }}>清理缓存</span>
            <span style={{ fontFamily: FF, fontSize: 14, color: cleared ? GREEN : "#999", marginRight: 4 }}>{cleared ? "已清理" : "12.4 MB"}</span>
            {!cleared && <ChevronRight />}
          </div>
        </div>

        <div style={{ background: "white", borderRadius: 12, height: 52, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <span style={{ fontFamily: FF, fontSize: 16, color: "#FF3B30" }}>退出登录</span>
        </div>
      </div>
    </div>
  );
}

function ManualPage({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "如何连接手机？", a: "打开 App，点击底部「连手机」按钮，按照提示完成蓝牙/Wi-Fi 配对即可。首次连接大约需要 30 秒。" },
    { q: "AI 回答不准确怎么办？", a: "您可以点击回答旁的「👎」反馈按钮，或前往「帮助与反馈」提交详细描述，我们会持续改进模型。" },
    { q: "如何控制家里的电视？", a: "确保电视已开机并与爱小宝主机在同一局域网，点击「连电视」后即可使用语音或文字控制。" },
    { q: "能同时连接多台设备吗？", a: "会员用户最多可同时连接 5 台设备；免费用户可连接 2 台。" },
    { q: "怎么修改 AI 的名字？", a: "前往「我的」→「个人信息」→「昵称」，即可自定义 AI 助手的昵称。" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="使用手册" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ background: "linear-gradient(135deg, #EAF4FF 0%, #F0E9FF 100%)", borderRadius: 12, padding: "16px" }}>
          <div style={{ fontFamily: FF, fontWeight: 600, fontSize: 15, color: IC, marginBottom: 8 }}>💡 快速上手</div>
          <div style={{ fontFamily: FF, fontSize: 14, color: "#666", lineHeight: "22px" }}>1. 添加设备 → 2. 开始对话 → 3. 享受智能生活</div>
        </div>

        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: 0 }}>常见问题</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
              <div onClick={() => setOpen(open === i ? null : i)} style={{ display: "flex", alignItems: "center", padding: "14px 16px", cursor: "pointer", gap: 12 }}>
                <span style={{ fontFamily: FF, fontSize: 15, color: IC, flex: 1 }}>{faq.q}</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}>
                  <path d="M1 1L6 6L11 1" stroke="#C7C7CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {open === i && (
                <div style={{ padding: "0 16px 14px", fontFamily: FF, fontSize: 14, color: "#666", lineHeight: "22px" }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedbackPage({ onBack }: { onBack: () => void }) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const categories = ["功能异常", "内容不准确", "操作不方便", "设备连接问题", "其他问题"];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="帮助与反馈" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ background: "white", borderRadius: 12, padding: "16px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #2A92FE, #9278FF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FF, fontWeight: 600, fontSize: 15, color: IC }}>在线客服</div>
            <div style={{ fontFamily: FF, fontSize: 13, color: "#999", marginTop: 2 }}>工作时间 9:00–18:00</div>
          </div>
          <ChevronRight />
        </div>

        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: 0 }}>问题类型</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {categories.map((cat, i) => (
            <div key={cat} onClick={() => setSelected(i)} style={{ padding: "7px 14px", borderRadius: 20, border: `1.5px solid ${selected === i ? BLUE : DIVIDER}`, background: selected === i ? "rgba(42,146,254,0.08)" : "white", fontFamily: FF, fontSize: 14, color: selected === i ? BLUE : "#666", cursor: "pointer", transition: "all 0.15s" }}>
              {cat}
            </div>
          ))}
        </div>

        <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: 0 }}>问题描述</p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="请描述您遇到的问题，我们会尽快跟进处理…"
          style={{ width: "100%", minHeight: 120, borderRadius: 12, border: `1px solid ${DIVIDER}`, padding: "12px 14px", fontFamily: FF, fontSize: 15, color: IC, resize: "none", outline: "none", boxSizing: "border-box", background: "white" }}
        />

        {sent ? (
          <div style={{ height: 50, borderRadius: 25, background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 16, color: "white" }}>已提交，感谢反馈</span>
          </div>
        ) : (
          <button
            onClick={() => { if (text.trim() || selected !== null) setSent(true); }}
            style={{ height: 50, borderRadius: 25, background: text.trim() || selected !== null ? BLUE : "rgba(42,146,254,0.3)", border: "none", fontFamily: FF, fontWeight: 600, fontSize: 16, color: "white", cursor: text.trim() || selected !== null ? "pointer" : "default", transition: "background 0.2s" }}
          >
            提交反馈
          </button>
        )}
      </div>
    </div>
  );
}

function AboutPage({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />
      <NavHeader title="关于爱小宝" onBack={onBack} />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ background: "white", borderRadius: 12, padding: "32px 0 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: "linear-gradient(135deg, #2A92FE 0%, #9278FF 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ fontFamily: FF, fontWeight: 600, fontSize: 18, color: IC }}>爱小宝 AI助手</div>
          <div style={{ fontFamily: FF, fontSize: 13, color: "#999" }}>版本 v2.6.1</div>
          <div style={{ marginTop: 4, padding: "4px 12px", background: "rgba(42,146,254,0.08)", borderRadius: 10, fontFamily: FF, fontSize: 12, color: BLUE }}>已是最新版本</div>
        </div>

        <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
          {["用户协议", "隐私政策", "开源许可", "版权声明"].map((item, i, arr) => (
            <div key={item} style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px", cursor: "pointer", borderBottom: i < arr.length - 1 ? `0.5px solid ${DIVIDER}` : "none" }}>
              <span style={{ fontFamily: FF, fontSize: 16, color: IC, flex: 1 }}>{item}</span>
              <ChevronRight />
            </div>
          ))}
        </div>

        <p style={{ fontFamily: FF, fontSize: 12, color: "#bbb", textAlign: "center", margin: 0, lineHeight: "20px" }}>
          © 2025 爱小宝科技有限公司{"\n"}保留所有权利
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// MAIN — 我的主页
// ─────────────────────────────────────────────────────
type SubPage = "profile" | "devices" | "notifications" | "settings" | "manual" | "feedback" | "about";

function MainMinePage({
  onNavigate,
  onGoToChat,
  onGoToConnected,
}: {
  onNavigate: (p: SubPage) => void;
  onGoToChat: () => void;
  onGoToConnected: () => void;
}) {
  const menuGroups = [
    {
      title: "账号与服务",
      items: [
        { icon: icons.person, label: "个人信息", value: "", page: "profile" as SubPage },
        { icon: icons.device, label: "我的设备", value: "2台", page: "devices" as SubPage },
      ],
    },
    {
      title: "消息与设置",
      items: [
        { icon: icons.bell, label: "消息通知", value: "", page: "notifications" as SubPage },
        { icon: icons.gear, label: "系统设置", value: "", page: "settings" as SubPage },
      ],
    },
    {
      title: "帮助",
      items: [
        { icon: icons.book, label: "使用手册", value: "", page: "manual" as SubPage },
        { icon: icons.help, label: "帮助与反馈", value: "", page: "feedback" as SubPage },
        { icon: icons.info, label: "关于爱小宝", value: "v2.6.1", page: "about" as SubPage },
      ],
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: BG }}>
      <StatusBar />

      {/* Profile header */}
      <div style={{ background: "linear-gradient(160deg, #EBF4FF 0%, #F0E9FF 60%, #FFF5EB 100%)", padding: "16px 20px 24px", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={img160} alt="avatar" style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: "2px solid white", boxShadow: "0 2px 10px rgba(42,146,254,0.2)" }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 20, color: IC }}>爱小宝</span>
              <div style={{ background: "linear-gradient(90deg, #2A92FE, #9278FF)", borderRadius: 8, padding: "2px 8px", display: "flex", alignItems: "center", gap: 3 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4Z" stroke="white" strokeWidth="1.5" fill="none" />
                </svg>
                <span style={{ fontFamily: FF, fontSize: 11, color: "white", fontWeight: 600 }}>VIP</span>
              </div>
            </div>
            <span style={{ fontFamily: FF, fontSize: 13, color: "#666" }}>AI000123 · 内容由AI生成</span>
          </div>
          <div onClick={() => onNavigate("profile")} style={{ cursor: "pointer", padding: 8 }}>
            <ChevronRight />
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 20, background: "rgba(255,255,255,0.7)", borderRadius: 12, overflow: "hidden" }}>
          {[
            { label: "对话记录", value: "147" },
            { label: "连接设备", value: "2台" },
            { label: "使用天数", value: "38天" },
          ].map((stat, i, arr) => (
            <div key={stat.label} style={{ flex: 1, padding: "12px 0", display: "flex", flexDirection: "column", alignItems: "center", borderRight: i < arr.length - 1 ? `0.5px solid ${DIVIDER}` : "none" }}>
              <span style={{ fontFamily: FF, fontWeight: 600, fontSize: 18, color: IC }}>{stat.value}</span>
              <span style={{ fontFamily: FF, fontSize: 12, color: "#999", marginTop: 2 }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Menu scroll area — minHeight:0 is essential */}
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 16 }}>
        {menuGroups.map((group) => (
          <div key={group.title}>
            <p style={{ fontFamily: FF, fontSize: 12, color: "#999", margin: "0 0 8px 4px" }}>{group.title}</p>
            <div style={{ background: "white", borderRadius: 12, overflow: "hidden" }}>
              {group.items.map((item, i) => (
                <div
                  key={item.label}
                  onClick={() => onNavigate(item.page)}
                  style={{ display: "flex", alignItems: "center", height: 52, padding: "0 16px", cursor: "pointer", borderBottom: i < group.items.length - 1 ? `0.5px solid ${DIVIDER}` : "none", gap: 12 }}
                >
                  <div style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{item.icon}</div>
                  <span style={{ fontFamily: FF, fontSize: 16, color: IC, flex: 1 }}>{item.label}</span>
                  {item.value && <span style={{ fontFamily: FF, fontSize: 14, color: "#999", marginRight: 4 }}>{item.value}</span>}
                  <ChevronRight />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom navigation — same design as connected screen, "我的" active */}
      <BottomNav onGoToChat={onGoToChat} onGoToConnected={onGoToConnected} />
    </div>
  );
}

// ─────────────────────────────────────────────────────
// Root MineScreen — manages sub-page navigation
// ─────────────────────────────────────────────────────
export function MineScreen({ onBack, onGoToChat }: { onBack: () => void; onGoToChat: () => void }) {
  const [subPage, setSubPage] = useState<SubPage | null>(null);
  const [prevPage, setPrevPage] = useState<SubPage | null>(null);
  const [animating, setAnimating] = useState(false);

  const navigate = (page: SubPage | null) => {
    if (animating) return;
    setPrevPage(subPage);
    setSubPage(page);
    setAnimating(true);
    setTimeout(() => { setPrevPage(null); setAnimating(false); }, 300);
  };

  const subPages: Record<SubPage, React.ReactNode> = {
    profile: <ProfilePage onBack={() => navigate(null)} />,
    devices: <DevicesPage onBack={() => navigate(null)} />,
    notifications: <NotificationsPage onBack={() => navigate(null)} />,
    settings: <SettingsPage onBack={() => navigate(null)} />,
    manual: <ManualPage onBack={() => navigate(null)} />,
    feedback: <FeedbackPage onBack={() => navigate(null)} />,
    about: <AboutPage onBack={() => navigate(null)} />,
  };

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {/* Main page */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: subPage ? "translateX(-30%)" : "translateX(0)",
          transition: "transform 300ms cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: subPage ? "none" : "auto",
        }}
      >
        <MainMinePage onNavigate={navigate} onGoToChat={onGoToChat} onGoToConnected={onBack} />
      </div>

      {/* Sub-page overlay */}
      {(subPage || prevPage) && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: subPage ? "translateX(0)" : "translateX(100%)",
            transition: "transform 300ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {subPages[subPage ?? prevPage!]}
        </div>
      )}
    </div>
  );
}