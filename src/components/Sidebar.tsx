import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PanelLeft, Plus, Workflow, Bell, Search, Filter, ChevronDown, Play, X, Folder, FolderPlus, MoreHorizontal, FileText, Download, AlertCircle, CheckCircle, Search as SearchIcon, FileSearch } from 'lucide-react';
import ableLogoSvg from '../assets/able-logo.svg';
import './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onWatchVideo?: () => void;
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

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, onWatchVideo }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);
  const [folderName, setFolderName] = useState('');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const createMenuRef = useRef<HTMLDivElement>(null);
  const newFolderModalRef = useRef<HTMLDivElement>(null);

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

  const toggleSidebar = () => {
    onToggle();
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleCreateMenu = () => {
    setShowCreateMenu(!showCreateMenu);
  };

  const handleCreateFolder = () => {
    setShowCreateMenu(false);
    setShowNewFolderModal(true);
    setFolderName('New folder');
  };

  const handleCancelFolder = () => {
    setShowNewFolderModal(false);
    setFolderName('');
  };

  const handleCreateFolderSubmit = () => {
    // Here you would typically create the folder
    console.log('Creating folder:', folderName);
    setShowNewFolderModal(false);
    setFolderName('');
  };

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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setShowCreateMenu(false);
      }
      if (newFolderModalRef.current && !newFolderModalRef.current.contains(event.target as Node)) {
        setShowNewFolderModal(false);
      }
    };

    if (showNotifications || showCreateMenu || showNewFolderModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNotifications, showCreateMenu, showNewFolderModal]);

  return (
    <div className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar__container">
        {isOpen && (
          <div className="sidebar__header">
            <div className="sidebar__logo-block">
              <div className="sidebar__logo-icon">
                <img src={ableLogoSvg} alt="Able Logo" className="sidebar__logo-image" />
              </div>
              <p className="sidebar__logo-text">Able</p>
            </div>
            <button className="sidebar__toggle-button" onClick={toggleSidebar} aria-label="Toggle sidebar">
              <PanelLeft size={20} />
            </button>
          </div>
        )}

        {isOpen && (
          <div className="sidebar__content">
            <div className="sidebar__nav">
              <button className="sidebar__menu-item sidebar__menu-item--create" onClick={toggleCreateMenu}>
                <div className="sidebar__menu-icon sidebar__menu-icon--red">
                  <Plus size={16} />
                </div>
                <span className="sidebar__menu-label">Create new</span>
              </button>

              <div className="sidebar__workflows-button-wrapper">
                <button className="sidebar__workflows-button">
                  <Workflow size={24} />
                  <span>All workflows</span>
                </button>
              </div>

              <button className="sidebar__menu-item">
                <div className="sidebar__menu-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="sidebar__menu-label">Predictive Reports</span>
              </button>

              <div className="sidebar__search-item">
                <div className="sidebar__search-content">
                  <Search size={20} className="sidebar__search-icon" />
                  <span className="sidebar__search-placeholder">Search researches....</span>
                </div>
                <button className="sidebar__filter-button" aria-label="Filter">
                  <Filter size={16} />
                </button>
              </div>
            </div>

            <div className="sidebar__folders">
              <div className="sidebar__folders-header">
                <span className="sidebar__folders-title">Folders</span>
                <ChevronDown size={24} />
              </div>
              <div className="sidebar__folders-content">
                <div className="sidebar__tutorial-card">
                  <div className="sidebar__tutorial-header">
                    <span className="sidebar__tutorial-title">Getting Started</span>
                    <button className="sidebar__tutorial-close" aria-label="Close tutorial">
                      <X size={24} />
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
                      <Play size={16} />
                    </div>
                    <span className="sidebar__tutorial-watch-text">Watch Video</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!isOpen && (
          <div className="sidebar__collapsed-content">
            <div className="sidebar__collapsed-nav">
              <button className="sidebar__collapsed-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
                <PanelLeft size={20} />
              </button>
              <button className="sidebar__collapsed-button sidebar__collapsed-button--primary" onClick={toggleCreateMenu} aria-label="New chat">
                <Plus size={16} />
              </button>
              <button className="sidebar__collapsed-button sidebar__collapsed-button--secondary" aria-label="Workflows">
                <Workflow size={16} />
              </button>
            </div>
            <div className="sidebar__collapsed-account">
              <button className="sidebar__collapsed-notification" onClick={toggleNotifications} aria-label="Notifications">
                <Bell size={16} />
                {unreadCount > 0 && (
                  <span className="sidebar__notification-badge sidebar__notification-badge--collapsed sidebar__notification-badge--dot"></span>
                )}
              </button>
              <div className="avatar">
                <span>BD</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="sidebar__account">
          <div className="sidebar__account-info">
            <div className="avatar">
              <span>BD</span>
            </div>
            <span className="sidebar__account-name">Robbi Darwis</span>
          </div>
          <button className="sidebar__notification-button" onClick={toggleNotifications} aria-label="Notifications">
            <Bell size={24} />
            {unreadCount > 0 && (
              <span className="sidebar__notification-badge sidebar__notification-badge--dot"></span>
            )}
          </button>
        </div>
      )}

      {/* Create Menu */}
      {showCreateMenu && (
        <div className="sidebar__create-menu" ref={createMenuRef}>
          <div className="sidebar__create-menu-item" onClick={handleCreateResearch}>
            <div className="sidebar__create-menu-icon">
              <FileSearch size={24} />
            </div>
            <span className="sidebar__create-menu-label">Research</span>
          </div>
          <div className="sidebar__create-menu-item" onClick={handleCreateFolder}>
            <div className="sidebar__create-menu-icon">
              <Folder size={24} />
            </div>
            <span className="sidebar__create-menu-label">Folder</span>
          </div>
        </div>
      )}

      {/* New Folder Modal */}
      {showNewFolderModal && (
        <div className="sidebar__modal-overlay">
          <div className="sidebar__new-folder-modal" ref={newFolderModalRef}>
            <div className="sidebar__modal-header">
              <h2 className="sidebar__modal-title">New folder</h2>
            </div>
            <div className="sidebar__modal-content">
              <div className="sidebar__input-group">
                <label className="sidebar__input-label">Folder name</label>
                <input
                  type="text"
                  className="sidebar__input-field"
                  value={folderName}
                  onChange={(e) => setFolderName(e.target.value)}
                  placeholder="New folder"
                  autoFocus
                />
              </div>
            </div>
            <div className="sidebar__modal-footer">
              <button className="sidebar__modal-button sidebar__modal-button--secondary" onClick={handleCancelFolder}>
                Cancel
              </button>
              <button className="sidebar__modal-button sidebar__modal-button--primary" onClick={handleCreateFolderSubmit}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}

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
                  case 'workflow': return <Workflow size={24} />;
                  case 'research': return <FileText size={24} />;
                  case 'error': return <AlertCircle size={24} />;
                  case 'folder': return <Folder size={24} />;
                  case 'download': return <Download size={24} />;
                  default: return <Workflow size={24} />;
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
    </div>
  );
};

