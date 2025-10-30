import svgPaths from "./svg-l7cpmxcqhy";

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

function IconBasicAdd() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Basic / Add">
          <path d={svgPaths.p2e9368f0} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonTretiary() {
  return (
    <div className="bg-[#e03500] box-border content-stretch flex gap-[4px] items-center justify-center p-[2px] relative rounded-[2px] shrink-0" data-name="icon-button_tretiary">
      <IconBasicAdd />
    </div>
  );
}

function IconPlatformWorkflow() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Workflow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Workflow">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p31df6370} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b720e80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p17b0c870} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p18bb0280} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1f53b30} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButtonSecondary() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[2px] relative shrink-0" data-name="icon-button_secondary">
      <div aria-hidden="true" className="absolute border border-[#e03500] border-solid inset-0 pointer-events-none" />
      <IconPlatformWorkflow />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center pb-0 pt-[6px] px-0 relative shrink-0 w-full">
      <IconPlatformSidebar />
      <IconButtonTretiary />
      <IconButtonSecondary />
    </div>
  );
}

function NotificationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Notification Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Notification Icon">
          <path clipRule="evenodd" d={svgPaths.p24662100} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#4ab8f7] box-border content-stretch flex gap-[7.5px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[20px] whitespace-pre">BD</p>
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-name="Container">
      <NotificationIcon />
      <Avatar1 />
    </div>
  );
}

function State() {
  return (
    <div className="bg-[#181818] box-border content-stretch flex flex-col h-[820px] items-center justify-between pb-[24px] pt-[20px] px-[8px] relative shrink-0" data-name="State">
      <Frame1 />
      <Container />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0.94%_7.95%_2.19%_8.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Group 1261156609">
          <path d={svgPaths.p3e9da2c0} fill="var(--fill-0, #5C5E76)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Share() {
  return (
    <div className="absolute inset-[16.667%] overflow-clip" data-name="share-2">
      <Group2 />
    </div>
  );
}

function IconBasicShare() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / Basic / Share">
      <Share />
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconBasicShare />
    </div>
  );
}

function IconBasicMenu() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Basic / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Menu">
          <g id="Union">
            <path d={svgPaths.p21f75100} fill="var(--fill-0, #5C5E76)" />
            <path d={svgPaths.p1c29c00} fill="var(--fill-0, #5C5E76)" />
            <path d={svgPaths.p2540dc80} fill="var(--fill-0, #5C5E76)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconBasicMenu />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="opacity-0 relative shrink-0 w-full" data-name="action-bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[24px] relative w-full">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-[523px]" dir="auto">
            Adidas
          </p>
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 46">
      <g id="Group 8869">
        <path d={svgPaths.p1fabb800} fill="var(--fill-0, black)" id="Vector" />
        <path d={svgPaths.p29249400} fill="var(--fill-0, black)" id="Vector_2" />
      </g>
    </svg>
  );
}

function Group() {
  return (
    <div className="absolute inset-[79.88%_0.13%_0.26%_84.94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
        <g id="Group">
          <path d={svgPaths.p2bc703f0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p17acf300} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Symbol() {
  return (
    <div className="absolute bottom-0 left-[63.79%] right-0 top-0" data-name="symbol">
      <Group1 />
      <Group />
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
          <path d={svgPaths.p1daf6a80} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[45.889px] relative shrink-0 w-[154.968px]" data-name="logo">
      <Symbol />
      <Label />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="logo_container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[80px] items-center justify-center p-[12px] relative w-full">
          <Logo />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[2px] pr-0 py-0 relative shrink-0" data-name="text">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap whitespace-pre" dir="auto">
        Start a new research...
      </p>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="text-container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[16px] relative size-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function IconPlatformSend() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Send">
          <path d={svgPaths.p7b3800} fill="var(--fill-0, #FCFCFC)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonPrimaryDefault() {
  return (
    <div className="bg-[#ffd3c2] box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0" data-name="icon-button_primary--default">
      <IconPlatformSend />
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[584px] items-center justify-end p-[12px] relative w-full">
          <IconButtonPrimaryDefault />
        </div>
      </div>
    </div>
  );
}

function ChatInputFieldDefault() {
  return (
    <div className="bg-[#f8f8f8] h-[144px] relative shrink-0 w-[740px]" data-name="chat_input-field--default">
      <div className="content-stretch flex flex-col h-[144px] items-start justify-between overflow-clip relative rounded-[inherit] w-[740px]">
        <TextContainer />
        <ButtonContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IconPlatformList() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / List">
          <path d={svgPaths.p385e9d00} fill="var(--fill-0, #4F4F4F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0" data-name="button_secondary">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <IconPlatformList />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-neutral-900 text-nowrap whitespace-pre" dir="auto">
            Find companies
          </p>
        </div>
      </div>
    </div>
  );
}

function IconPlatformDeepDive() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Deep dive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Deep dive">
          <g id="Group 1261156612">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3d2eac80} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
              <path d={svgPaths.p23588580} fill="var(--fill-0, #4F4F4F)" />
            </g>
          </g>
          <circle cx="12" cy="12" id="Ellipse 4503" r="2" stroke="var(--stroke-0, #4F4F4F)" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="button_secondary">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <IconPlatformDeepDive />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0b1c38] text-[14px] text-nowrap whitespace-pre" dir="auto">
            Single company
          </p>
        </div>
      </div>
    </div>
  );
}

function IconColumnDollar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Column / Dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Column / Dollar">
          <path clipRule="evenodd" d={svgPaths.p39742f80} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="button_secondary">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <IconColumnDollar />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0b1c38] text-[14px] text-nowrap whitespace-pre" dir="auto">
            Find deals
          </p>
        </div>
      </div>
    </div>
  );
}

function IconPlatformWorkflow1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / Platform / Workflow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Workflow">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3ae9e800} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8db1e00} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e196b00} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2b108b80} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3cf7b100} fill="var(--fill-0, #4F4F4F)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonSecondary3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="button_secondary">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
          <IconPlatformWorkflow1 />
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#0b1c38] text-[14px] text-nowrap whitespace-pre" dir="auto">
            Explore workflows
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[740px]">
      <ButtonSecondary />
      <ButtonSecondary1 />
      <ButtonSecondary2 />
      <ButtonSecondary3 />
    </div>
  );
}

function ChatBoxContainer() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[24px] grow items-center min-h-px min-w-px overflow-clip pb-0 pt-[180px] px-0 relative shrink-0 w-full" data-name="chat-box_container">
      <LogoContainer />
      <ChatInputFieldDefault />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[820px] items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Frame">
      <ActionBar />
      <ChatBoxContainer />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-white box-border content-stretch flex items-center relative shadow-[0px_0px_12px_0px_rgba(46,46,46,0.12)] size-full" data-name="container">
      <State />
      <Frame />
    </div>
  );
}