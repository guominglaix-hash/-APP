import svgPaths from "./svg-kiq1fd0g9n";

function Component() {
  return (
    <div className="-translate-y-1/2 absolute left-0 size-[36px] top-1/2" data-name="容器">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g clipPath="url(#clip0_21_2241)" id="å®¹å¨">
          <rect fill="var(--fill-0, white)" fillOpacity="0.5" height="36" id="å®¹å¨_2" rx="18" stroke="var(--stroke-0, white)" width="36" />
          <path clipRule="evenodd" d={svgPaths.pdfa0500} fill="url(#paint0_linear_21_2241)" fillRule="evenodd" id="èé 46" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_21_2241" x1="-3.84985" x2="20.0448" y1="18" y2="39.754">
            <stop stopColor="#4FB6FF" />
            <stop offset="0.35" stopColor="#9278FF" />
            <stop offset="0.721429" stopColor="#F6746B" />
            <stop offset="1" stopColor="#FFA83D" />
          </linearGradient>
          <clipPath id="clip0_21_2241">
            <rect fill="white" height="36" width="36" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-y-1/2 absolute h-[36px] left-[8px] overflow-clip top-1/2 w-[160px]" data-name="容器 12815">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[36px] left-1/2 top-1/2 w-[160px]" data-name="容器 12815" />
      <Component />
      <p className="absolute font-['PingFang_SC:Regular',sans-serif] leading-[19.6px] left-[calc(50%-33px)] not-italic text-[#999] text-[14px] top-[8px] whitespace-nowrap">有问题尽管问我～</p>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="relative size-full" data-name="容器 11807">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f4f4f4] h-[53px] left-1/2 rounded-[157px] top-1/2 w-[351px]" data-name="容器 11807" />
      <Component2 />
      <div className="absolute inset-[27.36%_4.56%_27.36%_88.6%]" data-name="语音切换">
        <div className="absolute inset-[4.17%]" data-name="路径">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p347f8d00} fill="var(--fill-0, #333333)" id="è·¯å¾" />
          </svg>
        </div>
      </div>
    </div>
  );
}