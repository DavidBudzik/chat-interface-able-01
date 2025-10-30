import { useState, useRef, useEffect } from 'react';
import svgPathsSidebar from "./imports/svg-km0rb4flvt";
import svgPathsChat from "./imports/svg-l7cpmxcqhy";
import { Play, X } from 'lucide-react';
import ChatBoxContainer from './imports/ChatBoxContainer';
import MenuNotifications from './imports/MenuNotifications';
import Menu from './imports/Menu';
import svgPathsFolders from "./imports/svg-yy26tyi821";
import MediaPlayers from './imports/MediaPlayers';

// ===== LOGO COMPONENTS FOR SIDEBAR =====
function LogoSymbol() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[27.807px] ml-0 mt-0 relative w-[34px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 28">
          <g>
            <path d={svgPathsSidebar.p91e3c00} fill="white" />
            <path d={svgPathsSidebar.p2dc6c80} fill="white" />
          </g>
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[5.522px] ml-[84.939%] mt-[79.882%] relative w-[5.078px] bg-[rgba(255,255,255,0)]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <g>
            <path d={svgPathsSidebar.p18a45500} fill="#E03500" />
            <path d={svgPathsSidebar.p36eb0900} fill="#E03500" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SidebarLogo({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="box-border content-stretch flex items-center justify-center p-[8px] relative rounded shrink-0 size-[40px] bg-[rgba(255,255,255,0)]">
        <LogoSymbol />
      </div>
      {isOpen && (
        <p className="font-['Helvetica_Neue_LT_Pro',_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif] h-[24px] leading-[32px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.5px] w-[35px]">
          Able
        </p>
      )}
    </div>
  );
}

// ===== SIDEBAR ICON COMPONENTS =====
function IconSidebar({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[20px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path d={svgPathsSidebar.p31545000} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </button>
  );
}

function IconAdd() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <rect fill="#E03500" height="24" width="24" />
          <path d={svgPathsSidebar.p19136ff0} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function IconWorkflow() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsSidebar.p3ae9e800} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsSidebar.p8db1e00} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsSidebar.p3e196b00} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsSidebar.p2b108b80} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsSidebar.p3cf7b100} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconPredictiveReports() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsSidebar.p15365580} fill="white" />
          <path d={svgPathsSidebar.p2ef23e00} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function IconSearch() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsSidebar.p1d564f80} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconFilter() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path clipRule="evenodd" d={svgPathsSidebar.p297c4580} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconChevronUp({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`relative shrink-0 size-[24px] transition-transform ${isExpanded ? '' : 'rotate-180'}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsSidebar.p2670c200} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconFolder() {
  return (
    <div className="relative shrink-0 size-[24px] bg-[rgba(0,0,0,0)]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsSidebar.p1dd6a600} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconAddFolder() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsSidebar.p37c4b500} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function IconSeeMore() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsSidebar.p36b36700} fill="white" />
          <path d={svgPathsSidebar.p1a03f500} fill="white" />
          <path d={svgPathsSidebar.p3d42af00} fill="white" />
        </g>
      </svg>
    </div>
  );
}

function IconNotification({ hasUnread }: { hasUnread?: boolean }) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsSidebar.p24662100} fill="white" fillRule="evenodd" />
        </g>
      </svg>
      {hasUnread && (
        <div className="absolute top-0 right-0 size-[8px] bg-[#e03500] rounded-full" />
      )}
    </div>
  );
}

// ===== SIDEBAR HEADER COMPONENT =====
function NavigationHeader({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <SidebarLogo isOpen={isOpen} />
      {isOpen && <IconSidebar onClick={onToggle} />}
    </div>
  );
}

// ===== SIDEBAR MENU ITEM COMPONENTS =====
function CreateNewButton({ 
  isOpen, 
  onClick, 
  buttonRef 
}: { 
  isOpen: boolean; 
  onClick: () => void;
  buttonRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div 
      ref={buttonRef}
      onClick={onClick}
      className="bg-[#e03500] relative shrink-0 w-full cursor-pointer hover:bg-[#c22d00] transition-colors"
    >
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className={`box-border content-stretch flex gap-[8px] items-center ${isOpen ? 'pl-[16px] pr-[12px]' : 'justify-center'} py-[8px] relative w-full`}>
          {isOpen ? (
            <>
              <IconAdd />
              <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
                <p className="leading-[24px] overflow-ellipsis overflow-hidden">Create new</p>
              </div>
            </>
          ) : (
            <IconAdd />
          )}
        </div>
      </div>
    </div>
  );
}

function AllWorkflowsButton({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative shrink-0 w-full cursor-pointer hover:bg-[#232323] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#c22d00] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className={`box-border content-stretch flex gap-[8px] items-center justify-center ${isOpen ? 'pl-[28px] pr-[35px]' : ''} py-[8px] relative w-full`}>
          <IconWorkflow />
          {isOpen && (
            <p className="font-['Inter',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">
              All workflows
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function PredictiveReportsItem({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="bg-[#181818] relative shrink-0 w-full cursor-pointer hover:bg-[#232323] transition-colors">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className={`box-border content-stretch flex gap-[8px] items-center ${isOpen ? 'pl-[16px] pr-[12px]' : 'justify-center'} py-[8px] relative w-full`}>
          {isOpen ? (
            <>
              <IconPredictiveReports />
              <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
                <p className="leading-[24px] overflow-ellipsis overflow-hidden">Predictive Reports</p>
              </div>
            </>
          ) : (
            <IconPredictiveReports />
          )}
        </div>
      </div>
    </div>
  );
}

function SearchInput({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;
  
  return (
    <div className="bg-[#181818] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center pl-[16px] pr-[12px] py-[8px] relative w-full">
          <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
            <IconSearch />
            <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#a0a0a0] text-[14px] text-nowrap">
              <p className="leading-[24px] overflow-ellipsis overflow-hidden">Search researches....</p>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[4px] items-center justify-center p-[2px] relative shrink-0 size-[24px] cursor-pointer hover:opacity-80 transition-opacity">
            <IconFilter />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== FOLDERS SECTION =====
function IconChevronUpFolders({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className={`relative shrink-0 size-[24px] transition-transform ${isExpanded ? '' : 'rotate-180'}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsFolders.p3e9b7500} fill="#BDBDBD" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function FolderItem({ title, isOpen }: { title: string; isOpen: boolean }) {
  return (
    <div className="bg-sidebar relative shrink-0 w-full cursor-pointer hover:bg-sidebar-accent transition-colors">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className={`box-border content-stretch flex gap-[8px] items-center ${isOpen ? 'pl-[16px] pr-[12px]' : 'justify-center'} py-[8px] relative w-full`}>
          {isOpen ? (
            <>
              <IconFolder />
              <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-sidebar-foreground">
                <p className="leading-[24px] overflow-ellipsis overflow-hidden">{title}</p>
              </div>
            </>
          ) : (
            <IconFolder />
          )}
        </div>
      </div>
    </div>
  );
}

function AddNewFolderItem({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="bg-sidebar relative shrink-0 w-full cursor-pointer hover:bg-sidebar-accent transition-colors">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className={`box-border content-stretch flex gap-[8px] items-center ${isOpen ? 'pl-[16px] pr-[12px]' : 'justify-center'} py-[8px] relative w-full`}>
          {isOpen ? (
            <>
              <IconAddFolder />
              <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-sidebar-foreground">
                <p className="leading-[24px] overflow-ellipsis overflow-hidden">Add new folder</p>
              </div>
            </>
          ) : (
            <IconAddFolder />
          )}
        </div>
      </div>
    </div>
  );
}

function IconSeeMoreFolders() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsFolders.p3c6afc80} fill="#FCFCFC" />
          <path d={svgPathsFolders.p350e6a00} fill="#FCFCFC" />
          <path d={svgPathsFolders.pe903100} fill="#FCFCFC" />
        </g>
      </svg>
    </div>
  );
}

