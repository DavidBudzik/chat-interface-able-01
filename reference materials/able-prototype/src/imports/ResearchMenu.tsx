function IconBasicEdit() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="var(--popover-foreground)" />
      </svg>
    </div>
  );
}

function IconPlatformFolder() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" stroke="var(--popover-foreground)" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

function MenuItem({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white relative shrink-0 w-full hover:bg-muted transition-colors cursor-pointer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <IconBasicEdit />
          <p className="font-['Inter',_sans-serif] leading-[24px] not-italic relative shrink-0 text-foreground">
            Rename
          </p>
        </div>
      </div>
    </div>
  );
}

function MenuItem1({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white relative shrink-0 w-full hover:bg-muted transition-colors cursor-pointer"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[8px] relative w-full">
          <IconPlatformFolder />
          <p className="font-['Inter',_sans-serif] leading-[24px] not-italic relative shrink-0 text-foreground">
            Move to folder
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResearchMenu() {
  const handleRename = () => {
    console.log('Rename clicked');
    // Handle rename action
  };

  const handleMoveToFolder = () => {
    console.log('Move to folder clicked');
    // Handle move to folder action
  };

  return (
    <div className="bg-white relative shadow-[var(--elevation-sm)] rounded-[var(--radius)] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start p-[8px] relative size-full">
          <MenuItem onClick={handleRename} />
          <MenuItem1 onClick={handleMoveToFolder} />
        </div>
      </div>
    </div>
  );
}
