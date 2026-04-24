import svgPaths from "./svg-drs6uqn1kt";
import img158 from "figma:asset/973d057a85643a10d3a95418e313234bf513f914.png";
import img160 from "figma:asset/18425d673c02cafb56f8123c07ccb5a50013f6a4.png";
import { imgGroup } from "./svg-q22qp";

function Component13() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[60px] left-1/2 overflow-clip w-[220px]" data-name="容器 56785">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[60px] left-1/2 top-1/2 w-[220px]" data-name="容器 56785" />
      <p className="-translate-x-1/2 absolute font-['PingFang_SC:Semibold',sans-serif] leading-[28px] left-1/2 not-italic text-[#333] text-[20px] text-center top-0 whitespace-nowrap">你好，我是你的智能管家</p>
      <p className="-translate-x-1/2 absolute bottom-[28px] font-['PingFang_SC:Regular',sans-serif] leading-[28px] left-1/2 not-italic text-[#666] text-[16px] text-center translate-y-full whitespace-nowrap">让我们开始愉快的对话之旅吧</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="-translate-x-1/2 absolute h-[240px] left-1/2 overflow-clip top-0 w-[220px]" data-name="容器 56788">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[240px] left-1/2 top-1/2 w-[220px]" data-name="容器 56788" />
      <div className="-translate-x-1/2 absolute left-1/2 size-[160px] top-0" data-name="圆形 158">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="160" src={img158} width="160" />
      </div>
      <Component13 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bottom-1/4 left-[19.2%] right-[61.6%] top-1/4" data-name="对话">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_8_204)" id="å¯¹è¯">
          <g id="å¯¹è¯_2" />
          <path d={svgPaths.p5eb200} fill="var(--fill-0, white)" id="Subtract" />
        </g>
        <defs>
          <clipPath id="clip0_8_204">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[48px] left-1/2 overflow-clip w-[125px]" data-name="按钮">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#333] h-[48px] left-1/2 rounded-[24px] top-1/2 w-[125px]" data-name="按钮" />
      <Component1 />
      <p className="absolute font-['PingFang_SC:Semibold',sans-serif] leading-[21px] not-italic right-[46.5px] text-[15px] text-center text-white top-[calc(50%-10.5px)] translate-x-1/2 whitespace-nowrap">去对话</p>
    </div>
  );
}