function SeeMoreItem({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="bg-sidebar relative shrink-0 w-full cursor-pointer hover:bg-sidebar-accent transition-colors">
      <div className="flex flex-row items-center overflow-clip size-full">
        <div className={`box-border content-stretch flex gap-[8px] items-center ${isOpen ? 'pl-[16px] pr-[12px]' : 'justify-center'} py-[8px] relative w-full`}>
          {isOpen ? (
            <>
              <IconSeeMoreFolders />
              <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-sidebar-foreground">
                <p className="leading-[24px] overflow-ellipsis overflow-hidden">See more</p>
              </div>
            </>
          ) : (
            <IconSeeMoreFolders />
          )}
        </div>
      </div>
    </div>
  );
}

function FoldersSection({ isOpen, isExpanded, onToggle }: { isOpen: boolean; isExpanded: boolean; onToggle: () => void }) {
  const folders = [
    "AI Tools for Enterprise Use",
    "B2B Payments Infrastructure Players",
    "Startup Exits – Acquisitions 2024–2025",
    "Remote Work Software Landscape",
    "Micro-SaaS Builders & Tools"
  ];

  if (!isOpen) {
    return (
      <div className="content-stretch flex flex-col items-center gap-[8px] relative shrink-0 w-full">
        {folders.slice(0, 3).map((folder, index) => (
          <FolderItem key={index} title={folder} isOpen={false} />
        ))}
      </div>
    );
  }

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#474747] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      
      <button
        onClick={onToggle}
        className="h-[44px] relative shrink-0 w-full cursor-pointer hover:bg-sidebar-accent transition-colors"
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[44px] items-center px-[16px] py-[8px] relative w-full">
            <p className="basis-0 font-['Inter',_sans-serif] font-semibold grow min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-sidebar-foreground leading-[24px]">
              Folders
            </p>
            <IconChevronUpFolders isExpanded={isExpanded} />
          </div>
        </div>
      </button>

      {isExpanded && (
        <>
          <AddNewFolderItem isOpen={isOpen} />
          <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-y-auto relative shrink-0 w-full [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white [&::-webkit-scrollbar-thumb]:rounded-[4px]">
            {folders.map((folder, index) => (
              <FolderItem key={index} title={folder} isOpen={isOpen} />
            ))}
          </div>
          <SeeMoreItem isOpen={isOpen} />
        </>
      )}
    </div>
  );
}

