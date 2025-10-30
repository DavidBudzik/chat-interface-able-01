import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ableLogoSvg from '../assets/able-logo.svg';
import playIcon from '../assets/icons/play.svg';
import workflowIcon from '../assets/icons/Workflow.svg';
import searchIcon from '../assets/icons/Search.svg';
import filterIcon from '../assets/icons/Filter.svg';
import notificationsIcon from '../assets/icons/Notifications.svg';
import closeIcon from '../assets/icons/Close.svg';
import chevronDownIcon from '../assets/icons/Chevron down.svg';
import addIcon from '../assets/icons/Add.svg';
import sidebarIcon from '../assets/icons/sidebar.svg';
import folderIcon from '../assets/icons/Folder.svg';
import fileIcon from '../assets/icons/File.svg';
import downloadIcon from '../assets/icons/Download.svg';
import alertIcon from '../assets/icons/Alert.svg';
import checkIcon from '../assets/icons/Confirmation.svg';
import predictiveReportsIcon from '../assets/icons/Predictive reports.svg';
import gridIcon from '../assets/icons/Workflow.svg';
import reportsIcon from '../assets/icons/Predictive reports.svg';
import menuIcon from '../assets/icons/Menu - horiz..svg';
import threeDotsVerticalIcon from '../assets/icons/Menu.svg';
import editIcon from '../assets/icons/Edit.svg';
import trashIcon from '../assets/icons/Delete.svg';
import usersIcon from '../assets/icons/Team.svg';
import profileIcon from '../assets/icons/Profile.svg';
import logoutIcon from '../assets/icons/Logout.svg';
import codeIcon from '../assets/icons/Code Assistant.svg';
import fileSearchIcon from '../assets/icons/Search everywhere.svg';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onWatchVideo?: () => void;
  onResetTutorial?: () => void;
}

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: 'workflow' | 'research' | 'error' | 'folder' | 'download';
  read: boolean;
}

