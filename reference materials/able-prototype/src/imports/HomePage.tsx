import svgPaths from "./svg-l8mtvd0g8d";

function Logo() {
  return (
    <div className="[grid-area:1_/_1] h-[27.807px] ml-0 mt-0 relative w-[34px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 28">
        <g id="Logo">
          <path d={svgPaths.p91e3c00} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.p2dc6c80} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="[grid-area:1_/_1] h-[5.522px] ml-[84.939%] mt-[79.882%] relative w-[5.078px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g id="Group">
          <path d={svgPaths.p18a45500} fill="var(--fill-0, #FCFCFC)" id="Vector" />
          <path d={svgPaths.p36eb0900} fill="var(--fill-0, #FCFCFC)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <Logo />
      <Group />
    </div>
  );
}

function Logo2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded shrink-0 size-10" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function LogoBlock() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Logo Block">
      <Logo2 />
      <div className="font-['Helvetica_Neue_LT_Pro:43_Light_Extended',_sans-serif] h-6 leading-[0] not-italic relative shrink-0 text-[#fcfcfc] text-[16px] tracking-[-0.5px] w-[35px]">
        <p className="leading-[32px]">Able</p>
      </div>
    </div>
  );
}

function IconBasicExpandLeft() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Basic / Expand-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Expand-left">
          <path d={svgPaths.pbc98d00} fill="var(--fill-0, #4F4F4F)" id="Union (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonPrimaryDefault() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center p-[2px] relative shrink-0" data-name="icon-button_primary--default">
      <IconBasicExpandLeft />
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation Header">
      <LogoBlock />
      <IconButtonPrimaryDefault />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1f8d7b00} fill="var(--fill-0, #FCFCFC)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Create new</p>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel />
    </div>
  );
}

function RightContent() {
  return <div className="content-stretch flex gap-0.5 items-center justify-start shrink-0" data-name="Right Content" />;
}

function MenuItem() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p311eb000} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon1 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Search researches....</p>
      </div>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel1 />
    </div>
  );
}

function IconBasicFilter() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Icon / Basic / Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Filter">
          <path clipRule="evenodd" d={svgPaths.p297c4580} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonPrimaryDefault1() {
  return (
    <div className="bg-[#474747] box-border content-stretch flex gap-1 items-center justify-center p-[2px] relative shrink-0 size-6" data-name="icon-button_primary--default">
      <IconBasicFilter />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#606060] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent1 />
          <IconButtonPrimaryDefault1 />
        </div>
      </div>
    </div>
  );
}

function Frame2018776571() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <MenuItem />
      <MenuItem1 />
    </div>
  );
}

function IconBasicChevronUp() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Basic / Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Chevron up">
          <path clipRule="evenodd" d={svgPaths.p2670c200} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="h-11 relative shrink-0 w-full" data-name="Title">
      <div className="relative size-full">
        <div className="box-border content-stretch flex h-11 items-start justify-start px-4 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px]">
            <p className="leading-[24px]">Folders</p>
          </div>
          <IconBasicChevronUp />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_8499)" id="Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p2288a500} fill="var(--fill-0, #FCFCFC)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_32_8499">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconLabel2() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon2 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Emerging Players in European Last-Mile Logistics</p>
      </div>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel2 />
    </div>
  );
}

function RightContent1() {
  return <div className="content-stretch flex gap-0.5 items-center justify-start shrink-0" data-name="Right Content" />;
}

function MenuItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent2 />
          <RightContent1 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3e435400} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29fb6c80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d92e380} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p1dd02d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p27c69080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a402680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p22cfb40} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel3() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Research name</p>
      </div>
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel3 />
    </div>
  );
}

function RightContent2() {
  return <div className="content-stretch flex gap-0.5 items-center justify-start shrink-0" data-name="Right Content" />;
}

function MenuItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-8 pr-3 py-2 relative w-full">
          <Icon3 />
          <LeftContent3 />
          <RightContent2 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_32_8499)" id="Icon">
          <g id="Vector"></g>
          <path d={svgPaths.p2288a500} fill="var(--fill-0, #FCFCFC)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_32_8499">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconLabel4() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon4 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Research name</p>
      </div>
    </div>
  );
}

function LeftContent4() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel4 />
    </div>
  );
}

function RightContent3() {
  return <div className="content-stretch flex gap-0.5 items-center justify-start shrink-0" data-name="Right Content" />;
}

function MenuItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent4 />
          <RightContent3 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformFolder() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon / Platform / Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Folder">
          <path clipRule="evenodd" d={svgPaths.p28b2e400} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel6() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformFolder />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Folder name</p>
      </div>
    </div>
  );
}

function LeftContent6() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel6 />
    </div>
  );
}

function RightContent5() {
  return <div className="content-stretch flex gap-0.5 items-center justify-start shrink-0" data-name="Right Content" />;
}

function MenuItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent6 />
          <RightContent5 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Navigation">
      <Title />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem3 />
      {[...Array(3).keys()].map((_, i) => (
        <MenuItem6 key={i} />
      ))}
    </div>
  );
}

function IconBasicChevronUp1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Basic / Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Chevron up">
          <path clipRule="evenodd" d={svgPaths.p2670c200} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Title1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-start px-4 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px]">
            <p className="leading-[24px]">Researches</p>
          </div>
          <IconBasicChevronUp1 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3e435400} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29fb6c80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d92e380} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path d={svgPaths.p1dd02d00} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p27c69080} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p1a402680} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p22cfb40} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel9() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon6 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Emerging Players in European Last-Mile Logistics</p>
      </div>
    </div>
  );
}

function LeftContent9() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel9 />
    </div>
  );
}

function MenuItem9() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent9 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3e435400} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29fb6c80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d92e380} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path d={svgPaths.p1dd02d00} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p27c69080} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p1a402680} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p22cfb40} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel10() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon7 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Research name</p>
      </div>
    </div>
  );
}

function LeftContent10() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel10 />
    </div>
  );
}

function MenuItem10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent10 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3e435400} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29fb6c80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d92e380} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path d={svgPaths.p1dd02d00} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p27c69080} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p1a402680} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p22cfb40} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel11() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon8 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Research name</p>
      </div>
    </div>
  );
}

function LeftContent11() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel11 />
    </div>
  );
}

function MenuItem11() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent11 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3e435400} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29fb6c80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d92e380} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path d={svgPaths.p1dd02d00} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p27c69080} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p1a402680} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p22cfb40} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel12() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon9 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Research name</p>
      </div>
    </div>
  );
}

function LeftContent12() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel12 />
    </div>
  );
}

function RightContent8() {
  return <div className="content-stretch flex gap-0.5 items-center justify-start shrink-0" data-name="Right Content" />;
}

function MenuItem12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent12 />
          <RightContent8 />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Navigation">
      <Title1 />
      <MenuItem9 />
      <MenuItem10 />
      <MenuItem11 />
      <MenuItem12 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <NavigationHeader />
      <Frame2018776571 />
      <Navigation />
      <Navigation1 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#4ab8f7] box-border content-stretch flex gap-[7.5px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[9999px] shrink-0 size-6" data-name="Avatar">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">BD</p>
      </div>
    </div>
  );
}

function UserBadgeInitials() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-center relative shrink-0 size-6" data-name="user_badge-initials">
      <Avatar />
    </div>
  );
}

function NameEmail() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Name + Email">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] w-[88px]">
        <p className="leading-[24px]">Robbi Darwis</p>
      </div>
    </div>
  );
}

function AvatarLabel() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-start p-[4px] relative shrink-0" data-name="Avatar + Label">
      <UserBadgeInitials />
      <NameEmail />
    </div>
  );
}

function NotificationsIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Notifications icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Notifications icon">
          <path clipRule="evenodd" d={svgPaths.p24662100} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Account() {
  return (
    <div className="relative shrink-0 w-full" data-name="Account">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <AvatarLabel />
          <NotificationsIcon />
        </div>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="bg-[#181818] box-border content-stretch flex flex-col gap-6 h-[820px] items-start justify-start px-4 py-6 relative shrink-0 w-[280px]" data-name="Sidebar Navigation">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Container />
      <Account />
    </div>
  );
}

function Group8869() {
  return (
    <div className="absolute inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 46">
        <g id="Group 8869">
          <path d={svgPaths.p31291600} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p29249400} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[79.88%_0.13%_0.26%_84.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
        <g id="Group">
          <path d={svgPaths.p2bc703f0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p11c8d80} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Symbol() {
  return (
    <div className="absolute bottom-0 left-[63.79%] right-0 top-0" data-name="symbol">
      <Group8869 />
      <Group1 />
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bottom-[0.18%] left-0 right-[37.95%] top-[33.12%]" data-name="label">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 31">
        <g id="label">
          <path d={svgPaths.p10c65b00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p14816900} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pa091b00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pa924f00} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[45.889px] relative shrink-0 w-[154.968px]" data-name="Logo">
      <Symbol />
      <Label />
    </div>
  );
}

function IconPlatformWorkflow() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Workflow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Workflow">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3ae9e800} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8db1e00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e196b00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b108b80} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3cf7b100} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault() {
  return (
    <div className="absolute bg-[#232323] bottom-3 box-border content-stretch flex gap-2 items-center justify-center left-3 px-2 py-1" data-name="button_primary--default">
      <IconPlatformWorkflow />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre" dir="auto">
          Workflows
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center pl-0.5 pr-0 py-0 relative shrink-0" data-name="text">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre" dir="auto">
          Describe what you’re looking to explore or start with a workflow...
        </p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="absolute box-border content-stretch flex gap-2.5 items-center justify-start left-0 p-[12px] top-0 w-[582px]" data-name="text-container">
      <Text />
    </div>
  );
}

function IconPlatformSend() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Send">
          <path d={svgPaths.p18a09f50} fill="var(--fill-0, #FCFCFC)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonPrimaryDefault2() {
  return (
    <div className="absolute bg-[#ffd3c2] bottom-3 box-border content-stretch flex gap-2 items-center justify-center p-[4px] right-3 rounded-[9999px]" data-name="icon-button_primary--default">
      <IconPlatformSend />
    </div>
  );
}

function ChatInputFieldDefault() {
  return (
    <div className="bg-[#f8f8f8] h-[132px] overflow-clip relative shrink-0 w-[740px]" data-name="chat_input-field--default">
      <ButtonPrimaryDefault />
      <TextContainer />
      <IconButtonPrimaryDefault2 />
    </div>
  );
}

function IconPlatformOrganization() {
  return (
    <div className="absolute left-10 size-6 top-[190px]" data-name="Icon / Platform / Organization">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_32_8439)" id="Icon / Platform / Organization">
          <rect fill="var(--fill-0, #0B1C38)" height="16" id="Icon" rx="2" width="11" x="4" y="97" />
          <rect fill="var(--fill-0, #0B1C38)" height="8" id="Icon_2" rx="2" width="6" x="14" y="105" />
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3dab1880} fill="var(--fill-0, #0B1C38)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1cf38a00} fill="var(--fill-0, #0B1C38)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pdd01100} fill="var(--fill-0, #0B1C38)" fillRule="evenodd" />
            <path d={svgPaths.pfa51680} fill="var(--fill-0, #0B1C38)" />
            <path d={svgPaths.p2db08e00} fill="var(--fill-0, #0B1C38)" />
            <path d={svgPaths.p17640b00} fill="var(--fill-0, #0B1C38)" />
            <path d={svgPaths.p37e8c040} fill="var(--fill-0, #0B1C38)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.pfa51680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2db08e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p17640b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p37e8c040} fill="var(--fill-0, white)" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p1d189680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_32_8439">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute contents left-10 top-[190px]" data-name="Icon container">
      <IconPlatformOrganization />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-center justify-start overflow-clip relative shrink-0 w-full" data-name="Header">
      <Logo3 />
      <ChatInputFieldDefault />
      <IconContainer />
    </div>
  );
}