// ===== VIDEO WIDGET COMPONENT =====
function GettingStartedWidget({ isOpen, onClose, onVideoClick }: { isOpen: boolean; onClose: () => void; onVideoClick: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="aspect-[224/262] bg-[#232323] relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="aspect-[224/262] box-border content-stretch flex flex-col gap-[20px] items-start p-[16px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <div className="basis-0 flex flex-col font-['Inter',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-nowrap text-white">
              <p className="leading-[24px] overflow-ellipsis overflow-hidden font-semibold">Getting Started</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <X className="size-[20px] text-[#bdbdbd]" />
            </button>
          </div>
          
          <div className="flex flex-col font-['Inter',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a0a0a0] text-[12px] w-full">
            <p className="leading-[20px]">Learn how to create your first workflow and automate your tasks with Able.</p>
          </div>

          <button 
            onClick={onVideoClick}
            className="basis-0 bg-[#474747] content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full cursor-pointer hover:bg-[#5a5a5a] transition-colors group"
          >
            <div className="relative shrink-0 size-[40px] group-hover:scale-110 transition-transform">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                <circle cx="20" cy="20" fill="#232323" r="20" />
                <path d="M16 12L28 20L16 28V12Z" fill="#EDEDED" />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#4f4f4f] border-solid inset-0 pointer-events-none shadow-[0px_10px_24px_0px_rgba(35,35,35,0.15)]" />
    </div>
  );
}

// ===== ACCOUNT SECTION =====
function AccountSection({ isOpen }: { isOpen: boolean }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);
  const notificationButtonRef = useRef<HTMLButtonElement>(null);
  const notificationModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationModalRef.current &&
        !notificationModalRef.current.contains(event.target as Node) &&
        notificationButtonRef.current &&
        !notificationButtonRef.current.contains(event.target as Node)
      ) {
        setNotificationsOpen(false);
      }
    }

    if (notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [notificationsOpen]);

  return (
    <div className="bg-[#181818] h-[40px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        {isOpen ? (
          <div className="box-border content-stretch flex h-[40px] items-center justify-between px-[8px] py-[8px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative">
              <div className="bg-[#4ab8f7] box-border content-stretch flex items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[9999px] shrink-0 size-[24px]">
                <p className="font-['Inter',_sans-serif] font-semibold text-[12px] leading-[20px] text-white">
                  BD
                </p>
              </div>
              <p className="font-['Inter',_sans-serif] font-normal text-[14px] leading-[24px] text-white">
                Robbi Darwis
              </p>
            </div>
            
            <button
              ref={notificationButtonRef}
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="cursor-pointer hover:opacity-80 transition-opacity relative"
            >
              <IconNotification hasUnread={hasUnreadNotifications} />
            </button>
          </div>
        ) : (
          <div className="box-border content-stretch flex flex-col h-[40px] items-center justify-center gap-[8px] py-[8px] relative w-full">
            <button
              ref={notificationButtonRef}
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="cursor-pointer hover:opacity-80 transition-opacity relative"
            >
              <IconNotification hasUnread={hasUnreadNotifications} />
            </button>
            <div className="bg-[#4ab8f7] box-border content-stretch flex items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[9999px] shrink-0 size-[24px]">
              <p className="font-['Inter',_sans-serif] font-semibold text-[12px] leading-[20px] text-white">
                BD
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Notifications Modal */}
      {notificationsOpen && (
        <div
          ref={notificationModalRef}
          className={`fixed bottom-[56px] ${isOpen ? 'left-[288px]' : 'left-[72px]'} w-[400px] h-[680px] z-50`}
        >
          <MenuNotifications />
        </div>
      )}
    </div>
  );
}

