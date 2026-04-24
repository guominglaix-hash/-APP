export default function Frame() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex items-center px-[16px] py-[12px] relative rounded-bl-[2px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] size-full">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(210,218,242,0.5)] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[2.5px] rounded-br-[12.5px] rounded-tl-[12.5px] rounded-tr-[12.5px]" />
      <p className="flex-[1_0_0] font-['PingFang_SC:Regular',sans-serif] leading-[22.4px] min-w-px not-italic relative text-[#333] text-[16px] text-justify">好的，为您找到以下歌曲好的，为您找到以下歌曲好的，为您找到以下歌曲</p>
    </div>
  );
}