function Frame1087366() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#181818] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Filter by</p>
      </div>
    </div>
  );
}

function ButtonPrimaryDefault1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-1 items-center justify-center px-1 py-0.5 relative shrink-0" data-name="button_primary--default">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[12px] text-neutral-900 text-nowrap">
        <p className="leading-[16px] whitespace-pre" dir="auto">
          Reset
        </p>
      </div>
    </div>
  );
}

function MenuListItem() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="Menu list item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-start px-2 py-3 relative w-full">
          <Frame1087366 />
          <ButtonPrimaryDefault1 />
        </div>
      </div>
    </div>
  );
}

function Frame1087367() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#5a5a5a] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Creator</p>
      </div>
    </div>
  );
}

function MenuListItem1() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="Menu list item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-start px-2 py-3 relative w-full">
          <Frame1087367 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformCollaborate() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Collaborate">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Collaborate">
          <path d={svgPaths.p1e33cd80} fill="var(--fill-0, #4F4F4F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem13() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconPlatformCollaborate />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Any creator</p>
      </div>
    </div>
  );
}

function IconPlatformProfile() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Profile">
          <path d={svgPaths.p1c020700} fill="var(--fill-0, #4F4F4F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem14() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconPlatformProfile />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Created by me</p>
      </div>
    </div>
  );
}

function Group1261156609() {
  return (
    <div className="absolute inset-[0.94%_7.95%_2.19%_8.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Group 1261156609">
          <path d={svgPaths.p3e9da2c0} fill="var(--fill-0, #4F4F4F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Share2() {
  return (
    <div className="absolute inset-[16.667%] overflow-clip" data-name="share-2">
      <Group1261156609 />
    </div>
  );
}

function IconBasicShare() {
  return (
    <div className="overflow-clip relative shrink-0 size-6" data-name="Icon / Basic / Share">
      <Share2 />
    </div>
  );
}

function MenuItem15() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconBasicShare />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Shared with me</p>
      </div>
    </div>
  );
}

function Frame2018776573() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <MenuListItem1 />
      <MenuItem13 />
      <MenuItem14 />
      <MenuItem15 />
    </div>
  );
}

function Frame1087368() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#5a5a5a] text-[14px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Research type</p>
      </div>
    </div>
  );
}

function MenuListItem2() {
  return (
    <div className="h-8 relative shrink-0 w-full" data-name="Menu list item">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2 h-8 items-center justify-start px-2 py-3 relative w-full">
          <Frame1087368 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformAllTypes() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / All types">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / All types">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p3bd26100} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1461b980} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3f772a80} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItem16() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconPlatformAllTypes />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">All types</p>
      </div>
    </div>
  );
}

function IconPlatformExplore() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Explore">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Explore">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1a71df00} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2a889040} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b55080} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path d={svgPaths.p113bf680} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p3807ea80} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p3aa80200} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p257c9ef2} fill="var(--fill-0, #4F4F4F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItem17() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconPlatformExplore />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Company list</p>
      </div>
    </div>
  );
}

function IconPlatformDeepDive() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Deep dive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Deep dive">
          <g id="Union">
            <path d={svgPaths.p35ceedc0} fill="var(--fill-0, #4F4F4F)" />
            <path clipRule="evenodd" d={svgPaths.p1954a000} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuItem18() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconPlatformDeepDive />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Deep dive</p>
      </div>
    </div>
  );
}

