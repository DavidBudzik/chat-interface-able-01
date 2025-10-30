import svgPaths from "./svg-yy26tyi821";

function IconBasicChevronUp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Chevron up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Chevron up">
          <path clipRule="evenodd" d={svgPaths.p3e9b7500} fill="var(--fill-0, #BDBDBD)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-white">{`Folders `}</p>
          <IconBasicChevronUp />
        </div>
      </div>
    </div>
  );
}

function IconPlatformAddNewFolder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Add new folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Add new folder">
          <path d={svgPaths.p25e5aa00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformAddNewFolder />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Add new folder</p>
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

function IconPlatformFolder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Folder">
          <path d={svgPaths.p8ce0100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformFolder />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">AI Tools for Enterprise Use</p>
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

function IconPlatformFolder1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Folder">
          <path d={svgPaths.p8ce0100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformFolder1 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">B2B Payments Infrastructure Players</p>
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

function MenuItem2() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent2 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformFolder2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Folder">
          <path d={svgPaths.p8ce0100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformFolder2 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Startup Exits – Acquisitions 2024–2025</p>
      </div>
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel3 />
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent3 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformFolder3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Folder">
          <path d={svgPaths.p8ce0100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformFolder3 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Remote Work Software Landscape</p>
      </div>
    </div>
  );
}

function LeftContent4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel4 />
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent4 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformFolder4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Folder">
          <path d={svgPaths.p8ce0100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconLabel5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformFolder4 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">{`Micro-SaaS Builders & Tools`}</p>
      </div>
    </div>
  );
}

function LeftContent5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel5 />
    </div>
  );
}

function MenuItem5() {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent5 />
        </div>
      </div>
    </div>
  );
}

function ListFolders() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-[248px]" data-name="list_folders">
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem3 />
      <MenuItem4 />
      <MenuItem5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Union">
            <path d={svgPaths.p3c6afc80} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.p350e6a00} fill="var(--fill-0, #FCFCFC)" />
            <path d={svgPaths.pe903100} fill="var(--fill-0, #FCFCFC)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconLabel6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <Icon />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">See more</p>
      </div>
    </div>
  );
}

function LeftContent6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow h-[24px] items-center min-h-px min-w-px relative shrink-0" data-name="Left Content">
      <IconLabel6 />
    </div>
  );
}

function MenuItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <LeftContent6 />
        </div>
      </div>
    </div>
  );
}

export default function Folders() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="folders">
      <div aria-hidden="true" className="absolute border-[#474747] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
      <MenuItem />
      <ListFolders />
      <MenuItem6 />
    </div>
  );
}