function Component12({ onGoToChat }: { onGoToChat?: () => void }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[312px] left-[calc(50%-0.5px)] overflow-clip top-[calc(50%-10px)] w-[220px]" data-name="容器 56772">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[312px] left-1/2 top-1/2 w-[220px]" data-name="容器 56772" />
      <Component14 />
      <div
        className="-translate-x-1/2 absolute bottom-0 h-[48px] left-1/2 overflow-clip w-[125px] cursor-pointer active:opacity-80 transition-opacity select-none"
        data-name="按钮"
        onClick={onGoToChat}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#333] h-[48px] left-1/2 rounded-[24px] top-1/2 w-[125px]" data-name="按钮" />
        <Component1 />
        <p className="absolute font-['PingFang_SC:Semibold',sans-serif] leading-[21px] not-italic right-[46.5px] text-[15px] text-center text-white top-[calc(50%-10.5px)] translate-x-1/2 whitespace-nowrap">去对话</p>
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute bottom-[15.33px] h-[11.333px] right-[14.34px] w-[24.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.328 11.3333">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, #333333)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p1b543500} fill="var(--fill-0, #333333)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, #333333)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function BarsStatusBarsIPhoneLight() {
  return (
    <div className="-translate-x-1/2 absolute h-[44px] left-1/2 overflow-clip top-0 w-[375px]" data-name="Bars/Status Bars/iPhone/Light">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 top-1/2 w-[375px]" data-name="Bars/Status Bars/iPhone/Light" />
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.333 10.9999">
          <path d={svgPaths.pb976900} fill="var(--fill-0, #333333)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10.667">
          <path d={svgPaths.p3eb0a700} fill="var(--fill-0, #333333)" id="Cellular Connection" />
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['PingFang_SC:Semibold',sans-serif] leading-[21px] left-[48px] not-italic text-[#333] text-[15px] text-center top-[calc(50%-7.67px)] w-[56px]">10:00</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[51px]" data-name="容器 56844">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[24px] left-1/2 top-1/2 w-[51px]" data-name="容器 56844" />
      <p className="-translate-x-1/2 absolute font-['PingFang_SC:Semibold',sans-serif] leading-[23.8px] left-1/2 not-italic text-[#3d3d3d] text-[17px] text-center top-[calc(50%-12px)] whitespace-nowrap">爱小宝</p>
    </div>
  );
}

function Component18() {
  return (
    <div className="-translate-y-1/2 absolute h-[17px] left-0 overflow-clip top-1/2 w-[32px]" data-name="容器 56846">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-1/2 top-1/2 w-[32px]" data-name="容器 56846" />
      <div className="-translate-y-1/2 absolute left-0 size-[4px] top-1/2" data-name="圆形 159">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #21C77C)" id="åå½¢ 159" r="2" />
        </svg>
      </div>
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[16.8px] not-italic right-[12px] text-[#333] text-[12px] text-center top-[calc(50%-8.5px)] translate-x-1/2 whitespace-nowrap">在线</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[12px] top-1/2" data-name="容器">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_8_191)" id="å®¹å¨">
          <mask height="12" id="mask0_8_191" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="12" id="å®¹å¨_2" width="12" />
          </mask>
          <g mask="url(#mask0_8_191)">
            <path d={svgPaths.p1c8fd980} fill="var(--fill-0, #333333)" id="è·¯å¾" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8_191">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component17() {
  return (
    <div className="-translate-y-1/2 absolute h-[17px] overflow-clip right-0 top-1/2 w-[42px]" data-name="容器 56845">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-1/2 top-1/2 w-[42px]" data-name="容器 56845" />
      <Component2 />
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[16.8px] not-italic right-[13px] text-[#3d3d3d] text-[12px] text-center top-[calc(50%-8.5px)] translate-x-1/2 whitespace-nowrap">75%</p>
    </div>
  );
}

function Component19() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[17px] left-1/2 overflow-clip w-[82px]" data-name="容器 56847">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17px] left-1/2 top-1/2 w-[82px]" data-name="容器 56847" />
      <Component18 />
      <Component17 />
    </div>
  );
}

function Component20() {
  return (
    <div className="-translate-y-1/2 absolute h-[43px] overflow-clip right-0 top-1/2 w-[82px]" data-name="容器 56848">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[43px] left-1/2 top-1/2 w-[82px]" data-name="容器 56848" />
      <Component16 />
      <Component19 />
    </div>
  );
}

function Component21() {
  return (
    <div className="-translate-y-1/2 absolute h-[44px] left-[8px] overflow-clip top-1/2 w-[134px]" data-name="容器 56849">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[44px] left-1/2 top-1/2 w-[134px]" data-name="容器 56849" />
      <div className="-translate-y-1/2 absolute left-0 size-[44px] top-1/2" data-name="圆形 160">
        <div className="absolute inset-[-1.14%]">
          <img alt="" className="block max-w-none size-full" height="45" src={img160} width="45" />
        </div>
      </div>
      <Component20 />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute inset-[42.36%_12.88%_41.67%_79.55%]" data-name="下箭头">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.75">
        <g id="ä¸ç®­å¤´">
          <path d={svgPaths.p6ded6f1} fill="var(--fill-0, #333333)" id="è·¯å¾ 128ï¼è¾¹æ¡ï¼" />
        </g>
      </svg>
    </div>
  );
}

function Component8({ onOpenPanel }: { onOpenPanel?: () => void }) {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[36px] left-[calc(50%+101.5px)] overflow-clip top-1/2 w-[132px] cursor-pointer select-none"
      data-name="容器 11357"
      onClick={onOpenPanel}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(0,0,0,0.03)] h-[36px] left-1/2 rounded-[24px] top-1/2 w-[132px]" data-name="容器 11357" />
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[19.6px] left-[15px] not-italic text-[#333] text-[14px] top-[calc(50%-10px)] whitespace-nowrap">已连接到手机</p>
      <Component3 />
    </div>
  );
}

function Component22({ onOpenPanel }: { onOpenPanel?: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute h-[70px] left-1/2 overflow-clip top-0 w-[351px]" data-name="容器 56852">
      <div className="-translate-x-1/2 absolute h-[70px] left-1/2 rounded-[12px] top-0 w-[351px]" data-name="容器 56852" />
      <Component21 />
      <Component8 onOpenPanel={onOpenPanel} />
    </div>
  );
}

function Component23({ onOpenPanel }: { onOpenPanel?: () => void }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[70px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="容器 57013">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[70px] left-1/2 top-1/2 w-[375px]" data-name="容器 57013" />
      <Component22 onOpenPanel={onOpenPanel} />
    </div>
  );
}

function Component24({ onOpenPanel }: { onOpenPanel?: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 h-[70px] left-1/2 overflow-clip w-[375px]" data-name="容器 57014">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[70px] left-1/2 top-1/2 w-[375px]" data-name="容器 57014" />
      <Component23 onOpenPanel={onOpenPanel} />
      <div className="-translate-x-1/2 absolute bottom-0 h-0 left-1/2 w-[375px]" data-name="直线 36">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 0.5">
            <path d="M0 0.25H375" id="ç´çº¿ 36" stroke="var(--stroke-0, #7E868E)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component9({ onOpenPanel }: { onOpenPanel?: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute h-[118px] left-1/2 overflow-clip top-0 w-[375px]" data-name="容器 13992">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[118px] left-1/2 top-1/2 w-[375px]" data-name="容器 13992" />
      <BarsStatusBarsIPhoneLight />
      <Component24 onOpenPanel={onOpenPanel} />
    </div>
  );
}

function Component10() {
  return (
    <div className="-translate-y-1/2 absolute h-[42px] left-[8px] overflow-clip top-1/2 w-[89.75px]" data-name="容器 14005">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[42px] left-1/2 top-1/2 w-[89.75px]" data-name="容器 14005" />
      <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-0.35px)] top-0 w-[23.3px]" data-name="06 金刚区按钮">
        <div className="absolute h-[24px] right-0 top-0 w-[23.3px]" data-name="对话">
          <div className="absolute bottom-[29.17%] left-[4.29%] right-[48.5%] top-1/4" data-name="路径">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d={svgPaths.p20603e0} fill="var(--fill-0, #D1EEFF)" id="è·¯å¾" />
            </svg>
          </div>
          <div className="absolute inset-[12.5%_34.09%_26.85%_0]" data-name="路径">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3574 14.5566">
              <path d={svgPaths.pec41e80} fill="var(--fill-0, #333333)" id="è·¯å¾" />
            </svg>
          </div>
          <div className="absolute inset-[27.42%_1.29%_12.5%_43.03%]" data-name="路径">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9746 14.4202">
              <path d={svgPaths.p13a0d400} fill="var(--fill-0, #2A92FE)" id="è·¯å¾" />
            </svg>
          </div>
        </div>
        <p className="-translate-x-1/2 absolute bottom-[14px] font-['PingFang_SC:Semibold',sans-serif] leading-[14px] left-1/2 not-italic text-[#333] text-[10px] text-center translate-y-full whitespace-nowrap">对话</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[4%_7.27%_4.75%_7.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.73px_-0.96px] mask-size-[23.3px_24px]" style={{ maskImage: `url('${imgGroup}')` }} data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8747 21.8998">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p39501d00} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2b306a00} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask group">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[24px] left-[33.25px] overflow-clip top-0 w-[23.3px]" data-name="Frame">
      <MaskGroup />
    </div>
  );
}