// ===== MAIN SIDEBAR COMPONENT =====
function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(true);
  const [foldersExpanded, setFoldersExpanded] = useState(true);
  const [showWidget, setShowWidget] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuModalRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuModalRef.current &&
        !menuModalRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
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
    <div 
      className={`bg-[#181818] relative h-screen flex flex-col transition-all duration-300 ease-in-out ${
        isOpen ? 'w-[280px]' : 'w-[64px]'
      }`}
    >
      <div aria-hidden="true" className="absolute border-[#2e2e2e] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
      
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className={`box-border content-stretch flex flex-col gap-[12px] items-start pb-[16px] pt-[20px] ${isOpen ? 'px-[16px]' : 'px-[8px]'} relative w-full h-full`}>
          <NavigationHeader isOpen={isOpen} onToggle={toggleSidebar} />
          
          {!isOpen && (
            <div className="w-full flex justify-center">
              <IconSidebar onClick={toggleSidebar} />
            </div>
          )}
          
          <div className="content-stretch flex flex-col items-center justify-center gap-[8px] relative shrink-0 w-full">
            <CreateNewButton 
              isOpen={isOpen} 
              onClick={() => setMenuOpen(!menuOpen)}
              buttonRef={menuButtonRef}
            />
            
            {/* Create New Menu Modal */}
            {menuOpen && (
              <div
                ref={menuModalRef}
                className={`fixed ${isOpen ? 'top-[88px] left-[288px]' : 'top-[120px] left-[72px]'} w-[248px] h-[80px] z-50`}
              >
                <Menu />
              </div>
            )}
            
            <PredictiveReportsItem isOpen={isOpen} />
            <div className={`relative shrink-0 w-full ${!isOpen ? 'hidden' : ''}`}>
              <div className="flex flex-col items-center justify-center size-full">
                <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[0px] relative w-full py-[8px]">
                  <AllWorkflowsButton isOpen={isOpen} />
                </div>
              </div>
            </div>
            <SearchInput isOpen={isOpen} />
          </div>
          
          <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0 w-full">
            <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
              <FoldersSection 
                isOpen={isOpen} 
                isExpanded={foldersExpanded} 
                onToggle={() => setFoldersExpanded(!foldersExpanded)} 
              />
              
              {showWidget && isOpen && (
                <div className="basis-0 box-border content-stretch flex flex-col gap-[20px] grow items-center justify-end min-h-px min-w-px pb-0 pt-[138px] px-0 relative shrink-0 w-full">
                  <GettingStartedWidget 
                    isOpen={isOpen} 
                    onClose={() => setShowWidget(false)}
                    onVideoClick={() => setVideoModalOpen(true)} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-[8px] pb-[24px]">
        <AccountSection isOpen={isOpen} />
      </div>
      
      {/* Video Modal Overlay */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100]"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="w-full max-w-[860px] mx-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <MediaPlayers />
          </div>
        </div>
      )}
    </div>
  );
}

