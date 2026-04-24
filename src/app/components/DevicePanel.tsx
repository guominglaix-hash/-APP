import { useState, useRef, useCallback } from "react";
import { Moon, Settings, Radio, BookOpen, Volume2 } from "lucide-react";
import img160 from "figma:asset/18425d673c02cafb56f8123c07ccb5a50013f6a4.png";
import imgPhone from "figma:asset/03f03ca3b50e52b94cd0860f02311ed9d0509584.png";
import imgTV from "figma:asset/5ade974b4f4fa1d3905f7d555534e0cb729980e6.png";

/* ──────────────────────────────────────────────────────────
   Toggle switch (matches Figma Light/开关/M design)
────────────────────────────────────────────────────────── */
function Toggle({
  on,
  onChange,
}: {
  on: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div
      onClick={() => onChange?.(!on)}
      style={{
        position: "relative",
        width: 37.5,
        height: 24,
        borderRadius: 12,
        background: on ? "#2A92FE" : "rgba(126,134,142,0.24)",
        flexShrink: 0,
        cursor: onChange ? "pointer" : "default",
        transition: "background 0.2s ease",
      }}
    >
      {/* sliding circle */}
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

/* ──────────────────────────────────────────────────────────
   Connection card (手机 / 电视)
────────────────────────────────────────────────────────── */
function DeviceCard({
  label,
  online,
  subLabel,
  title,
  connected,
  image,
  imageStyle,
  onToggle,
}: {
  label: string;
  online: boolean;
  subLabel?: string;
  title: string;
  connected: boolean;
  image: string;
  imageStyle?: React.CSSProperties;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        height: 145,
        borderRadius: 8,
        background: "#f6f6f6",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* status label top-left */}
      <span
        style={{
          position: "absolute",
          top: 10,
          left: 12,
          fontFamily: "'PingFang SC', sans-serif",
          fontWeight: 400,
          fontSize: 11,
          lineHeight: "15.4px",
          color: online ? "#21C77C" : "rgba(23,26,29,0.24)",
        }}
      >
        {label}
      </span>

      {/* sub-label (TV-1 etc.) */}
      {subLabel && (
        <span
          style={{
            position: "absolute",
            top: 28,
            left: 12,
            fontFamily: "'PingFang SC', sans-serif",
            fontWeight: 400,
            fontSize: 11,
            lineHeight: "15.4px",
            color: "rgba(23,26,29,0.24)",
          }}
        >
          {subLabel}
        </span>
      )}

      {/* device image (top-right, clipped) */}
      <img
        src={image}
        alt={title}
        style={{
          position: "absolute",
          objectFit: "contain",
          opacity: online ? 1 : 0.5,
          pointerEvents: "none",
          ...imageStyle,
        }}
      />

      {/* bottom row: title + status + toggle */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 12,
          right: 12,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "19.6px",
              color: "#333",
              margin: 0,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontFamily: "'PingFang SC', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "16.8px",
              color: connected ? "#666" : "#999",
              margin: 0,
            }}
          >
            {connected ? "已连接" : "未连接"}
          </p>
        </div>
        <Toggle on={connected} onChange={onToggle} />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Quick action tile
────────────────────────────────────────────────────────── */
function ActionTile({
  icon,
  label,
  color,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  color?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        flex: 1,
        height: 90,
        borderRadius: 8,
        background: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 12,
        cursor: "pointer",
        gap: 6,
        position: "relative",
      }}
    >
      {children ? (
        <div style={{ position: "absolute", top: 22, left: "50%", transform: "translateX(-50%)" }}>
          {children}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 40,
            height: 40,
            borderRadius: 20,
            background: color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      )}
      <span
        style={{
          fontFamily: "'PingFang SC', sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "19.6px",
          color: "#333",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Night mode toggle tile (special layout)
────────────────────────────────────────────────────────── */
function NightModeTile({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div
      style={{
        flex: 1,
        height: 90,
        borderRadius: 8,
        background: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 12,
        gap: 6,
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => onChange(!on)}
    >
      {/* Toggle with moon icon overlay */}
      <div
        style={{
          position: "absolute",
          top: 22,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Toggle track */}
        <div
          style={{
            position: "relative",
            width: 37.5,
            height: 24,
            borderRadius: 12,
            background: on ? "#2A92FE" : "rgba(126,134,142,0.24)",
            transition: "background 0.2s ease",
          }}
        >
          {/* Sliding circle */}
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
          {/* Moon icon — faint grey on left side (OFF) or white on right side (ON) */}
          <div
            style={{
              position: "absolute",
              top: 5,
              left: on ? "calc(100% - 22.5px + 4.75px)" : 4.75,
              transition: "left 0.2s ease",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 13.5,
              height: 13.5,
            }}
          >
            <Moon
              size={11}
              fill={on ? "#2A92FE" : "rgba(23,26,29,0.24)"}
              stroke="none"
            />
          </div>
        </div>
      </div>
      <span
        style={{
          fontFamily: "'PingFang SC', sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "19.6px",
          color: "#333",
          whiteSpace: "nowrap",
        }}
      >
        夜间模式
      </span>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Volume slider
────────────────────────────────────────────────────────── */
function VolumeSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const calcVolume = useCallback(
    (clientX: number) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      onChange(pct);
    },
    [onChange]
  );

  return (
    <div
      ref={trackRef}
      style={{
        position: "relative",
        height: 55,
        borderRadius: 12,
        background: "#c8c8c8",
        overflow: "hidden",
        cursor: "pointer",
        userSelect: "none",
        touchAction: "none",
      }}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        calcVolume(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) calcVolume(e.clientX);
      }}
      onPointerUp={() => { dragging.current = false; }}
      onPointerCancel={() => { dragging.current = false; }}
    >
      {/* filled portion */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: `${value}%`,
          background: "white",
          borderRadius: 12,
          transition: dragging.current ? "none" : "width 0.1s",
          display: "flex",
          alignItems: "center",
          paddingLeft: 16,
        }}
      >
        <Volume2 size={18} color="#333" strokeWidth={2} />
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Battery icon (inline SVG)
────────────────────────────────────────────────────────── */
function BatteryIcon() {
  return (
    <svg width="12" height="7" viewBox="0 0 24 11.333" fill="none">
      <rect x="0.5" y="0.5" width="21" height="10.333" rx="2.17" stroke="#333" strokeOpacity="0.35" />
      <rect x="2" y="2" width="15" height="7.33" rx="1.33" fill="#333" />
      <path d="M23 3.67v4a2 2 0 0 0 0-4z" fill="#333" fillOpacity="0.4" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────
   Up arrow (inline SVG)
────────────────────────────────────────────────────────── */
function ArrowUp() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 5L5 1L9 5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────
   Main DevicePanel
────────────────────────────────────────────────────────── */
export function DevicePanel({ onClose }: { onClose: () => void }) {
  const [phoneConnected, setPhoneConnected] = useState(true);
  const [tvConnected, setTvConnected] = useState(false);
  const [nightMode, setNightMode] = useState(true);
  const [volume, setVolume] = useState(35);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(43,43,43,0.95)",
        zIndex: 50,
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 12,
          right: 12,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Card 1: Header ── */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            height: 70,
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          {/* avatar + name + status */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={img160}
                alt="爱小宝"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <p
                style={{
                  fontFamily: "'PingFang SC', sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: "23.8px",
                  color: "#3d3d3d",
                  margin: 0,
                }}
              >
                爱小宝
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 1,
                }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#21C77C",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'PingFang SC', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#333",
                  }}
                >
                  在线
                </span>
                <div style={{ marginLeft: 4 }}>
                  <BatteryIcon />
                </div>
                <span
                  style={{
                    fontFamily: "'PingFang SC', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    color: "#3d3d3d",
                  }}
                >
                  75%
                </span>
              </div>
            </div>
          </div>

          {/* "已连接到手机 ∧" pill — click collapses overlay */}
          <div
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              width: 132,
              padding: "0 15px",
              height: 36,
              borderRadius: 24,
              background: "rgba(0,0,0,0.03)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "'PingFang SC', sans-serif",
                fontWeight: 400,
                fontSize: 14,
                color: "#333",
                whiteSpace: "nowrap",
              }}
            >
              已连接到手机
            </span>
            <ArrowUp />
          </div>
        </div>

        {/* ── Card 2: Connections ── */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            height: 161,
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
          }}
        >
          <div style={{ display: "flex", gap: 8, width: "100%" }}>
            <DeviceCard
              label={phoneConnected ? "在线" : "不在线"}
              online={phoneConnected}
              title="手机"
              connected={phoneConnected}
              image={imgPhone}
              imageStyle={{
                top: 5,
                right: 14,
                width: 47,
                height: 85,
                objectFit: "contain",
              }}
              onToggle={() => setPhoneConnected((v) => !v)}
            />
            <DeviceCard
              label={tvConnected ? "在线" : "不在线"}
              online={tvConnected}
              subLabel="TV-1"
              title="电视"
              connected={tvConnected}
              image={imgTV}
              imageStyle={{
                top: -4,
                right: -10,
                width: 100,
                height: 84,
                objectFit: "contain",
              }}
              onToggle={() => setTvConnected((v) => !v)}
            />
          </div>
        </div>

        {/* ── Card 3: Quick Actions ── */}
        <div
          style={{
            background: "white",
            borderRadius: 12,
            height: 106,
            display: "flex",
            alignItems: "center",
            padding: "0 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              width: "100%",
              height: 90,
            }}
          >
            {/* 夜间模式 */}
            <NightModeTile on={nightMode} onChange={setNightMode} />

            {/* 设置 */}
            <ActionTile
              label="设置"
              color="#21C77C"
              icon={<Settings size={20} color="white" strokeWidth={2} />}
            />

            {/* 红外遥控 */}
            <ActionTile
              label="红外遥控"
              color="#FF9200"
              icon={<Radio size={20} color="white" strokeWidth={2} />}
            />

            {/* 使用手册 */}
            <ActionTile
              label="使用手册"
              color="#81A0FF"
              icon={<BookOpen size={20} color="white" strokeWidth={2} />}
            />
          </div>
        </div>

        {/* ── Volume Slider ── */}
        <VolumeSlider value={volume} onChange={setVolume} />
      </div>
    </div>
  );
}