function Component7() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-44.88px)] top-[8px] w-[89.75px]" data-name="06 金刚区按钮">
      <p className="-translate-x-1/2 absolute bottom-[14px] font-['PingFang_SC:Regular',sans-serif] leading-[14px] left-1/2 not-italic text-[#666] text-[10px] text-center translate-y-full whitespace-nowrap">连电视</p>
      <Frame />
    </div>
  );
}

function Component5() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+44.88px)] overflow-clip top-[8px] w-[89.75px]" data-name="06 金刚区按钮">
      <div className="-translate-x-1/2 absolute h-[42px] left-1/2 top-0 w-[89.75px]" data-name="06 金刚区按钮" />
      <div className="absolute inset-[0_36.63%_42.86%_36.63%]" data-name="手机">
        <div className="absolute inset-[13.12%_17.29%_8.96%_13.12%]" data-name="减去顶层 24">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.7002 18.7002">
            <path d={svgPaths.pc76ef00} fill="var(--fill-0, #666666)" id="åå»é¡¶å± 24" />
          </svg>
        </div>
        <div className="absolute inset-[38.15%_29.79%_33.96%_46.46%]" data-name="减去顶层 23">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7002 6.69469">
            <path d={svgPaths.pbcc9b00} fill="var(--fill-0, #666666)" id="åå»é¡¶å± 23" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute bottom-[14px] font-['PingFang_SC:Regular',sans-serif] leading-[14px] left-1/2 not-italic text-[#666] text-[10px] text-center translate-y-full whitespace-nowrap">连手机</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[24px] left-[32.75px] top-0 w-[23.3px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2997 24">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.p19af7c00} fill="var(--fill-0, #666666)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component6({ onGoToMine }: { onGoToMine?: () => void }) {
  return (
    <div
      className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+134.63px)] top-[8px] w-[89.75px] cursor-pointer select-none"
      data-name="06 金刚区按钮"
      onClick={onGoToMine}
    >
      <p className="-translate-x-1/2 absolute bottom-[14px] font-['PingFang_SC:Regular',sans-serif] leading-[14px] left-1/2 not-italic text-[#666] text-[10px] text-center translate-y-full whitespace-nowrap">我的</p>
      <Frame1 />
    </div>
  );
}