// ===== CHAT INTERFACE COMPONENTS =====

// Chat Logo (Able branding for main content)
function AbleLogo() {
  return (
    <div className="h-[45.889px] relative shrink-0 w-[154.968px]">
      {/* Symbol */}
      <div className="absolute bottom-0 left-[63.79%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 46">
          <g>
            <path d={svgPathsChat.p1fabb800} fill="black" />
            <path d={svgPathsChat.p29249400} fill="black" />
          </g>
        </svg>
      </div>
      <div className="absolute bottom-0 left-[63.79%] right-0 top-0">
        <div className="absolute inset-[79.88%_0.13%_0.26%_84.94%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <g>
              <path d={svgPathsChat.p2bc703f0} fill="black" />
              <path d={svgPathsChat.p17acf300} fill="black" />
            </g>
          </svg>
        </div>
      </div>
      
      {/* Label */}
      <div className="absolute bottom-[0.18%] left-0 right-[37.95%] top-[33.12%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 31">
          <g>
            <path d={svgPathsChat.p10c65b00} fill="black" />
            <path d={svgPathsChat.p14816900} fill="black" />
            <path d={svgPathsChat.pa091b00} fill="black" />
            <path d={svgPathsChat.p1daf6a80} fill="black" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Chat Input Field Component
function ChatInputField() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="bg-[#f8f8f8] h-[144px] relative w-[640px]">
      <div className="content-stretch flex flex-col h-[144px] items-start justify-between overflow-clip relative w-[640px]">
        {/* Text input area */}
        <div className="basis-0 grow min-h-px min-w-px relative w-full">
          <div className="size-full">
            <div className="box-border content-stretch flex gap-[10px] items-start p-[16px] relative size-full">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Start a new research..."
                className="font-['Inter',_sans-serif] font-normal leading-[20px] not-italic text-[#a0a0a0] text-[14px] w-full bg-transparent border-none outline-none resize-none placeholder:text-[#a0a0a0]"
              />
            </div>
          </div>
        </div>
        
        {/* Send button container */}
        <div className="relative w-full">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="box-border content-stretch flex gap-[584px] items-center justify-end p-[12px] relative w-full">
              <button
                disabled={!inputValue.trim()}
                className={`box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 transition-colors ${
                  inputValue.trim() ? 'bg-[#e03500] cursor-pointer hover:bg-[#c22d00]' : 'bg-[#ffd3c2] cursor-not-allowed'
                }`}
              >
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPathsChat.p7b3800} fill="#FCFCFC" />
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

// Action Button Components
function IconList() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPathsChat.p385e9d00} fill="#4F4F4F" />
        </g>
      </svg>
    </div>
  );
}

function IconDeepDive() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsChat.p3d2eac80} fill="#4F4F4F" fillRule="evenodd" />
          <path d={svgPathsChat.p23588580} fill="#4F4F4F" />
          <circle cx="12" cy="12" r="2" stroke="#4F4F4F" fill="none" />
        </g>
      </svg>
    </div>
  );
}

