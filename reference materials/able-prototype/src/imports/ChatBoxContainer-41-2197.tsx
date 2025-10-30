import svgPaths from "./svg-2q1wp56mz2";

function TextContainer() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-full min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="Text Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[8px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-neutral-900" dir="auto">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.
          </p>
        </div>
      </div>
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

function Avatar2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0" data-name="Avatar">
      <Avatar1 />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-full items-start justify-end pb-[4px] pt-[8px] px-0 relative shrink-0" data-name="Avatar Container">
      <Avatar2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TextContainer />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <AvatarContainer />
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Icon Container">
      <div className="flex flex-row items-center size-full">
        <div className="h-[28px] w-full" />
      </div>
    </div>
  );
}

function UserMessages() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="user messages">
      <Container />
      <IconContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-neutral-900 w-full" dir="auto">
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-end min-h-px min-w-px relative shrink-0 w-full" data-name="Description container">
      <UserMessages />
      <Frame />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[32px] grow items-start justify-end min-h-px min-w-px pb-[32px] pt-0 px-0 relative shrink-0 w-full" data-name="Content container">
      <DescriptionContainer />
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

function TextContainer1() {
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
    <div className="bg-[#f8f8f8] h-[132px] relative shrink-0 w-full" data-name="chat_input-field--default">
      <div className="content-stretch flex flex-col h-[132px] items-start justify-between overflow-clip relative rounded-[inherit] w-full">
        <TextContainer1 />
        <ButtonContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function ChatBoxContainer() {
  return (
    <div className="relative size-full" data-name="chat-box_container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[300px] py-[24px] relative size-full">
          <ContentContainer />
          <ChatInputFieldDefault />
        </div>
      </div>
    </div>
  );
}