function Component11({ onGoToMine }: { onGoToMine?: () => void }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="容器 14141">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-1/2 top-1/2 w-[375px]" data-name="容器 14141" />
      <Component10 />
      <Component7 />
      <Component5 />
      <Component6 onGoToMine={onGoToMine} />
    </div>
  );
}

function Component4({ onGoToMine }: { onGoToMine?: () => void }) {
  return (
    <div className="absolute bottom-[34px] h-[58px] left-0 overflow-clip right-0" data-name="图标">
      <div className="absolute bg-white bottom-0 h-[58px] left-0 right-0" data-name="图标" />
      <div className="-translate-x-1/2 absolute h-0 left-1/2 top-0 w-[375px]" data-name="直线 36">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 0.5">
            <path d="M0 0.25H375" id="ç´çº¿ 36" stroke="var(--stroke-0, #7E868E)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Component11 onGoToMine={onGoToMine} />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-0 overflow-clip right-0" data-name="HomeIndicator">
      <div className="absolute bg-white bottom-0 h-[34px] left-0 right-0" data-name="HomeIndicator" />
      <div className="-translate-x-1/2 absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Component15({ onGoToMine }: { onGoToMine?: () => void }) {
  return (
    <div className="absolute bg-[#f9f9f9] bottom-0 h-[92px] left-0 overflow-clip w-[375px]" data-name="容器 56843">
      <div className="absolute bottom-0 h-[92px] left-0 w-[375px]" data-name="容器 56843" />
      <Component4 onGoToMine={onGoToMine} />
      <HomeIndicator />
    </div>
  );
}

export default function Ai({ onGoToChat, onOpenPanel, onGoToMine }: { onGoToChat?: () => void; onOpenPanel?: () => void; onGoToMine?: () => void }) {
  return (
    <div className="bg-white relative size-full" data-name="AI助手">
      <Component12 onGoToChat={onGoToChat} />
      <Component9 onOpenPanel={onOpenPanel} />
      <Component15 onGoToMine={onGoToMine} />
    </div>
  );
}