const NOTIFICATIONS_STORAGE_KEY = 'able_notifications_read_state';
const SIDEBAR_EXPANDED_KEY = 'sidebarExpanded';
// FOLDERS_EXPANDED_KEY removed - folders section only contains tutorial card
const RESEARCHES_EXPANDED_KEY = 'researchesExpanded';
const SELECTED_ITEM_ID_KEY = 'selectedItemId';
const LAST_SEARCH_QUERY_KEY = 'lastSearchQuery';
const INITIAL_NOTIFICATIONS: Omit<Notification, 'read'>[] = [
  { id: '1', title: "New Workflow completed", description: "Heating companies in Iceland", time: "14 days ago", icon: "workflow" },
  { id: '2', title: "Research data updated", description: "AI Tools for Enterprise Use", time: "2 days ago", icon: "research" },
  { id: '3', title: "Workflow failed", description: "B2B Payments Infrastructure", time: "3 days ago", icon: "error" },
  { id: '4', title: "New folder created", description: "Startup Exits 2024-2025", time: "5 days ago", icon: "folder" },
  { id: '5', title: "Data export ready", description: "Remote Work Software Landscape", time: "1 week ago", icon: "download" },
  { id: '6', title: "Workflow completed", description: "Micro-SaaS Builders & Tools", time: "1 week ago", icon: "workflow" },
  { id: '7', title: "Research completed", description: "Fintech Market Analysis", time: "2 weeks ago", icon: "research" },
  { id: '8', title: "New notification", description: "E-commerce Trends 2024", time: "2 weeks ago", icon: "workflow" },
  { id: '9', title: "Data processing done", description: "Healthcare AI Solutions", time: "3 weeks ago", icon: "download" },
  { id: '10', title: "Workflow updated", description: "EdTech Platform Review", time: "3 weeks ago", icon: "workflow" },
  { id: '11', title: "Research published", description: "Cybersecurity Landscape", time: "1 month ago", icon: "research" },
  { id: '12', title: "Export completed", description: "Green Energy Companies", time: "1 month ago", icon: "download" },
  { id: '13', title: "New workflow", description: "Blockchain Infrastructure", time: "1 month ago", icon: "workflow" },
  { id: '14', title: "Data analysis done", description: "Food Tech Innovations", time: "2 months ago", icon: "research" },
  { id: '15', title: "Folder shared", description: "Space Technology Trends", time: "2 months ago", icon: "folder" },
  { id: '16', title: "Workflow completed", description: "Renewable Energy Market", time: "2 months ago", icon: "workflow" },
  { id: '17', title: "Research updated", description: "Quantum Computing", time: "3 months ago", icon: "research" },
  { id: '18', title: "Export ready", description: "Biotech Companies", time: "3 months ago", icon: "download" },
  { id: '19', title: "New notification", description: "Autonomous Vehicles", time: "3 months ago", icon: "workflow" },
  { id: '20', title: "Data processed", description: "Smart Cities Initiative", time: "4 months ago", icon: "research" }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, onWatchVideo, onResetTutorial }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  // Folder modal state removed - no folders in navigation
  const [notifications, setNotifications] = useState<Notification[]>([]);
  // foldersExpanded state removed - folders section only contains tutorial card
  const [researchesExpanded, setResearchesExpanded] = useState<boolean>(() => {
    const v = localStorage.getItem(RESEARCHES_EXPANDED_KEY);
    return v ? JSON.parse(v) : true;
  });
  const [searchQuery, setSearchQuery] = useState<string>(() => localStorage.getItem(LAST_SEARCH_QUERY_KEY) || '');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(() => localStorage.getItem(SELECTED_ITEM_ID_KEY));
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    type: 'research';
    itemId: string;
  } | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const createMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Initialize notifications with read state from localStorage
  useEffect(() => {
    const savedReadState = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    const readStateMap: Record<string, boolean> = savedReadState ? JSON.parse(savedReadState) : {};
    
    const initializedNotifications: Notification[] = INITIAL_NOTIFICATIONS.map(notif => ({
      ...notif,
      read: readStateMap[notif.id] || false
    }));
    
    setNotifications(initializedNotifications);
  }, []);

  // Calculate unread count
  const unreadCount = useMemo(() => {
    return notifications.filter(n => !n.read).length;
  }, [notifications]);

  // Save read state to localStorage whenever it changes
  useEffect(() => {
    if (notifications.length > 0) {
      const readStateMap: Record<string, boolean> = {};
      notifications.forEach(notif => {
        readStateMap[notif.id] = notif.read;
      });
      localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(readStateMap));
    }
  }, [notifications]);

  // Persist UI state - folders section persistence removed

  useEffect(() => {
    localStorage.setItem(RESEARCHES_EXPANDED_KEY, JSON.stringify(researchesExpanded));
  }, [researchesExpanded]);

  useEffect(() => {
    if (selectedItemId !== null) localStorage.setItem(SELECTED_ITEM_ID_KEY, selectedItemId);
  }, [selectedItemId]);

  useEffect(() => {
    localStorage.setItem(LAST_SEARCH_QUERY_KEY, searchQuery);
  }, [searchQuery]);

  const toggleSidebar = () => {
    onToggle();
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleCreateMenu = () => {
    setShowCreateMenu(!showCreateMenu);
  };

  // Folder creation functions removed - no folders in navigation

  // No folder data - folders section only contains tutorial card
  const [researches, setResearches] = useState<
    { id: string; name: string; type: 'chat' | 'document' | 'code' }
  >([
    { id: 'r1', name: 'AI tools for SMBs', type: 'chat' },
    { id: 'r2', name: 'Payments infra deep dive', type: 'document' },
    { id: 'r3', name: 'SDK integration audit', type: 'code' },
    { id: 'r4', name: 'Competitor mapping', type: 'document' },
    { id: 'r5', name: 'Fundraising tracker', type: 'chat' },
  ]);

  // Filtering with debounce
  const [internalQuery, setInternalQuery] = useState<string>(searchQuery);
  useEffect(() => {
    const handle = setTimeout(() => setSearchQuery(internalQuery), 300);
    return () => clearTimeout(handle);
  }, [internalQuery]);

  // No folder filtering needed - folders section only contains tutorial card

  const filteredResearches = useMemo(() => {
    if (!searchQuery) return researches;
    const q = searchQuery.toLowerCase();
    return researches.filter(r => r.name.toLowerCase().includes(q));
  }, [researches, searchQuery]);

  // Context menu handlers
  const openContextMenu = useCallback((e: React.MouseEvent, type: 'research', itemId: string) => {
    e.preventDefault();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const preferredX = e.clientX;
    const preferredY = e.clientY;
    const width = 200;
    const height = 160;
    // Ensure context menu doesn't overlap with sidebar
    const sidebarWidth = isOpen ? 305 : 60;
    const x = Math.min(preferredX, viewportWidth - width - 8);
    const y = Math.min(preferredY, viewportHeight - height - 8);
    setContextMenu({ x, y, type, itemId });
  }, [isOpen]);

  const closeContextMenu = useCallback(() => setContextMenu(null), []);

  // User menu handlers
  const toggleUserMenu = () => setUserMenuOpen(v => !v);
  const closeUserMenu = () => setUserMenuOpen(false);

  // Folder creation submit function removed - no folders in navigation

  const handleCreateResearch = () => {
    setShowCreateMenu(false);
    // Here you would typically create a new research
    console.log('Creating new research');
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const handleNotificationClick = (notificationId: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  // Close popovers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setShowCreateMenu(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (contextMenu) {
        const anyTarget = event.target as Node;
        // Close context menu on outside click
        if (!(anyTarget as HTMLElement).closest?.('.context-menu')) {
          closeContextMenu();
        }
      }
    };

    if (showNotifications || showCreateMenu || userMenuOpen || contextMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications, showCreateMenu, userMenuOpen, contextMenu, closeContextMenu]);

  // Close menus on Escape, close context menu on scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowNotifications(false);
        setShowCreateMenu(false);
        setUserMenuOpen(false);
        closeContextMenu();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        const el = document.getElementById('sidebar-search-input') as HTMLInputElement | null;
        el?.focus();
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        onToggle();
      }
    };
    const onScroll = () => {
      if (contextMenu) closeContextMenu();
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [contextMenu, closeContextMenu, onToggle]);

  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`} role="navigation" aria-label="Main navigation sidebar">
      <div className="sidebar__container">
        {isOpen && (
          <div className="sidebar__header">
            <div className="sidebar__logo-block" aria-hidden>
              <div className="sidebar__logo-icon">
                <img src={ableLogoSvg} alt="Able" className="sidebar__logo-image" />
              </div>
            </div>
            <button className="sidebar__toggle-button" onClick={toggleSidebar} aria-label="Toggle sidebar">
              <img src={sidebarIcon} alt="Toggle sidebar" className="sidebar__icon" />
            </button>
          </div>
        )}

        {isOpen && (
          <div className="sidebar__content">
            <div className="sidebar__nav">
              <div className="sidebar__buttons-group">
                {/* New Research primary button */}
                <button
                  className="sidebar__menu-item sidebar__menu-item--create"
                  onClick={toggleCreateMenu}
                  aria-label="Create new research"
                >
                  <div className="sidebar__menu-icon sidebar__menu-icon--red">
                    <img src={addIcon} alt="Add" className="sidebar__icon-inline sidebar__icon-inline--cta" />
                  </div>
                  <span className="sidebar__menu-label sidebar__menu-label--cta">New Research</span>
                </button>

                {/* Nav items */}
                <button className="sidebar__menu-item" aria-label="All workflows">
                  <img src={gridIcon} alt="Grid" className="sidebar__icon" />
                  <span className="sidebar__menu-label">All Workflows</span>
                </button>
                <button className="sidebar__menu-item" aria-label="Intelligence reports">
                  <img src={reportsIcon} alt="Bar chart" className="sidebar__icon" />
                  <span className="sidebar__menu-label">Intelligence Reports</span>
                </button>
              </div>

              {/* Search */}
              <div className="sidebar__search-item" aria-label="Search researches">
                <div className="sidebar__search-content" style={{ width: '100%' }}>
                  <img src={searchIcon} alt="Search" className="sidebar__search-icon" />
                  <input
                    id="sidebar-search-input"
                    type="text"
                    value={internalQuery}
                    onChange={(e) => setInternalQuery(e.target.value)}
                    placeholder="Search researches..."
                    aria-label="Search researches"
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#FFFFFF',
                      fontSize: 14,
                    }}
                  />
                </div>
                <button className="sidebar__filter-button" aria-label="Filter search results">
                  <img src={filterIcon} alt="Filter" className="sidebar__icon" />
                </button>
              </div>
            </div>
            
            {/* Folders section */}
            <div className="sidebar__folders" style={{ marginBottom: 16, flex: 'unset' }}>
              <div className="sidebar__folders-header" style={{ padding: '14px 16px', height: 48, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="sidebar__folders-title" style={{ textTransform: 'uppercase', letterSpacing: 0.5, fontSize: 13, fontWeight: 600, color: '#FFFFFF' }}>Folders</span>
              </div>
              <div style={{ padding: '0 8px 16px 8px' }}>
                {/* Tutorial Card */}
                <div className="sidebar__tutorial-card">
                  <div className="sidebar__tutorial-header">
                    <span className="sidebar__tutorial-title">Getting Started</span>
                    <button className="sidebar__tutorial-close" aria-label="Close tutorial">
                      <img src={closeIcon} alt="Close" className="sidebar__icon" />
                    </button>
                  </div>
                  <p className="sidebar__tutorial-description">
                    Learn how to create your first workflow and automate your tasks with Able.
                  </p>
                  <button 
                    className="sidebar__tutorial-watch-button" 
                    onClick={() => {
                      onWatchVideo?.();
                      if (isOpen) {
                        onToggle();
                      }
                    }} 
                    aria-label="Watch tutorial video"
                  >
                    <div className="sidebar__tutorial-watch-icon">
                      <img src={playIcon} alt="Play" className="sidebar__icon" />
                    </div>
                    <span className="sidebar__tutorial-watch-text">Watch Video</span>
                  </button>
                  {import.meta.env.DEV && onResetTutorial && (
                    <button
                      className="sidebar__tutorial-reset-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onResetTutorial();
                      }}
                      aria-label="Reset tutorial for testing"
                    >
                      Reset Tutorial
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Researches section */}
            <div className="sidebar__folders">
              <button
                className="sidebar__folders-header"
                onClick={() => setResearchesExpanded(v => !v)}
                aria-expanded={researchesExpanded}
                aria-label="Toggle Researches section"
                style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
              >
                <span className="sidebar__folders-title" style={{ textTransform: 'uppercase', letterSpacing: 0.5, fontSize: 13, fontWeight: 600 }}>Researches</span>
                <img
                  src={chevronDownIcon}
                  alt="Chevron"
                  className="sidebar__icon"
                  style={{ transform: researchesExpanded ? 'rotate(0deg)' : 'rotate(180deg)', transition: 'transform 200ms ease-in-out' }}
                />
              </button>
              <div
                className="collapsible-content"
                style={{
                  overflow: 'hidden',
                  maxHeight: researchesExpanded ? 2000 : 0,
                  opacity: researchesExpanded ? 1 : 0,
                  transition: 'max-height 200ms ease-in-out, opacity 200ms ease-in-out',
                }}
              >
                {filteredResearches.length === 0 && (
                  <div
                    style={{
                      width: '100%',
                      padding: '24px 0 32px 0',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 12,
                      color: '#94969C',
                      minHeight: 220,
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={ableLogoSvg}
                      alt="Empty"
                      className="sidebar__icon"
                      style={{ width: 60, height: 60, filter: 'brightness(0) invert(0.28)' }}
                    />
                    <span style={{ fontSize: 14 }}>No researches created yet...</span>
                  </div>
                )}
                {filteredResearches.map(item => {
                  const icon = item.type === 'chat' ? fileSearchIcon : item.type === 'document' ? fileIcon : codeIcon;
                  return (
                    <div
                      key={item.id}
                      role="button"
                      className="sidebar__research-item"
                      aria-label={item.name}
                      aria-selected={selectedItemId === item.id}
                      onClick={() => setSelectedItemId(item.id)}
                      onContextMenu={(e) => openContextMenu(e, 'research', item.id)}
                      style={{
                        width: 'calc(100% - 16px)',
                        height: 40,
                        margin: '0 8px 2px 8px',
                        padding: '10px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        borderRadius: 0,
                        background: selectedItemId === item.id ? '#2A2B2F' : 'transparent',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedItemId !== item.id) e.currentTarget.style.backgroundColor = '#2A2B2F';
                      }}
                      onMouseLeave={(e) => {
                        if (selectedItemId !== item.id) e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <img src={icon} alt="Type" className="sidebar__icon" style={{ filter: 'brightness(0) invert(1)' }} />
                      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#C9C9C9', fontSize: 14 }}>{item.name}</span>
                      <button
                        aria-label={`Open context menu for ${item.name}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          const rowEl = (e.currentTarget as HTMLElement).closest('[role="button"]') as HTMLElement | null;
                          const rect = rowEl?.getBoundingClientRect();
                          const sidebarWidth = isOpen ? 305 : 60;
                          const x = sidebarWidth + 8; // 8px to the right of sidebar
                          const y = rect ? rect.top : e.clientY;
                          setContextMenu({ x, y, type: 'research', itemId: item.id });
                        }}
                        className="sidebar__row-menu-trigger"
                        style={{ background: 'transparent', border: 'none' }}
                      >
                        <img src={threeDotsVerticalIcon} alt="Menu" className="sidebar__icon" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {!isOpen && (
          <div className="sidebar__collapsed-content">
            <div className="sidebar__collapsed-nav">
              <div className="sidebar__collapsed-logo">
                <img src={ableLogoSvg} alt="Able Logo" className="sidebar__collapsed-logo-image" />
              </div>
              <button className="sidebar__collapsed-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
                <img src={sidebarIcon} alt="Toggle sidebar" className="sidebar__icon" />
              </button>
              <button className="sidebar__collapsed-button sidebar__collapsed-button--primary" onClick={toggleCreateMenu} aria-label="New research">
                <img src={addIcon} alt="Create new" className="sidebar__icon" />
              </button>
              <button className="sidebar__collapsed-button sidebar__collapsed-button--secondary" aria-label="All workflows">
                <img src={gridIcon} alt="Workflows" className="sidebar__icon" />
              </button>
              <button className="sidebar__collapsed-button sidebar__collapsed-button--secondary" aria-label="Intelligence reports">
                <img src={reportsIcon} alt="Reports" className="sidebar__icon" />
              </button>
            </div>
            <div className="sidebar__collapsed-account">
              <button className="sidebar__collapsed-notification" onClick={toggleNotifications} aria-label="Notifications">
                <img src={notificationsIcon} alt="Notifications" className="sidebar__icon" />
                {unreadCount > 0 && (
                  <span className="sidebar__notification-badge sidebar__notification-badge--collapsed sidebar__notification-badge--dot"></span>
                )}
              </button>
              <div className="avatar">
                <span>DB</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="sidebar__account" aria-label="User menu">
          <button
            onClick={toggleUserMenu}
            aria-haspopup
            aria-expanded={userMenuOpen}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'transparent',
              border: 'none',
              width: 'auto',
              cursor: 'pointer',
              padding: 12,
            }}
          >
            <div className="avatar" style={{ width: 32, height: 32, background: '#FF4436' }}>
              <span style={{ color: '#fff', fontWeight: 500 }}>DB</span>
            </div>
            <span className="sidebar__account-name" style={{ color: '#C9C9C9', fontSize: 14, fontWeight: 500 }}>Daniel</span>
          </button>
          {/* Notifications button with badge */}
          <button className="sidebar__notification-button" onClick={toggleNotifications} aria-label="Notifications">
            <img src={notificationsIcon} alt="Notifications" className="sidebar__icon" />
            {unreadCount > 0 && (
              <span className="sidebar__notification-badge sidebar__notification-badge--dot"></span>
            )}
          </button>

          {/* User dropdown */}
          {userMenuOpen && (
            <div
              ref={userMenuRef}
              role="menu"
              aria-label="User menu"
              style={{
                position: 'absolute',
                bottom: '100%',
                left: 16,
                marginBottom: 8,
                width: 192,
                background: '#FFFFFF',
                borderRadius: 8,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                padding: 8,
                display: 'block',
                zIndex: 1100,
              }}
            >
              {[
                { id: 'profile', label: 'Profile', icon: profileIcon, action: () => {} },
                { id: 'teams', label: 'Teams', icon: usersIcon, action: () => {} },
                { id: 'org', label: 'Organization', icon: reportsIcon, action: () => {} },
              ].map(i => (
                <button
                  key={i.id}
                  role="menuitem"
                  onClick={() => { i.action(); closeUserMenu(); }}
                  style={{
                    width: '100%', height: 36, padding: '8px 12px',
                    borderRadius: 4, display: 'flex', alignItems: 'center', gap: 10,
                    background: 'transparent', border: 'none', cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <img src={i.icon} alt="" className="sidebar__icon" style={{ filter: 'none' }} />
                  <span style={{ fontSize: 14, color: '#18181B' }}>{i.label}</span>
                </button>
              ))}
              <div style={{ height: 1, background: '#E5E7EB', margin: '4px 0' }} />
              <button
                role="menuitem"
                onClick={() => { closeUserMenu(); }}
                style={{
                  width: '100%', height: 36, padding: '8px 12px',
                  borderRadius: 4, display: 'flex', alignItems: 'center', gap: 10,
                  background: 'transparent', border: 'none', cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <img src={logoutIcon} alt="" className="sidebar__icon" style={{ filter: 'none' }} />
                <span style={{ fontSize: 14, color: '#DC2626' }}>Logout</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Create Menu */}
      {showCreateMenu && (
        <div className="sidebar__create-menu" ref={createMenuRef}>
          <div className="sidebar__create-menu-item" onClick={handleCreateResearch}>
            <div className="sidebar__create-menu-icon">
              <img src={fileSearchIcon} alt="Research" className="sidebar__icon" />
            </div>
            <span className="sidebar__create-menu-label">Research</span>
          </div>
        </div>
      )}

      {/* New Folder Modal removed - no folders in navigation */}

      {/* Notifications Modal */}
      {showNotifications && (
        <div className="sidebar__notifications-modal" ref={modalRef}>
          <div className="sidebar__notifications-header">
            <h3 className="sidebar__notifications-title">
              Notifications {unreadCount > 0 && `(${unreadCount})`}
            </h3>
            {unreadCount > 0 && (
              <button 
                className="sidebar__notifications-mark-all" 
                onClick={handleMarkAllAsRead}
                aria-label="Mark all as read"
              >
                Mark all as Read
              </button>
            )}
          </div>
          <div className="sidebar__notifications-list">
            {notifications.map((notification) => {
              const getIcon = (iconType: string) => {
                switch (iconType) {
                  case 'workflow': return <img src={workflowIcon} alt="Workflow" className="sidebar__icon" />;
                  case 'research': return <img src={fileIcon} alt="Research" className="sidebar__icon" />;
                  case 'error': return <img src={alertIcon} alt="Error" className="sidebar__icon" />;
                  case 'folder': return <img src={folderIcon} alt="Folder" className="sidebar__icon" />;
                  case 'download': return <img src={downloadIcon} alt="Download" className="sidebar__icon" />;
                  default: return <img src={workflowIcon} alt="Workflow" className="sidebar__icon" />;
                }
              };
              
              return (
                <div 
                  key={notification.id} 
                  className={`sidebar__notification-item ${notification.read ? 'sidebar__notification-item--read' : 'sidebar__notification-item--unread'}`}
                  onClick={() => handleNotificationClick(notification.id)}
                >
                  <div className="sidebar__notification-icon">
                    {getIcon(notification.icon)}
                  </div>
                  <div className="sidebar__notification-content">
                    <div className="sidebar__notification-header">
                      <span className="sidebar__notification-title">{notification.title}</span>
                      <span className="sidebar__notification-time">{notification.time}</span>
                    </div>
                    <p className="sidebar__notification-description">{notification.description}</p>
                  </div>
                  {!notification.read && (
                    <div className="sidebar__notification-unread-indicator" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="context-menu"
          role="menu"
          aria-label="Context menu"
          style={{
            position: 'fixed',
            top: contextMenu.y,
            left: contextMenu.x,
            width: 200,
            background: '#FFFFFF',
            borderRadius: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            padding: 8,
            zIndex: 6000,
          }}
        >
          {/* Rename */}
          <button
            role="menuitem"
            onClick={() => { /* open rename */ closeContextMenu(); }}
            style={{ width: '100%', height: 36, padding: '8px 12px', borderRadius: 0, display: 'flex', alignItems: 'center', gap: 10, background: 'transparent', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <img src={editIcon} alt="" className="sidebar__icon" style={{ filter: 'none' }} />
            <span style={{ fontSize: 14, color: '#18181B' }}>Rename</span>
          </button>

          {/* Collaborate */}
          <button
            role="menuitem"
            onClick={() => { /* collaborate */ closeContextMenu(); }}
            style={{ width: '100%', height: 36, padding: '8px 12px', borderRadius: 0, display: 'flex', alignItems: 'center', gap: 10, background: 'transparent', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <img src={usersIcon} alt="" className="sidebar__icon" style={{ filter: 'none' }} />
            <span style={{ fontSize: 14, color: '#18181B' }}>Collaborate</span>
          </button>

          {/* Divider */}
          <div style={{ height: 1, background: '#E5E7EB', margin: '4px 0' }} />

          {/* Delete */}
          <button
            role="menuitem"
            onClick={() => { /* delete */ closeContextMenu(); }}
            style={{ width: '100%', height: 36, padding: '8px 12px', borderRadius: 0, display: 'flex', alignItems: 'center', gap: 10, background: 'transparent', border: 'none', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <img src={trashIcon} alt="" className="sidebar__icon" style={{ filter: 'none' }} />
            <span style={{ fontSize: 14, color: '#DC2626' }}>Delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

