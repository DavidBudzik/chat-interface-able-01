import svgPaths from "./svg-vweut8yspc";

function IconBasicClose() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Close">
          <path d={svgPaths.p32a65c80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonSecondary({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-black box-border content-stretch flex gap-[12px] items-center justify-center p-[8px] relative shrink-0 cursor-pointer hover:bg-[#2e2e2e] transition-colors" 
      data-name="icon-button_secondary"
    >
      <div aria-hidden="true" className="absolute border border-[#2e2e2e] border-solid inset-0 pointer-events-none" />
      <IconBasicClose />
    </button>
  );
}

function Title({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="basis-0 font-['Helvetica_Neue_LT_Pro:43_Light_Extended',_sans-serif] grow leading-[40px] min-h-px min-w-px not-italic relative shrink-0 text-[40px] text-white tracking-[-1px]">Welcome to Able</p>
      <IconButtonSecondary onClick={onClose} />
    </div>
  );
}

function Subtitle() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Subtitle">
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px]">
        <p className="leading-[24px]">Section subtitle</p>
      </div>
    </div>
  );
}

function SectionTitle({ onClose }: { onClose?: () => void }) {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[20px] relative shrink-0 w-full" data-name="& SectionTitle">
      <Title onClose={onClose} />
      <Subtitle />
    </div>
  );
}

function YoutubeUi() {
  return (
    <div className="absolute h-[32px] left-0 right-0 top-0" data-name="YoutubeUI">
      <div className="absolute flex h-[96px] items-center justify-center left-0 right-0 top-0">
        <div className="flex-none h-[96px] rotate-[180deg] w-[860px]">
          <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] size-full to-[rgba(0,0,0,0.25)]" data-name="top" />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Helvetica:Regular',_sans-serif] h-[27px] justify-center leading-[0] left-[16px] not-italic text-[18px] text-white top-[27.5px] translate-y-[-50%] w-[392px]">
        <p className="leading-[125%]">Learn how to get started...</p>
      </div>
      <div className="absolute right-[16px] size-[20px] top-[14px]" data-name="ico-info">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <g id="ico-info">
              <path clipRule="evenodd" d={svgPaths.p30bcdd00} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" />
              <path d={svgPaths.pa004f00} stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TopAligned0PxWrapper() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="🔼 Top-aligned (0px wrapper)">
      <YoutubeUi />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout() {
  return <div className="h-[2e_-5px] w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function VerticalShift50Height() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Vertical shift — 50% height">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.2812245190143585)+(var(--transform-inner-height)*0.9596421122550964)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[343.667deg] w-full">
          <AspectRatioKeeperRotatedAutoLayout />
        </div>
      </div>
    </div>
  );
}

function Surface() {
  return (
    <div className="h-[48px] relative shrink-0 w-[68px]" data-name="Surface">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 48">
        <g clipPath="url(#clip0_51_2497)" id="Surface">
          <path d={svgPaths.p31194e00} fill="var(--fill-0, black)" fillOpacity="0.25" id="path" />
          <path d={svgPaths.p186ab400} fill="var(--fill-0, #EAEAEA)" id="path_2" />
        </g>
        <defs>
          <clipPath id="clip0_51_2497">
            <rect fill="white" height="48" width="68" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function YoutubeUi1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[396px] right-[396px] top-[calc(50%-0.494px)] translate-y-[-50%]" data-name="YoutubeUI">
      <Surface />
    </div>
  );
}

function CenterAligned0PxWrapper() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="⏹ Center-aligned (0px wrapper)">
      <YoutubeUi1 />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Wrapper">
      <VerticalShift50Height />
      <CenterAligned0PxWrapper />
    </div>
  );
}

function CenterAligned0PxWrapper1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Center-aligned (0px wrapper)">
      <Wrapper />
    </div>
  );
}

function AspectRatioKeeperRotatedAutoLayout1() {
  return <div className="h-[2e_-5px] w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" />;
}

function AspectRatio() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Aspect ratio">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.5625163912773132)+(var(--transform-inner-height)*0.8267862200737)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[325.77deg] w-full">
          <AspectRatioKeeperRotatedAutoLayout1 />
        </div>
      </div>
    </div>
  );
}

