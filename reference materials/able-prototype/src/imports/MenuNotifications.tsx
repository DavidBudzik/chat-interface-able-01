import svgPaths from "./svg-evtv8r7scu";

function ButtonTretiary() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative shrink-0" data-name="button_tretiary">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-neutral-900 text-nowrap whitespace-pre" dir="auto">
        Mark all as Read
      </p>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="menu-item">
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[12px] items-end pb-[12px] pl-[24px] pr-[12px] pt-[20px] relative w-full">
          <p className="basis-0 font-['Helvetica_Neue_LT_Pro:43_Light_Extended',_sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-900 tracking-[-0.5px] font-bold">Notifications</p>
          <ButtonTretiary />
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
            <path clipRule="evenodd" d={svgPaths.p1daeaf40} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1c9ac600} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p11312400} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p13472c00} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1336d900} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap">
        <p className="leading-[24px] overflow-ellipsis overflow-hidden whitespace-pre">14 days ago</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-neutral-900 text-nowrap">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">New Workflow completed</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap w-full">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Heating companies in Iceland</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function IconLabel() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Icon + Label">
      <IconPlatformWorkflow />
      <Frame4 />
    </div>
  );
}

function ListItemNotification() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="list_item--notification">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <IconLabel />
        </div>
      </div>
    </div>
  );
}

function ListFoldersDropdown() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[628px] items-start min-h-px min-w-px overflow-x-clip overflow-y-auto relative shrink-0 [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-[4px]" data-name="list-folders_dropdown">
      {[...Array(23).keys()].map((_, i) => (
        <ListItemNotification key={i} />
      ))}
    </div>
  );
}

function Frame() {
  return <div className="bg-[#f0f0f0] h-[142px] shrink-0 w-[8px]" />;
}

function Scroll() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[593px] items-start overflow-clip px-[8px] py-[12px] relative shrink-0" data-name="scroll">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-start justify-between pb-0 pl-[8px] pr-[2px] pt-[8px] relative size-full">
          <ListFoldersDropdown />
          <Scroll />
        </div>
      </div>
    </div>
  );
}

export default function MenuNotifications() {
  return (
    <div className="bg-white relative size-full" data-name="menu_notifications">
      <div className="content-stretch flex flex-col items-start relative size-full">
        <MenuItem />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[0px_10px_24px_0px_rgba(35,35,35,0.15)]" />
    </div>
  );
}