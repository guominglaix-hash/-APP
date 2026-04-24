import svgPaths from "./svg-kied62ornn";
import img212 from "figma:asset/287568ceacf583dfb42a0dda1e85e5f790b5f1fb.png";
import img from "figma:asset/ed1e4d17c6a6df24b66e382660e0bd9c737d9f9e.png";
import img160 from "figma:asset/18425d673c02cafb56f8123c07ccb5a50013f6a4.png";
import { imgGroup } from "./svg-ylj9p";

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-center leading-[28px] left-[75.5px] not-italic text-center top-[399px] w-[224px]">
      <p className="font-['PingFang_SC:Semibold',sans-serif] relative shrink-0 text-[#333] text-[20px] w-full">你好，我是你的智能管家</p>
      <p className="font-['PingFang_SC:Regular',sans-serif] relative shrink-0 text-[#666] text-[16px] w-full">添加设备开始愉快的对话之旅吧</p>
    </div>
  );
}

function Sensor() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[4.18px] h-[15.642px] left-1/2 w-[21.5px]" data-name="sensor">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 15.6421">
        <g clipPath="url(#clip0_4_258)" id="sensor">
          <path d={svgPaths.p2412dbf0} fill="var(--fill-0, white)" id="combo shape" />
        </g>
        <defs>
          <clipPath id="clip0_4_258">
            <rect fill="white" height="15.6421" width="21.5" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6({ onAddDevice }: { onAddDevice?: () => void }) {
  return (
    <div
      className="absolute bg-[#333] content-stretch flex gap-[8px] items-center left-[117.5px] px-[24px] py-[12px] rounded-[24px] top-[483.5px] cursor-pointer active:opacity-80 transition-opacity select-none"
      onClick={onAddDevice}
    >
      <div className="relative shrink-0 size-[24px]" data-name="Huge-icon/smart house/solid/sensor">
        <Sensor />
      </div>
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">添加设备</p>
    </div>
  );
}

function Component7({ onAddDevice }: { onAddDevice?: () => void }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[531px] left-[calc(50%-0.5px)] overflow-clip top-[calc(50%-10px)] w-[375px]" data-name="容器 56772">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[531px] left-1/2 top-1/2 w-[375px]" data-name="容器 56772" />
      <div className="-translate-x-1/2 absolute left-1/2 size-[375px] top-0" data-name="蒙版组 12">
        <div className="absolute bottom-[57px] h-[48px] left-[50px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-50px_-270px] mask-size-[375px_375px] w-[274px]" style={{ maskImage: `url('${img212}')` }} data-name="路径 212">
          <div className="absolute inset-[-20.03%_-3.65%_-20.41%_-3.46%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293.472 67.4116">
              <g filter="url(#filter0_f_4_251)" id="è·¯å¾ 212">
                <path d={svgPaths.p378f2b00} fill="var(--fill-0, black)" fillOpacity="0.5" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="67.4116" id="filter0_f_4_251" width="293.472" x="-1.19209e-07" y="1.19209e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4_251" stdDeviation="4.99684" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[65px] h-[48px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-78px_-262px] mask-size-[375px_375px] right-[23px] w-[274px]" style={{ maskImage: `url('${img212}')` }} data-name="路径 213">
          <div className="absolute inset-[-63.75%_-11.31%_-64.13%_-11.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335.445 109.385">
              <g filter="url(#filter0_f_4_247)" id="è·¯å¾ 213">
                <path d={svgPaths.pa96dc00} fill="var(--fill-0, black)" fillOpacity="0.2" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="109.385" id="filter0_f_4_247" width="335.445" x="-1.19209e-07" y="1.19209e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_4_247" stdDeviation="15.4902" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute h-[327px] left-[8px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-8px_-24px] mask-size-[375px_375px] top-1/2 w-[344px]" style={{ maskImage: `url('${img212}')` }} data-name="爱小宝产品图">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img} />
        </div>
      </div>
      <Frame5 />
      <Frame6 onAddDevice={onAddDevice} />
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
    <div className="h-[44px] overflow-clip relative shrink-0 w-[375px]" data-name="Bars/Status Bars/iPhone/Light">
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[4px]" data-name="圆形 159">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #171A1D)" fillOpacity="0.24" id="åå½¢ 159" r="2" />
        </svg>
      </div>
      <p className="font-['PingFang_SC:Regular',sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-[rgba(23,26,29,0.24)] text-center whitespace-nowrap">未连接</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[51px]">
      <p className="font-['PingFang_SC:Semibold',sans-serif] leading-[23.8px] not-italic relative shrink-0 text-[#3d3d3d] text-[17px] text-center w-full">爱小宝</p>
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[103px]">
      <div className="relative shrink-0 size-[44px]" data-name="圆形 160">
        <div className="absolute inset-[-1.14%]">
          <img alt="" className="block max-w-none size-full" height="45" src={img160} width="45" />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="加号">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="å å·">
          <path d={svgPaths.p205a1200} fill="var(--fill-0, #333333)" id="èé" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 w-full" data-name="容器 57013">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[13px] relative size-full">
          <Frame3 />
          <Component />
        </div>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col h-[70px] items-start overflow-clip relative shrink-0 w-[375px]" data-name="容器 57014">
      <Component9 />
      <div className="h-0 relative shrink-0 w-[375px]" data-name="直线 36">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 0.5">
            <path d="M0 0.25H375" id="ç´çº¿ 36" stroke="var(--stroke-0, #7E868E)" strokeOpacity="0.08" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[114px] items-start left-0 top-0 w-[375px]">
      <BarsStatusBarsIPhoneLight />
      <Component10 />
    </div>
  );
}

function Component5() {
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

function Component4() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%-44.88px)] top-[8px] w-[89.75px]" data-name="06 金刚区按钮">
    <p className="-translate-x-1/2 absolute bottom-[14px] font-['PingFang_SC:Regular',sans-serif] leading-[14px] left-1/2 not-italic text-[#666] text-[10px] text-center translate-y-full whitespace-nowrap">连电视</p>
    <Frame />
    </div>
  );
}

function Component2() {
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

function Frame7() {
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

function Component3() {
  return (
    <div className="-translate-x-1/2 absolute h-[42px] left-[calc(50%+134.63px)] top-[8px] w-[89.75px]" data-name="06 金刚区按钮">
      <p className="-translate-x-1/2 absolute bottom-[14px] font-['PingFang_SC:Regular',sans-serif] leading-[14px] left-1/2 not-italic text-[#666] text-[10px] text-center translate-y-full whitespace-nowrap">我的</p>
      <Frame7 />
    </div>
  );
}

function Component6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-1/2 overflow-clip top-1/2 w-[375px]" data-name="容器 14141">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[58px] left-1/2 top-1/2 w-[375px]" data-name="容器 14141" />
      <Component5 />
      <Component4 />
      <Component2 />
      <Component3 />
    </div>
  );
}

function Component1() {
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
      <Component6 />
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

function Component8() {
  return (
    <div className="absolute bg-[#f9f9f9] bottom-0 h-[92px] left-0 overflow-clip w-[375px]" data-name="容器 56843">
      <div className="absolute bottom-0 h-[92px] left-0 w-[375px]" data-name="容器 56843" />
      <Component1 />
      <HomeIndicator />
    </div>
  );
}

export default function Ai({ onAddDevice }: { onAddDevice?: () => void }) {
  return (
    <div className="bg-white relative size-full" data-name="AI助手">
      <Component7 onAddDevice={onAddDevice} />
      <Frame4 />
      <Component8 />
    </div>
  );
}