function IcoHd() {
  return (
    <div className="absolute bottom-[6.45%] contents right-[42px] top-[41.94%]" data-name="ico-hd">
      <div className="absolute bottom-[6.45%] right-[47.38px] top-[41.94%] w-[14.616px]" data-name="ico-gear">
        <div className="absolute inset-[-6.25%_-6.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
            <g id="ico-gear">
              <mask fill="black" height="18" id="path-1-outside-1_51_2491" maskUnits="userSpaceOnUse" width="17" x="8.57023e-05" y="0">
                <rect fill="white" height="18" width="17" x="8.57023e-05" />
                <path clipRule="evenodd" d={svgPaths.p28185340} fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d={svgPaths.p28185340} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" />
              <path d={svgPaths.p339e4b00} fill="var(--stroke-0, black)" fillOpacity="0.1" mask="url(#path-1-outside-1_51_2491)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#ee1a26] bottom-[29.03%] right-[42px] rounded-[1px] top-[41.94%] w-[13px]" data-name="background" />
      <div className="absolute bottom-[35.48%] right-[44px] top-[48.39%] w-[9px]" data-name="HD">
        <div className="absolute bottom-[-20%] left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
            <g filter="url(#filter0_d_51_2485)" id="HD">
              <path d={svgPaths.p157100f1} fill="var(--fill-0, #F1F2F1)" />
              <path d="M5 0H8V1H6V4H8V5H5V0Z" fill="var(--fill-0, #F1F2F1)" />
              <path d="M8 4V1H9V4H8Z" fill="var(--fill-0, #F1F2F1)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="6" id="filter0_d_51_2485" width="9" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.337255 0 0 0 0 0.0392157 0 0 0 0 0.0588235 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_51_2485" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_51_2485" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className="absolute bottom-[90.32%] contents left-0 right-0 top-0" data-name="timeline">
      <div className="absolute bg-[rgba(234,234,234,0.2)] bottom-[90.32%] left-[7.69px] right-0 top-0" data-name="full" />
      <div className="absolute bg-[rgba(234,234,234,0.5)] bottom-[90.32%] left-0 right-[218px] top-0" data-name="loaded" />
      <div className="absolute bg-[#fc0d1c] bottom-[90.32%] left-0 right-[292.75px] top-0" data-name="played" />
    </div>
  );
}

function BottomControls() {
  return (
    <div className="absolute bottom-[8px] h-[31px] left-[4.31px] overflow-clip right-[12px]" data-name="bottom controls">
      <div className="absolute bottom-[6.45%] right-[10px] top-[41.94%] w-[16px]" data-name="ico-fullscreen">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="ico-fullscreen">
              <path d="M17 1H11V3H15V7H17V1Z" fill="var(--fill-0, #EAEAEA)" />
              <path d="M17 11H15V15H11V17H17V11Z" fill="var(--fill-0, #EAEAEA)" />
              <path d="M3 7V3H7V1H1V7H3Z" fill="var(--fill-0, #EAEAEA)" />
              <path d="M1 11V17H7V15H3V11H1Z" fill="var(--fill-0, #EAEAEA)" />
              <path d={svgPaths.p581fb00} stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
          </svg>
        </div>
      </div>
      <IcoHd />
      <div className="absolute bottom-0 flex flex-col font-['Helvetica:Regular',_sans-serif] justify-center leading-[0] left-[117.69px] not-italic text-[#eaeaea] text-[13px] text-nowrap top-[38.71%] tracking-[0.13px]">
        <p className="leading-[125%] whitespace-pre">5:07 / 15:28</p>
      </div>
      <div className="absolute bottom-[6.45%] left-[84.69px] top-[41.94%] w-[13.25px]" data-name="ico-sound">
        <div className="absolute inset-[-15.09%_-7.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
            <g id="ico-sound">
              <mask fill="black" height="22" id="path-1-outside-1_51_2479" maskUnits="userSpaceOnUse" width="16" x="0" y="-0.585786">
                <rect fill="white" height="22" width="16" y="-0.585786" />
                <path clipRule="evenodd" d={svgPaths.p377b0000} fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d={svgPaths.p377b0000} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" />
              <path d={svgPaths.p20841ab0} fill="var(--stroke-0, black)" fillOpacity="0.1" mask="url(#path-1-outside-1_51_2479)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.9%] left-[52.69px] top-[48.39%] w-[12px]" data-name="ico-next">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <g id="ico-next">
              <mask fill="black" height="16" id="path-1-outside-1_51_2487" maskUnits="userSpaceOnUse" width="14" x="0" y="0">
                <rect fill="white" height="16" width="14" />
                <path clipRule="evenodd" d={svgPaths.p1bd85e00} fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d={svgPaths.p1bd85e00} fill="#EAEAEA" fillRule="evenodd" />
              <path d={svgPaths.p1e99fcf2} fill="var(--stroke-0, black)" fillOpacity="0.1" mask="url(#path-1-outside-1_51_2487)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[6.45%] left-[17.69px] top-[41.94%] w-[13px]" data-name="ico-play">
        <div className="absolute inset-[-11.18%_-14.68%_-11.18%_-7.69%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <g id="ico-play">
              <path d={svgPaths.p11979140} fill="var(--fill-0, #EAEAEA)" />
              <path d={svgPaths.p3bf1e1f0} stroke="var(--stroke-0, black)" strokeOpacity="0.1" />
            </g>
          </svg>
        </div>
      </div>
      <Timeline />
    </div>
  );
}

