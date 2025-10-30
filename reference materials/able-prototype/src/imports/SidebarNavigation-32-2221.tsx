import svgPaths from "./svg-wkyn3px10n";

function Logo() {
  return (
    <div className="[grid-area:1_/_1] h-[27.807px] ml-0 mt-0 relative w-[34px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 28">
        <g id="Logo">
          <path d={svgPaths.p91e3c00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2dc6c80} fill="var(--fill-0, white)" id="Vector_2" />
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
          <path d={svgPaths.p18a45500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p36eb0900} fill="var(--fill-0, white)" id="Vector_2" />
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
      <div className="font-['Helvetica_Neue_LT_Pro:43_Light_Extended',_sans-serif] h-6 leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] tracking-[-0.5px] w-[35px]">
        <p className="leading-[32px]">Able</p>
      </div>
    </div>
  );
}

function IconPlatformSidebar() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon / Platform / sidebar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / sidebar">
          <path d={svgPaths.p31545000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function NavigationHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Navigation Header">
      <LogoBlock />
      <IconPlatformSidebar />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <rect fill="#E03500" height="20" width="20" />
          <path d={svgPaths.p1f8d7b00} fill="var(--fill-0, white)" id="Union" />
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

function MenuItem() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-full relative shrink-0 w-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Icon">
          <path d={svgPaths.pd5b4500} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <div className="flex flex-row items-center self-stretch">
        <Icon1 />
      </div>
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Predictive Reports</p>
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

function MenuItem1() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent1 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformWorkflow() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Platform / Workflow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Workflow">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3ae9e800} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8db1e00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e196b00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b108b80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3cf7b100} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="relative shrink-0 w-full" data-name="button_secondary">
      <div aria-hidden="true" className="absolute border border-[#c22d00] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-center pl-7 pr-[35px] py-1 relative w-full">
          <IconPlatformWorkflow />
          <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
            <p className="leading-[24px] whitespace-pre" dir="auto">
              All workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2018776587() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center pl-4 pr-3 py-2 relative w-full">
          <ButtonSecondary />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p311eb000} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel2() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon2 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Search researches....</p>
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

function IconBasicFilter() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Icon / Basic / Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Filter">
          <path clipRule="evenodd" d={svgPaths.p297c4580} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonTretiary() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-center p-[2px] relative shrink-0 size-6" data-name="icon-button_tretiary">
      <IconBasicFilter />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent2 />
          <IconButtonTretiary />
        </div>
      </div>
    </div>
  );
}

function Frame2018776571() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <MenuItem />
      <MenuItem1 />
      <Frame2018776587 />
      <MenuItem2 />
    </div>
  );
}

function IconBasicChevronUp() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Basic / Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Chevron up">
          <path clipRule="evenodd" d={svgPaths.p2670c200} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="h-11 relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-11 items-center justify-start px-4 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px]">
            <p className="leading-[24px]">{`Folders `}</p>
          </div>
          <IconBasicChevronUp />
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
          <path d={svgPaths.pdb2e780} id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel3() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon3 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">AI Tools for Enterprise Use</p>
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

function MenuItem3() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdb2e780} id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel4() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon4 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">B2B Payments Infrastructure Players</p>
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

function MenuItem4() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pdb2e780} id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel5() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon5 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Startup Exits – Acquisitions 2024–2025</p>
      </div>
    </div>
  );
}

function LeftContent5() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel5 />
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent5 />
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
          <path d={svgPaths.pdb2e780} id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel6() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon6 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Remote Work Software Landscape</p>
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

function MenuItem6() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent6 />
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
          <path d={svgPaths.pdb2e780} id="Vector" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel7() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon7 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">{`Micro-SaaS Builders & Tools`}</p>
      </div>
    </div>
  );
}

function LeftContent7() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel7 />
    </div>
  );
}

function MenuItem7() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent7 />
        </div>
      </div>
    </div>
  );
}

function ListFolders() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start overflow-clip relative shrink-0 w-[248px]" data-name="list_folders">
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
      <MenuItem6 />
      <MenuItem7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Union">
            <path d={svgPaths.p2c708df0} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p3b8523f2} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p3e16e300} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel8() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon8 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">See more</p>
      </div>
    </div>
  );
}