function IconDollar() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsChat.p39742f80} fill="#4F4F4F" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function IconWorkflowChat() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path clipRule="evenodd" d={svgPathsChat.p3ae9e800} fill="#4F4F4F" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsChat.p8db1e00} fill="#4F4F4F" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsChat.p3e196b00} fill="#4F4F4F" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsChat.p2b108b80} fill="#4F4F4F" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPathsChat.p3cf7b100} fill="#4F4F4F" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="basis-0 bg-white grow min-h-px min-w-px relative cursor-pointer hover:bg-[#f8f8f8] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
      </div>
    </button>
  );
}

// Icon for copy button
function IconCopy() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d="M8 4v12h10V4H8zm0-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#4F4F4F" />
          <path d="M4 8H2v12c0 1.1.9 2 2 2h12v-2H4V8z" fill="#4F4F4F" />
        </g>
      </svg>
    </div>
  );
}

// Use case templates data
const USE_CASES = {
  companies: [
    "Find Companies In {Domain} Based In {Region} With {Criteria}",
    "List Startups Using {Technology} For {Use_case}",
    "Show Companies Offering {Offering} In {Industry}",
    "Start An Empty List"
  ],
  single: [
    "Tell Me About {Company}",
    "Analyze {Company} Across {Metrics}",
    "Find The Latest News About {Company}"
  ],
  deals: [
    "List Transactions In {Sector} By {Buyer_type} At Size {Value}",
    "Show {Industry} Deals In {Region} In The Last {Years}",
    "List Deals By {Company} In {Market}"
  ]
};

// Helper function to copy text with fallback for restricted environments
function copyTextToClipboard(text: string): boolean {
  // Try modern Clipboard API first
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => {
      // Silently fail and use fallback
      fallbackCopyTextToClipboard(text);
    });
    return true;
  }
  
  // Fallback for browsers/contexts where Clipboard API is not available
  return fallbackCopyTextToClipboard(text);
}

function fallbackCopyTextToClipboard(text: string): boolean {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    textArea.remove();
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    textArea.remove();
    return false;
  }
}

// Use case item component
function UseCaseItem({ text, isLast }: { text: string; isLast: boolean }) {
  const handleCopy = () => {
    copyTextToClipboard(text);
  };

  return (
    <button 
      onClick={handleCopy}
      className="bg-white relative shrink-0 w-full cursor-pointer hover:bg-[#f8f8f8] transition-colors group"
    >
      {!isLast && (
        <div aria-hidden="true" className="absolute border-b border-[#e0e0e0] border-solid bottom-0 left-0 right-0 pointer-events-none" />
      )}
      <div className="flex flex-row items-center justify-between size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-start px-[16px] py-[12px] relative w-full">
          <p className="font-['Inter',_sans-serif] font-normal leading-[24px] not-italic text-[14px] text-[#171717] text-left">
            {text}
          </p>
        </div>
        <div className="px-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
          <IconCopy />
        </div>
      </div>
    </button>
  );
}

// Use cases section component
function UseCasesSection({ selectedButton }: { selectedButton: string | null }) {
  if (!selectedButton) return null;

  const useCases = USE_CASES[selectedButton as keyof typeof USE_CASES] || [];

  return (
    <div className="content-stretch flex flex-col gap-0 items-center relative shrink-0 w-[740px]">
      {useCases.map((useCase, index) => (
        <UseCaseItem 
          key={index} 
          text={useCase} 
          isLast={index === useCases.length - 1}
        />
      ))}
    </div>
  );
}

