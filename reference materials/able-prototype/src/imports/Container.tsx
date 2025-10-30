import svgPaths from "./svg-2y14a2fokd";

function Group8869() {
  return (
    <div className="[grid-area:1_/_1] h-[27.807px] ml-0 mt-0 relative w-[34px]">
      <div className="absolute bottom-0 left-0 right-0 top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 34 28"
        >
          <g id="Group 8869">
            <path
              d={svgPaths.p91e3c00}
              fill="var(--fill-0, white)"
              id="Vector"
            />
            <path
              d={svgPaths.p2dc6c80}
              fill="var(--fill-0, white)"
              id="Vector_2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="[grid-area:1_/_1] h-[5.522px] ml-[28.879px] mt-[22.213px] relative w-[5.078px]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 6 6"
      >
        <g id="Group">
          <path
            d={svgPaths.p18a45500}
            fill="var(--fill-0, white)"
            id="Vector"
          />
          <path
            d={svgPaths.p36eb0900}
            fill="var(--fill-0, white)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1261156795() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group8869 />
      <Group />
    </div>
  );
}

function Logo() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-center p-[8px] relative rounded shrink-0 size-10"
      data-name="Logo"
    >
      <Group1261156795 />
    </div>
  );
}

function LogoBlock() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Logo Block"
    >
      <Logo />
      <div className="font-['Helvetica_Neue_LT_Pro:43_Light_Extended',_sans-serif] h-6 leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-left tracking-[-0.5px] w-[35px]">
        <p className="adjustLetterSpacing block leading-[32px]">Able</p>
      </div>
    </div>
  );
}

function IconBasicExpandLeft() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Basic / Expand-left"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Basic / Expand-left">
          <path
            d={svgPaths.pbc98d00}
            fill="var(--fill-0, white)"
            id="Union (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButtonPrimaryDefault() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-[2px] relative shrink-0"
      data-name="icon-button_primary--default"
    >
      <IconBasicExpandLeft />
    </div>
  );
}

function NavigationHeader() {
  return (
    <div
      className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full"
      data-name="Navigation Header"
    >
      <LogoBlock />
      <IconButtonPrimaryDefault />
    </div>
  );
}

function IconBasicAdd() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Basic / Add">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Basic / Add">
          <path
            d={svgPaths.p19136ff0}
            fill="var(--fill-0, #4F4F4F)"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-start px-3 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5a5a5a] text-[14px] text-left">
            <p className="block leading-[20px]">Researches</p>
          </div>
          <IconBasicAdd />
        </div>
      </div>
    </div>
  );
}

function IconLabel() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon + Label"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap">
        <p className="[text-overflow:inherit] [text-wrap-mode:inherit]\' [white-space-collapse:inherit] block leading-[24px] overflow-inherit">
          Emerging Players in European Last-Mile Logistics
        </p>
      </div>
    </div>
  );
}

function LeftContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow h-6 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Content"
    >
      <IconLabel />
    </div>
  );
}

function MenuItem() {
  return (
    <div
      className="bg-[#e03500] relative rounded shrink-0 w-full"
      data-name="Menu Item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <LeftContent />
        </div>
      </div>
    </div>
  );
}

function IconLabel1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon + Label"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-left">
        <p className="block leading-[24px]">Research name</p>
      </div>
    </div>
  );
}

function LeftContent1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow h-6 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Content"
    >
      <IconLabel1 />
    </div>
  );
}

function RightContent() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 shrink-0"
      data-name="Right Content"
    />
  );
}

function MenuItem1() {
  return (
    <div
      className="bg-[#181818] relative rounded shrink-0 w-full"
      data-name="Menu Item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <LeftContent1 />
          <RightContent />
        </div>
      </div>
    </div>
  );
}

function IconLabel2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon + Label"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left">
        <p className="block leading-[24px]">Research name</p>
      </div>
    </div>
  );
}

function LeftContent2() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow h-6 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Content"
    >
      <IconLabel2 />
    </div>
  );
}

function RightContent1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 shrink-0"
      data-name="Right Content"
    />
  );
}