function Surface1() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-full" data-name="Surface">
      <div className="absolute bottom-0 flex h-[96px] items-center justify-center left-0 mix-blend-multiply right-0">
        <div className="flex-none h-[96px] rotate-[180deg] scale-y-[-100%] w-[860px]">
          <div className="bg-gradient-to-b from-[rgba(0,0,0,0)] size-full to-[rgba(0,0,0,0.5)]" data-name="bottom" />
        </div>
      </div>
      <BottomControls />
    </div>
  );
}

function YoutubeUi2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-0 right-0" data-name="YoutubeUI">
      <Surface1 />
    </div>
  );
}

function BottomAligned0PxWrapper() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="🔽 Bottom-aligned (0px wrapper)">
      <YoutubeUi2 />
    </div>
  );
}

function Video() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="& Video">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
        <source src="/_videos/v1/62c1dec6afa2f77637aaafa014b47301fddb4683" />
      </video>
      <TopAligned0PxWrapper />
      <CenterAligned0PxWrapper1 />
      <AspectRatio />
      <BottomAligned0PxWrapper />
    </div>
  );
}

function YoutubePlayer() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="YoutubePlayer">
      <Video />
    </div>
  );
}

function Video1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Video">
      <YoutubePlayer />
    </div>
  );
}

function ButtonTretiary({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative shrink-0 cursor-pointer hover:bg-[#2e2e2e] transition-colors" 
      data-name="button_tretiary"
    >
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
        Skip tutorial
      </p>
    </button>
  );
}

function ButtonPrimaryDefault() {
  return (
    <div className="bg-[#e03500] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative shrink-0" data-name="button_primary--default">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre" dir="auto">
        Get started
      </p>
    </div>
  );
}

function FooterContainer({ onClose }: { onClose?: () => void }) {
  return (
    <div className="box-border content-stretch flex items-center justify-between px-0 py-[24px] relative shrink-0 w-full" data-name="footer-container">
      <ButtonTretiary onClick={onClose} />
      <ButtonPrimaryDefault />
    </div>
  );
}

function VideoContainer({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="VideoContainer">
      <Video1 />
      <FooterContainer onClose={onClose} />
    </div>
  );
}

function Surface2({ onClose }: { onClose?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Surface">
      <SectionTitle onClose={onClose} />
      <VideoContainer onClose={onClose} />
    </div>
  );
}

export default function MediaPlayers({ onClose }: { onClose?: () => void } = {}) {
  return (
    <div className="bg-[#232323] relative size-full" data-name="media players">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center px-[24px] py-0 relative size-full">
          <Surface2 onClose={onClose} />
        </div>
      </div>
    </div>
  );
}