function LeftContent8() {
  return (
    <div className="basis-0 content-stretch flex gap-1 grow h-6 items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel8 />
    </div>
  );
}

function MenuItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent8 />
        </div>
      </div>
    </div>
  );
}

function Folders() {
  return (
    <div className="content-stretch flex flex-col h-[290px] items-start justify-start relative shrink-0 w-[248px]" data-name="folders">
      <div aria-hidden="true" className="absolute border-[#474747] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
      <ListFolders />
      <MenuItem8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1abb1a00} fill="var(--fill-0, #FCFCFC)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Title1() {
  return (
    <div className="h-11 relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-11 items-center justify-start px-4 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px]">
            <p className="leading-[24px]">Researches</p>
          </div>
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p18790180} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel9() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon10 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Label</p>
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

function Icon11() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Union">
            <path d={svgPaths.p22453d00} fill="var(--fill-0, #BDBDBD)" />
            <path clipRule="evenodd" d={svgPaths.p298f0100} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel10() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon11 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Label</p>
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
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-4 pr-3 py-2 relative w-full">
          <LeftContent10 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-5" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_31_3350">
              <path clipRule="evenodd" d={svgPaths.p3e435400} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29fb6c80} fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2d92e380} fillRule="evenodd" />
              <path d={svgPaths.p1dd02d00} />
              <path d={svgPaths.p27c69080} />
              <path d={svgPaths.p1a402680} />
              <path d={svgPaths.p22cfb40} />
            </mask>
            <path clipRule="evenodd" d={svgPaths.p3e435400} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p29fb6c80} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2d92e380} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" />
            <path d={svgPaths.p1dd02d00} fill="var(--fill-0, #BDBDBD)" />
            <path d={svgPaths.p27c69080} fill="var(--fill-0, #BDBDBD)" />
            <path d={svgPaths.p1a402680} fill="var(--fill-0, #BDBDBD)" />
            <path d={svgPaths.p22cfb40} fill="var(--fill-0, #BDBDBD)" />
            <path d={svgPaths.p3d8a4900} fill="var(--stroke-0, #BDBDBD)" mask="url(#path-1-inside-1_31_3350)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel11() {
  return (
    <div className="basis-0 content-stretch flex gap-2 grow items-center justify-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon12 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] leading-[24px] overflow-inherit">Label</p>
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

function ListResearches() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 w-[248px]" data-name="list_researches">
      <MenuItem9 />
      <MenuItem10 />
      <MenuItem11 />
      <MenuItem11 />
      <MenuItem9 />
      <MenuItem11 />
      <MenuItem9 />
      <MenuItem9 />
      <MenuItem11 />
      <MenuItem9 />
      <MenuItem10 />
      <MenuItem10 />
      <MenuItem11 />
      <MenuItem11 />
      <MenuItem11 />
      <MenuItem11 />
    </div>
  );
}

function Researches() {
  return (
    <div className="content-stretch flex flex-col h-[290px] items-start justify-start relative shrink-0 w-[248px]" data-name="researches">
      <div aria-hidden="true" className="absolute border-[#474747] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Title1 />
      <ListResearches />
    </div>
  );
}

function Frame2018776586() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px relative shrink-0">
      <Folders />
      <Researches />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-3 items-start justify-start overflow-clip relative size-full">
        <NavigationHeader />
        <Frame2018776571 />
        <Frame2018776586 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2e2e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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

function Avatar1() {
  return (
    <div className="content-stretch flex gap-4 items-center justify-center relative rounded shrink-0 size-6" data-name="Avatar">
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
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Avatar + Label">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start pl-1 pr-2 py-1 relative w-full">
          <Avatar1 />
          <NameEmail />
        </div>
      </div>
    </div>
  );
}

function NotificationsIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="Notifications icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Notifications icon">
          <path clipRule="evenodd" d={svgPaths.p24662100} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Account() {
  return (
    <div className="bg-[#181818] h-10 relative shrink-0 w-full" data-name="Account">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex h-10 items-center justify-between p-[8px] relative w-full">
          <AvatarLabel />
          <NotificationsIcon />
        </div>
      </div>
    </div>
  );
}

export default function SidebarNavigation() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="Sidebar Navigation">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-5 px-4 relative size-full">
          <Container />
          <Account />
        </div>
      </div>
    </div>
  );
}