function MenuItem2() {
  return (
    <div
      className="bg-[#232323] relative rounded shrink-0 w-full"
      data-name="Menu Item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <LeftContent2 />
          <RightContent1 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Navigation"
    >
      <Title />
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
      <MenuItem1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="h-11 relative shrink-0 w-full" data-name="Title">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row h-11 items-start justify-start px-3 py-2 relative w-full">
          <div className="basis-0 font-['Inter:Semi_Bold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#5a5a5a] text-[14px] text-left">
            <p className="block leading-[20px]">Folders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FolderOpen4() {
  return (
    <div className="relative shrink-0 size-6" data-name="FolderOpen">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_1_3946)" id="FolderOpen">
          <g id="Vector"></g>
          <path d={svgPaths.pe76d980} fill="var(--fill-0, white)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_3946">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconLabel4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon + Label"
    >
      <FolderOpen4 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-left">
        <p className="block leading-[24px]">Folder name</p>
      </div>
    </div>
  );
}

function LeftContent4() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow h-6 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Content"
    >
      <IconLabel4 />
    </div>
  );
}

function RightContent3() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 shrink-0"
      data-name="Right Content"
    />
  );
}

function MenuItem4() {
  return (
    <div
      className="bg-[#181818] relative rounded shrink-0 w-full"
      data-name="Menu Item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <LeftContent4 />
          <RightContent3 />
        </div>
      </div>
    </div>
  );
}

function IconLabel5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon + Label"
    >
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-left">
        <p className="block leading-[24px]">Research name</p>
      </div>
    </div>
  );
}

function LeftContent5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow h-6 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Content"
    >
      <IconLabel5 />
    </div>
  );
}

function RightContent4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 shrink-0"
      data-name="Right Content"
    />
  );
}

function MenuItem5() {
  return (
    <div
      className="bg-[#181818] relative rounded shrink-0 w-full"
      data-name="Menu Item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start pl-11 pr-3 py-2 relative w-full">
          <LeftContent5 />
          <RightContent4 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformFolder() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Platform / Folder"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Platform / Folder">
          <path
            clipRule="evenodd"
            d={svgPaths.p33f6a300}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function IconLabel8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Icon + Label"
    >
      <IconPlatformFolder />
      <div className="basis-0 flex flex-col font-['Inter:Regular',_sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[14px] text-left">
        <p className="block leading-[24px]">Folder name</p>
      </div>
    </div>
  );
}

function LeftContent8() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-1 grow h-6 items-center justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Left Content"
    >
      <IconLabel8 />
    </div>
  );
}

function RightContent7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 shrink-0"
      data-name="Right Content"
    />
  );
}

function MenuItem8() {
  return (
    <div
      className="bg-[#181818] relative rounded shrink-0 w-full"
      data-name="Menu Item"
    >
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start px-3 py-2 relative w-full">
          <LeftContent8 />
          <RightContent7 />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Navigation"
    >
      <Title1 />
      <MenuItem4 />
      {[...Array(3).keys()].map((_, i) => (
        <MenuItem5 key={i} />
      ))}
      {[...Array(3).keys()].map((_, i) => (
        <MenuItem8 key={i} />
      ))}
    </div>
  );
}

function Frame2018776563() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
      <NavigationHeader />
      <Navigation />
      <Navigation1 />
    </div>
  );
}

function Avatar() {
  return (
    <div
      className="bg-[#4ab8f7] box-border content-stretch flex flex-row gap-[7.5px] items-center justify-center overflow-clip px-[3px] py-0 relative rounded-[9999px] shrink-0 size-6"
      data-name="Avatar"
    >
      <div className="flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">BD</p>
      </div>
    </div>
  );
}

function UserBadgeInitials() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-0 relative shrink-0 size-6"
      data-name="user_badge-initials"
    >
      <Avatar />
    </div>
  );
}

function NameEmail() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Name + Email"
    >
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-6 justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left w-[88px]">
        <p className="block leading-[24px]">Robbi Darwis</p>
      </div>
    </div>
  );
}

function AvatarLabel() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0"
      data-name="Avatar + Label"
    >
      <UserBadgeInitials />
      <NameEmail />
    </div>
  );
}

