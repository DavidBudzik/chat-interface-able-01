import svgPaths from "./svg-3tf8z7gbeh";

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
    <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="Logo">
      <Logo1 />
    </div>
  );
}

function LogoBlock() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo Block">
      <Logo2 />
      <p className="font-['Helvetica_Neue_LT_Pro:43_Light_Extended',_sans-serif] h-[24px] leading-[32px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.5px] w-[35px]">Able</p>
    </div>
  );
}

function IconPlatformSidebar() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / sidebar">
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
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <rect fill="#E03500" height="24" width="24" />
          <path d={svgPaths.p19136ff0} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Create new</p>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel />
    </div>
  );
}

function MenuItem() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent />
        </div>
      </div>
    </div>
  );
}

function IconPlatformWorkflow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Workflow">
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
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center pl-[28px] pr-[35px] py-[8px] relative w-full">
          <IconPlatformWorkflow />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
            All workflows
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <ButtonSecondary />
        </div>
      </div>
    </div>
  );
}

function IconPlatformPredictiveReports() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Predictive reports">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Predictive reports">
          <g id="Vector 79002 (Stroke)">
            <path d={svgPaths.p15365580} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ef23e00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformPredictiveReports />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Predictive Reports</p>
      </div>
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel1 />
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent1 />
        </div>
      </div>
    </div>
  );
}

function IconBasicSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Search">
          <path clipRule="evenodd" d={svgPaths.p1d564f80} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconBasicSearch />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Search researches....</p>
      </div>
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
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
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[2px] relative shrink-0 size-[24px]" data-name="icon-button_tretiary">
      <IconBasicFilter />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent2 />
          <IconButtonTretiary />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <MenuItem />
      <Frame1 />
      <MenuItem1 />
      <MenuItem2 />
    </div>
  );
}

function IconBasicChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Chevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Chevron down">
          <path clipRule="evenodd" d={svgPaths.p2ed70480} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title">
      <div aria-hidden="true" className="absolute border-[#2e2e2e] border-[1px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">{`Folders `}</p>
          <IconBasicChevronDown />
        </div>
      </div>
    </div>
  );
}

function IconBasicClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Close">
          <path d={svgPaths.p32a65c80} fill="var(--fill-0, #BDBDBD)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Getting Started</p>
      </div>
      <IconBasicClose />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[12px] w-full">
        <p className="leading-[20px]">Learn how to create your first workflow and automate your tasks with Able.</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame 2018776595">
          <circle cx="20" cy="20" fill="var(--fill-0, #232323)" id="Ellipse 1" r="20" />
          <path d={svgPaths.p2dcd4c00} fill="var(--fill-0, #EDEDED)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function VideoPlayer() {
  return (
    <div className="basis-0 bg-[#474747] content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="video-player">
      <Frame6 />
    </div>
  );
}

function VideoPlayerGhost() {
  return (
    <div className="aspect-[224/262] bg-[#232323] relative shrink-0 w-full" data-name="video-player-ghost">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="aspect-[224/262] box-border content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
          <Frame5 />
          <VideoPlayer />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4f4f4f] border-solid inset-0 pointer-events-none shadow-[0px_10px_24px_0px_rgba(35,35,35,0.15)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[20px] grow items-center justify-end min-h-px min-w-px pb-0 pt-[138px] px-0 relative shrink-0 w-full">
      <VideoPlayerGhost />
    </div>
  );
}

function Folders() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-[248px]" data-name="folders">
      <Title />
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Folders />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[inherit] size-full">
        <NavigationHeader />
        <Frame2 />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border-[#2e2e2e] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#4ab8f7] box-border content-stretch flex gap-[7.5px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">RD</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Avatar">
      <Avatar />
    </div>
  );
}

function NameEmail() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name + Email">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-[88px]">
        <p className="leading-[24px]">Robbi Darwis</p>
      </div>
    </div>
  );
}

function AvatarLabel() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Avatar + Label">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[4px] pr-[8px] py-[4px] relative w-full">
          <Avatar1 />
          <NameEmail />
        </div>
      </div>
    </div>
  );
}

function IconBasicNotifications() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Notifications ">
          <path clipRule="evenodd" d={svgPaths.p24662100} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonTretiary1() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-center justify-center p-[8px] relative shrink-0" data-name="icon-button_tretiary">
      <IconBasicNotifications />
    </div>
  );
}

function Account() {
  return (
    <div className="bg-[#181818] h-[40px] relative shrink-0 w-full" data-name="Account">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-between pl-[8px] pr-0 py-[8px] relative w-full">
          <AvatarLabel />
          <IconButtonTretiary1 />
        </div>
      </div>
    </div>
  );
}

export default function State() {
  return (
    <div className="bg-[#181818] relative size-full" data-name="State">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start pb-[16px] pt-[20px] px-[16px] relative size-full">
          <Container />
          <Account />
        </div>
      </div>
    </div>
  );
}