// Main Chat Content Area
function ChatContent() {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setConversationStarted(true);
    }
  };

  // If conversation has started, show chat interface
  if (conversationStarted) {
    return <ChatBoxContainer />;
  }

  // Otherwise show welcome screen
  return (
    <div className="basis-0 box-border flex flex-col grow items-center min-h-px min-w-px overflow-y-auto pb-0 px-0 relative w-full">
      {/* Centered wrapper */}
      <div className={`flex flex-col items-center justify-center w-full ${selectedButton ? 'pt-[25vh]' : 'min-h-screen'}`}>
        {/* Logo, Input, Buttons section */}
        <div className="flex flex-col gap-[24px] items-center sticky top-0 bg-background z-10">
          {/* Logo Container */}
          <div className="h-[80px] relative shrink-0 w-[740px]">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="box-border content-stretch flex flex-col gap-[10px] h-[80px] items-center justify-center p-[12px] relative w-full">
                <AbleLogo />
              </div>
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="bg-[#f8f8f8] h-[144px] relative shrink-0 w-[740px]">
            <div className="content-stretch flex flex-col h-[144px] items-start justify-between overflow-clip relative w-[740px]">
              <div className="basis-0 grow min-h-px min-w-px relative w-full">
                <div className="size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-start p-[16px] relative size-full">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Start a new research..."
                      className="font-['Inter',_sans-serif] font-normal leading-[20px] not-italic text-[#a0a0a0] text-[14px] w-full bg-transparent border-none outline-none resize-none placeholder:text-[#a0a0a0]"
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <div className="flex flex-row items-center justify-end size-full">
                  <div className="box-border content-stretch flex gap-[584px] items-center justify-end p-[12px] relative w-full">
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className={`box-border content-stretch flex gap-[8px] items-center justify-center p-[4px] relative rounded-[9999px] shrink-0 transition-colors ${
                        inputMessage.trim() 
                          ? 'bg-[#e03500] cursor-pointer hover:bg-[#c22d00]' 
                          : 'bg-[#ffd3c2] cursor-not-allowed'
                      }`}
                    >
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPathsChat.p7b3800} fill="#FCFCFC" />
                          </g>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
          </div>
          
          {/* Action Buttons with Dropdown */}
          <div className="relative w-[740px]">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[740px]">
              <button 
                onClick={() => setSelectedButton(selectedButton === 'companies' ? null : 'companies')}
                className={`basis-0 grow min-h-px min-w-px relative cursor-pointer transition-colors ${
                  selectedButton === 'companies' ? 'bg-[#f8f8f8]' : 'bg-white hover:bg-[#f8f8f8]'
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <IconList />
                    <p className="font-['Inter',_sans-serif] font-normal leading-[24px] not-italic text-[14px] text-[#0b1c38] text-nowrap">
                      Find companies
                    </p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => setSelectedButton(selectedButton === 'single' ? null : 'single')}
                className={`basis-0 grow min-h-px min-w-px relative cursor-pointer transition-colors ${
                  selectedButton === 'single' ? 'bg-[#f8f8f8]' : 'bg-white hover:bg-[#f8f8f8]'
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <IconDeepDive />
                    <p className="font-['Inter',_sans-serif] font-normal leading-[24px] not-italic text-[14px] text-[#0b1c38] text-nowrap">
                      Single company
                    </p>
                  </div>
                </div>
              </button>
              <button 
                onClick={() => setSelectedButton(selectedButton === 'deals' ? null : 'deals')}
                className={`basis-0 grow min-h-px min-w-px relative cursor-pointer transition-colors ${
                  selectedButton === 'deals' ? 'bg-[#f8f8f8]' : 'bg-white hover:bg-[#f8f8f8]'
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative w-full">
                    <IconDollar />
                    <p className="font-['Inter',_sans-serif] font-normal leading-[24px] not-italic text-[14px] text-[#0b1c38] text-nowrap">
                      Find deals
                    </p>
                  </div>
                </div>
              </button>
            </div>
            
            {/* Use Cases Dropdown - appears 16px below buttons */}
            {selectedButton && (
              <div className="absolute top-[calc(100%+16px)] left-0 w-full z-10">
                <UseCasesSection selectedButton={selectedButton} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== ROOT APP COMPONENT =====
export default function App() {
  return (
    <div className="bg-white relative size-full flex">
      <div className="shadow-[0px_0px_12px_0px_rgba(46,46,46,0.12)]">
        <SidebarNavigation />
      </div>
      <div className="flex-1 flex flex-col">
        <ChatContent />
      </div>
    </div>
  );
}