function IconBasicNotifications() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Basic / Notifications"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Basic / Notifications ">
          <path
            clipRule="evenodd"
            d={svgPaths.p24662100}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function Account() {
  return (
    <div className="relative shrink-0 w-full" data-name="Account">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-3 py-2 relative w-full">
          <AvatarLabel />
          <IconBasicNotifications />
        </div>
      </div>
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div
      className="bg-[#181818] box-border content-stretch flex flex-col gap-6 h-[820px] items-start justify-start px-4 py-6 relative shrink-0 w-[280px]"
      data-name="Sidebar Navigation"
    >
      <Frame2018776563 />
      <Account />
    </div>
  );
}

function Group1261156609() {
  return (
    <div
      className="absolute h-[15.5px] translate-x-[-50%] translate-y-[-50%] w-[13.428px]"
      style={{
        top: "calc(50% - 0.0999584px)",
        left: "calc(50% + 0.0144463px)",
      }}
    >
      <div className="absolute bottom-0 left-0 right-[-0.002%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 14 16"
        >
          <g id="Group 1261156609">
            <path
              d={svgPaths.p3e9da2c0}
              fill="var(--fill-0, #5C5E76)"
              id="Union"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Share2() {
  return (
    <div className="absolute inset-[16.667%] overflow-clip" data-name="share-2">
      <Group1261156609 />
    </div>
  );
}

function IconBasicShare() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-6"
      data-name="Icon / Basic / Share"
    >
      <Share2 />
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-center p-[4px] relative rounded shrink-0"
      data-name="Button"
    >
      <IconBasicShare />
    </div>
  );
}

function IconBasicMenu() {
  return (
    <div className="relative shrink-0 size-6" data-name="Icon / Basic / Menu">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
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
    <div
      className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-center p-[4px] relative rounded shrink-0"
      data-name="Button"
    >
      <IconBasicMenu />
    </div>
  );
}

function Frame2018776642() {
  return (
    <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="opacity-0 relative shrink-0 w-full" data-name="action-bar">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between p-[24px] relative w-full">
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#000000] text-[14px] text-left w-[523px]">
            <p className="block leading-[20px]" dir="auto">
              Adidas
            </p>
          </div>
          <Frame2018776642 />
        </div>
      </div>
    </div>
  );
}

function Group8870() {
  return (
    <div className="absolute inset-0">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 57 46"
      >
        <g id="Group 8869">
          <path
            d={svgPaths.p31bcc980}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p61ab700}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div
      className="absolute bottom-[0.259%] left-[84.937%] right-[0.129%] top-[79.883%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 9 10"
      >
        <g id="Group">
          <path
            d={svgPaths.p2bc703f0}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p1a5f8b00}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Symbol() {
  return (
    <div
      className="absolute bottom-0 left-[63.792%] right-0 top-0"
      data-name="symbol"
    >
      <Group8870 />
      <Group1 />
    </div>
  );
}

function Label() {
  return (
    <div
      className="absolute bottom-[0.177%] left-0 right-[37.95%] top-[33.122%]"
      data-name="label"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 97 31"
      >
        <g id="label">
          <path
            d={svgPaths.p10c65b00}
            fill="var(--fill-0, black)"
            id="Vector"
          />
          <path
            d={svgPaths.p22210200}
            fill="var(--fill-0, black)"
            id="Vector_2"
          />
          <path
            d={svgPaths.pa091b00}
            fill="var(--fill-0, black)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p1c377500}
            fill="var(--fill-0, black)"
            id="Vector_4"
          />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div
      className="h-[45.889px] relative shrink-0 w-[154.968px]"
      data-name="logo"
    >
      <Symbol />
      <Label />
    </div>
  );
}