function IconPlatformTypelessResearch() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Typeless research">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Typeless research">
          <path clipRule="evenodd" d={svgPaths.pa753280} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem19() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-start p-[8px] relative shrink-0 w-[312px]" data-name="menu-item">
      <IconPlatformTypelessResearch />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Chat</p>
      </div>
    </div>
  );
}

function Frame2018776572() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <MenuListItem2 />
      <MenuItem16 />
      <MenuItem17 />
      <MenuItem18 />
      <MenuItem19 />
    </div>
  );
}

function Frame2018776568() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <MenuListItem />
      <Frame2018776573 />
      <Frame2018776572 />
    </div>
  );
}

function Frame2018776569() {
  return <div className="bg-[#e0e0e0] h-[146px] shrink-0 w-2" />;
}

function ScrollBar() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-start justify-center overflow-clip p-[8px] relative self-stretch shrink-0" data-name="scroll_bar">
      <Frame2018776569 />
    </div>
  );
}

function MenuFilters() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex items-start justify-start left-[-9px] pl-2 pr-0 py-2 shadow-[0px_0px_12px_0px_rgba(35,35,35,0.12)] top-[116px] w-80" data-name="menu/filters">
      <Frame2018776568 />
      <ScrollBar />
    </div>
  );
}

function IconPlatformExplore1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Explore">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Explore">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1a71df00} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2a889040} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b55080} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path d={svgPaths.p113bf680} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p3807ea80} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p3aa80200} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p257c9ef2} fill="var(--fill-0, #4F4F4F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault2() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-4 py-2 relative shrink-0" data-name="button_primary--default">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconPlatformExplore1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre" dir="auto">
          Explore
        </p>
      </div>
    </div>
  );
}

function IconPlatformDeepDive1() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Deep dive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Deep dive">
          <g id="Union">
            <path d={svgPaths.p35ceedc0} fill="var(--fill-0, #4F4F4F)" />
            <path clipRule="evenodd" d={svgPaths.p1954a000} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault3() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-4 py-2 relative shrink-0" data-name="button_primary--default">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconPlatformDeepDive1 />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0b1c38] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre" dir="auto">
          Deep dive
        </p>
      </div>
    </div>
  );
}

function IconColumnDollar() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Column / Dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Column / Dollar">
          <path clipRule="evenodd" d={svgPaths.p39742f80} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault4() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-4 py-2 relative shrink-0" data-name="button_primary--default">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconColumnDollar />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0b1c38] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre" dir="auto">
          Deals
        </p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-start relative shrink-0" data-name="Button group">
      <ButtonPrimaryDefault2 />
      <ButtonPrimaryDefault3 />
      <ButtonPrimaryDefault4 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-7 grow h-[820px] items-center justify-center min-h-px min-w-px pb-5 pt-0 px-0 relative shrink-0" data-name="Main content">
      <Header />
      <MenuFilters />
      <ButtonGroup />
    </div>
  );
}

function MacOsCursorDefault() {
  return (
    <div className="absolute h-[18px] left-[246px] top-[136px] w-3" data-name="macOS cursor/- Default">
      <div className="absolute inset-[-5.56%_-11.49%_-17.03%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 23">
          <g id="macOS cursor/- Default">
            <rect fill="white" fillOpacity="0.01" height="18" transform="translate(2 1)" width="12" />
            <g filter="url(#filter0_d_32_8412)" id="Arrow Outline">
              <path clipRule="evenodd" d={svgPaths.p2f51f200} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p232e6b00} fill="var(--fill-0, black)" fillRule="evenodd" id="Arrow" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.066" id="filter0_d_32_8412" width="15.379" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_32_8412" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_32_8412" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Sidebar">
      <SidebarNavigation />
      <MainContent />
      <MacOsCursorDefault />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#ffffff] content-stretch flex flex-col gap-2.5 items-start justify-start relative size-full" data-name="Home page">
      <Sidebar />
    </div>
  );
}