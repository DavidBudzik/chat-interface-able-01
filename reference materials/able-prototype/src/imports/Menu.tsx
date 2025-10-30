import svgPaths from "./svg-ui9dg4dmgo";

function IconPlatformQuery() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Query">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Query">
          <path d={svgPaths.p2f1b1b00} fill="var(--fill-0, #4F4F4F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="bg-[#e8e8e8] relative shrink-0 w-full" data-name="menu-item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <IconPlatformQuery />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap whitespace-pre">Research</p>
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
          <path d={svgPaths.p8ce0100} id="Vector" stroke="var(--stroke-0, #4F4F4F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="menu-item">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <IconPlatformFolder />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap whitespace-pre">Folder</p>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="bg-white relative shadow-[0px_0px_12px_0px_rgba(46,46,46,0.12)] size-full" data-name="menu">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[4px] relative size-full">
          <MenuItem />
          <MenuItem1 />
        </div>
      </div>
    </div>
  );
}