function LogoContainer() {
  return (
    <div className="h-20 relative shrink-0 w-full" data-name="logo_container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-20 items-center justify-center p-[12px] relative w-full">
          <Logo1 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformWorkflow() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Platform / Workflow"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Platform / Workflow">
          <g id="Vector">
            <path
              clipRule="evenodd"
              d={svgPaths.p3ae9e800}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p8db1e00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3e196b00}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2b108b80}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p3cf7b100}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault() {
  return (
    <div
      className="absolute bg-[#232323] bottom-3 box-border content-stretch flex flex-row gap-2 items-center justify-center left-3 px-2 py-1"
      data-name="button_primary--default"
    >
      <IconPlatformWorkflow />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left text-nowrap">
        <p className="block leading-[24px] whitespace-pre" dir="auto">
          Workflows
        </p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pl-0.5 pr-0 py-0 relative shrink-0"
      data-name="text"
    >
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#858585] text-[14px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre" dir="auto">
          Describe what you’re looking to explore or start with a workflow...
        </p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-2.5 items-center justify-start left-0 p-[12px] top-0 w-[582px]"
      data-name="text-container"
    >
      <Text />
    </div>
  );
}

function ChatInputFieldDefault() {
  return (
    <div
      className="bg-[#f8f8f8] h-[132px] overflow-clip relative shrink-0 w-[582px]"
      data-name="chat_input-field--default"
    >
      <ButtonPrimaryDefault />
      <TextContainer />
    </div>
  );
}

function IconPlatformOrganization() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Platform / Organization"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Platform / Organization">
          <g id="Vector">
            <path
              clipRule="evenodd"
              d={svgPaths.p1a71df00}
              fill="var(--fill-0, #4F4F4F)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2a889040}
              fill="var(--fill-0, #4F4F4F)"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2b55080}
              fill="var(--fill-0, #4F4F4F)"
              fillRule="evenodd"
            />
            <path d={svgPaths.p113bf680} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p3807ea80} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p3aa80200} fill="var(--fill-0, #4F4F4F)" />
            <path d={svgPaths.p257c9ef2} fill="var(--fill-0, #4F4F4F)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative shrink-0"
      data-name="button_primary--default"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconPlatformOrganization />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-900 text-nowrap">
        <p className="block leading-[24px] whitespace-pre" dir="auto">
          Explore
        </p>
      </div>
    </div>
  );
}

function IconPlatformDeepDive() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Platform / Deep dive"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Platform / Deep dive">
          <g id="Union">
            <path d={svgPaths.p35ceedc0} fill="var(--fill-0, #4F4F4F)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p1954a000}
              fill="var(--fill-0, #4F4F4F)"
              fillRule="evenodd"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault2() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative shrink-0"
      data-name="button_primary--default"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconPlatformDeepDive />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-900 text-nowrap">
        <p className="block leading-[24px] whitespace-pre" dir="auto">
          Deep Dive
        </p>
      </div>
    </div>
  );
}

function IconColumnDollar() {
  return (
    <div
      className="relative shrink-0 size-6"
      data-name="Icon / Column / Dollar"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="Icon / Column / Dollar">
          <path
            clipRule="evenodd"
            d={svgPaths.p39742f80}
            fill="var(--fill-0, #4F4F4F)"
            fillRule="evenodd"
            id="Union"
          />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimaryDefault3() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-2 relative shrink-0"
      data-name="button_primary--default"
    >
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <IconColumnDollar />
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[14px] text-left text-neutral-900 text-nowrap">
        <p className="block leading-[24px] whitespace-pre" dir="auto">
          Deals
        </p>
      </div>
    </div>
  );
}

function Frame2018776634() {
  return (
    <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
      <ButtonPrimaryDefault1 />
      <ButtonPrimaryDefault2 />
      <ButtonPrimaryDefault3 />
    </div>
  );
}

function ChatBoxContainer() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-center justify-start min-h-px min-w-px overflow-clip pb-0 pt-[180px] px-0 relative shrink-0 w-full"
      data-name="chat-box_container"
    >
      <LogoContainer />
      <ChatInputFieldDefault />
      <Frame2018776634 />
    </div>
  );
}

function Frame2018776546() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[820px] items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0">
      <ActionBar />
      <ChatBoxContainer />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="container">
      <div className="box-border content-stretch flex flex-row items-center justify-start p-0 relative size-full">
        <SidebarNavigation />
        <Frame2018776546 />
      </div>
      <div className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none shadow-[0px_0px_12px_0px_rgba(46,46,46,0.12)]" />
    </div>
  );
}