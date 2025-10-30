import { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-xwz5der2ix";
import ResearchMenu from "./ResearchMenu";

function IconPlatformHome({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Icon / Platform / Home"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Platform / Home">
          <path d={svgPaths.p27c2600} fill="var(--fill-0, #5C5E76)" id="Union" />
        </g>
      </svg>
    </button>
  );
}

function IconBasicChevronDown({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity"
      data-name="Icon / Basic / Chevron down"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / Basic / Chevron down">
          <path clipRule="evenodd" d={svgPaths.p2ed70480} fill="var(--fill-0, #5C5E76)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </button>
  );
}

function Frame1({ 
  onHomeClick, 
  onChevronClick,
  chevronRef 
}: { 
  onHomeClick: () => void;
  onChevronClick: () => void;
  chevronRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center pl-0 pr-[8px] py-0 relative w-full">
          <IconPlatformHome onClick={onHomeClick} />
          <p className="font-['Inter',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-black text-nowrap whitespace-pre" dir="auto">
            /
          </p>
          <p className="font-['Inter',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-neutral-900 text-nowrap whitespace-pre" dir="auto">
            New Research
          </p>
          <div ref={chevronRef as any}>
            <IconBasicChevronDown onClick={onChevronClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3({ 
  onHomeClick, 
  onChevronClick,
  chevronRef 
}: { 
  onHomeClick: () => void;
  onChevronClick: () => void;
  chevronRef: React.RefObject<HTMLButtonElement>;
}) {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame1 
        onHomeClick={onHomeClick}
        onChevronClick={onChevronClick}
        chevronRef={chevronRef}
      />
    </div>
  );
}

function IconBasicAdd() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Add">
          <path d={svgPaths.p1f8d7b00} fill="var(--fill-0, #4F4F4F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButtonSecondary() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative shrink-0" data-name="icon-button_secondary">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconBasicAdd />
    </div>
  );
}

function ActionBar({ 
  onHomeClick, 
  onChevronClick,
  chevronRef,
  menuOpen,
  menuRef,
  menuPosition
}: { 
  onHomeClick: () => void;
  onChevronClick: () => void;
  chevronRef: React.RefObject<HTMLButtonElement>;
  menuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  menuPosition: { top: number; left: number } | null;
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="action-bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-[22px] relative w-full">
          <Frame3 
            onHomeClick={onHomeClick}
            onChevronClick={onChevronClick}
            chevronRef={chevronRef}
          />
          <IconButtonSecondary />
        </div>
      </div>
      
      {/* Research Menu Dropdown */}
      {menuOpen && menuPosition && (
        <div
          ref={menuRef}
          className="fixed w-[200px] h-[80px] z-50"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`
          }}
        >
          <ResearchMenu />
        </div>
      )}
    </div>
  );
}

function TextContainer() {
  return (
    <div className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-[2px] self-stretch shrink-0" data-name="Text Container">
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
    <div className="box-border content-stretch flex gap-[10px] items-start justify-end py-[4px] relative self-stretch shrink-0 px-[0px] pt-[5px] pr-[0px] pb-[4px] pl-[0px]" data-name="Avatar Container">
      <Avatar2 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative rounded-[2px] shrink-0 w-full" data-name="Container">
      <TextContainer />
      <AvatarContainer />
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

function Frame2() {
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
      <Frame2 />
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

function TextContainer1({ value, onChange }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="text-container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[10px] items-start p-[16px] relative size-full">
          <textarea
            value={value}
            onChange={onChange}
            placeholder="Start a new research..."
            className="font-['Inter',_sans-serif] font-normal leading-[20px] not-italic text-[14px] text-[#171717] w-full bg-transparent border-none outline-none resize-none placeholder:text-[#a0a0a0]"
          />
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

function IconButtonPrimaryDefault({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 transition-colors ${
        disabled 
          ? 'bg-[#ffd3c2] cursor-not-allowed' 
          : 'bg-[#e03500] cursor-pointer hover:bg-[#c22d00]'
      }`}
      data-name="icon-button_primary--default"
    >
      <IconPlatformSend />
    </button>
  );
}

function ButtonContainer({ onClick, disabled }: { onClick: () => void; disabled: boolean }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Button Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[584px] items-center justify-end p-[12px] relative w-full">
          <IconButtonPrimaryDefault onClick={onClick} disabled={disabled} />
        </div>
      </div>
    </div>
  );
}

function ChatInputFieldDefault({ value, onChange, onSend, disabled }: { value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void; disabled: boolean }) {
  return (
    <div className="bg-[#f8f8f8] h-[132px] relative shrink-0 w-full" data-name="chat_input-field--default">
      <div className="content-stretch flex flex-col h-[132px] items-start justify-between overflow-clip relative rounded-[inherit] w-full">
        <TextContainer1 value={value} onChange={onChange} />
        <ButtonContainer onClick={onSend} disabled={disabled} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChatBoxContainer({ inputValue, onInputChange, onSend, disabled }: { inputValue: string; onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; onSend: () => void; disabled: boolean }) {
  return (
    <div className="relative size-full" data-name="chat-box_container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[520px] py-[24px] relative size-full">
          <ContentContainer />
          <ChatInputFieldDefault 
            value={inputValue} 
            onChange={onInputChange} 
            onSend={onSend}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

function ChatBox({ 
  inputValue, 
  onInputChange, 
  onSend, 
  disabled,
  onHomeClick,
  onChevronClick,
  chevronRef,
  menuOpen,
  menuRef,
  menuPosition
}: { 
  inputValue: string; 
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; 
  onSend: () => void; 
  disabled: boolean;
  onHomeClick: () => void;
  onChevronClick: () => void;
  chevronRef: React.RefObject<HTMLButtonElement>;
  menuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  menuPosition: { top: number; left: number } | null;
}) {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full h-full" data-name="chat-box">
      <ActionBar 
        onHomeClick={onHomeClick}
        onChevronClick={onChevronClick}
        chevronRef={chevronRef}
        menuOpen={menuOpen}
        menuRef={menuRef}
        menuPosition={menuPosition}
      />
      <ChatBoxContainer 
        inputValue={inputValue} 
        onInputChange={onInputChange} 
        onSend={onSend}
        disabled={disabled}
      />
    </div>
  );
}

export default function ChatBoxContainer1() {
  const [inputValue, setInputValue] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ top: number; left: number } | null>(null);
  const chevronRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle send message logic here
      console.log('Sending message:', inputValue);
      // Clear input after sending
      setInputValue('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleHomeClick = () => {
    // Redirect to home page
    window.location.href = '/';
  };

  const handleChevronClick = () => {
    if (!menuOpen && chevronRef.current) {
      const rect = chevronRef.current.getBoundingClientRect();
      setMenuPosition({
        top: rect.bottom + 4, // 4px gap below the button
        left: rect.left
      });
    }
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        chevronRef.current &&
        !chevronRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [menuOpen]);

  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="chat-box_container">
      <ChatBox 
        inputValue={inputValue}
        onInputChange={handleInputChange}
        onSend={handleSend}
        disabled={!inputValue.trim()}
        onHomeClick={handleHomeClick}
        onChevronClick={handleChevronClick}
        chevronRef={chevronRef}
        menuOpen={menuOpen}
        menuRef={menuRef}
        menuPosition={menuPosition}
      />
    </div>
  );
}