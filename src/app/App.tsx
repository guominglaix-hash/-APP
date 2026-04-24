import { useState, useRef, useEffect } from "react";
import AiHome from "../imports/Ai助手-1/Ai助手";
import AiConnected from "../imports/Ai助手-2/Ai助手-8-145";
import { DevicePanel } from "./components/DevicePanel";
import { ChatScreen } from "./components/ChatScreen";
import { MineScreen } from "./components/MineScreen";

type Screen = "home" | "connected" | "chat" | "mine";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [animating, setAnimating] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (to: Screen) => {
    if (animating) return;
    setScreen(to);
    setAnimating(true);
    timeoutRef.current = setTimeout(() => setAnimating(false), 350);
  };

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  // Slide direction logic:
  // home(0) → connected(1) → chat(2)
  //                        ↕
  //                       mine(2) – slides up from connected, same depth as chat
  const order: Record<Screen, number> = { home: 0, connected: 1, chat: 2, mine: 2 };

  const getTransform = (s: Screen) => {
    if (s === screen) return "translateX(0)";
    if (s === "home") return "translateX(-100%)";
    if (s === "mine") {
      // mine slides in from right relative to connected
      return screen === "connected" || screen === "chat"
        ? "translateX(100%)"
        : screen === "mine"
        ? "translateX(0)"
        : "translateX(100%)";
    }
    if (s === "chat") {
      return screen === "chat" ? "translateX(0)" : "translateX(100%)";
    }
    if (s === "connected") {
      return screen === "home" ? "translateX(100%)" : "translateX(0)";
    }
    return "translateX(0)";
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex items-center justify-center">
      <div
        className="relative bg-white overflow-hidden shadow-2xl"
        style={{ width: 375, height: 812, borderRadius: 44 }}
      >
        {/* ── home ── */}
        <div
          className="absolute inset-0 transition-transform"
          style={{
            transform: screen === "home" ? "translateX(0)" : "translateX(-100%)",
            transitionDuration: "350ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 0,
          }}
        >
          <AiHome onAddDevice={() => navigate("connected")} />
        </div>

        {/* ── connected ── */}
        <div
          className="absolute inset-0 transition-transform"
          style={{
            transform: screen === "home" ? "translateX(100%)" : "translateX(0)",
            transitionDuration: "350ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 1,
          }}
        >
          <AiConnected
            onGoToChat={() => navigate("chat")}
            onOpenPanel={() => setShowPanel(true)}
            onGoToMine={() => navigate("mine")}
          />
          {/* Device panel overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: showPanel ? 1 : 0,
              pointerEvents: showPanel ? "auto" : "none",
              transition: "opacity 0.25s ease",
              zIndex: 10,
            }}
          >
            <DevicePanel onClose={() => setShowPanel(false)} />
          </div>
        </div>

        {/* ── chat ── */}
        <div
          className="absolute inset-0 transition-transform"
          style={{
            transform: screen === "chat" ? "translateX(0)" : "translateX(100%)",
            transitionDuration: "350ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: screen === "chat" ? 10 : 2,
          }}
        >
          <ChatScreen onBack={() => navigate("connected")} />
        </div>

        {/* ── mine ── */}
        <div
          className="absolute inset-0 transition-transform"
          style={{
            transform: screen === "mine" ? "translateX(0)" : "translateX(100%)",
            transitionDuration: "350ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: screen === "mine" ? 10 : 2,
          }}
        >
          <MineScreen
            onBack={() => navigate("connected")}
            onGoToChat={() => navigate("chat")}
          />
        </div>
      </div>
    </div>
  );
}
