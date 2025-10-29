import React from 'react';
import { PanelLeft, Plus, Workflow, Bell, Search, Filter, ChevronDown, Play, X } from 'lucide-react';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';
import ableLogoSvg from '../assets/able-logo.svg';
import './Sidebar.css';

interface SimplifiedSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onWatchVideo?: () => void;
}

export const SimplifiedSidebar: React.FC<SimplifiedSidebarProps> = ({ 
  isOpen, 
  onToggle, 
  onWatchVideo 
}) => {
  const createMenu = useModal();
  const notifications = useModal();
  const newFolderModal = useModal();

  const handleCreateResearch = () => {
    createMenu.close();
    console.log('Creating new research');
  };

  const handleCreateFolder = () => {
    createMenu.close();
    newFolderModal.open();
  };

  const handleCreateFolderSubmit = () => {
    console.log('Creating folder');
    newFolderModal.close();
  };

  return (
    <>
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
              <button className="sidebar__toggle-button" onClick={onToggle} aria-label="Toggle sidebar">
                <PanelLeft size={20} />
              </button>
            </div>
          )}

          {isOpen && (
            <div className="sidebar__content">
              <div className="sidebar__nav">
                <button className="sidebar__menu-item sidebar__menu-item--create" onClick={createMenu.open}>
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
                <button className="sidebar__collapsed-toggle" onClick={onToggle} aria-label="Toggle sidebar">
                  <PanelLeft size={20} />
                </button>
                <button className="sidebar__collapsed-button sidebar__collapsed-button--primary" onClick={createMenu.open} aria-label="New chat">
                  <Plus size={16} />
                </button>
                <button className="sidebar__collapsed-button sidebar__collapsed-button--secondary" aria-label="Workflows">
                  <Workflow size={16} />
                </button>
              </div>
              <div className="sidebar__collapsed-account">
                <button className="sidebar__collapsed-notification" onClick={notifications.open} aria-label="Notifications">
                  <Bell size={16} />
                  <span className="sidebar__notification-badge sidebar__notification-badge--collapsed sidebar__notification-badge--dot sidebar__notification-badge--red"></span>
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
            <button className="sidebar__notification-button" onClick={notifications.open} aria-label="Notifications">
              <Bell size={24} />
              <span className="sidebar__notification-badge sidebar__notification-badge--dot sidebar__notification-badge--red"></span>
            </button>
          </div>
        )}
      </div>

      {/* Create Menu Modal */}
      <Modal
        isOpen={createMenu.isOpen}
        onClose={createMenu.close}
        title="Create New"
        size="sm"
        showCloseButton={false}
        className="sidebar__create-menu"
      >
        <div className="sidebar__create-menu-item" onClick={handleCreateResearch}>
          <div className="sidebar__create-menu-icon">
            <Workflow size={24} />
          </div>
          <span className="sidebar__create-menu-label">Research</span>
        </div>
        <div className="sidebar__create-menu-item" onClick={handleCreateFolder}>
          <div className="sidebar__create-menu-icon">
            <Workflow size={24} />
          </div>
          <span className="sidebar__create-menu-label">Folder</span>
        </div>
      </Modal>

      {/* New Folder Modal */}
      <Modal
        isOpen={newFolderModal.isOpen}
        onClose={newFolderModal.close}
        title="New folder"
        size="md"
      >
        <div className="sidebar__input-group">
          <label className="sidebar__input-label">Folder name</label>
          <input
            type="text"
            className="sidebar__input-field"
            placeholder="New folder"
            autoFocus
          />
        </div>
        <div className="sidebar__modal-footer">
          <button className="sidebar__modal-button sidebar__modal-button--secondary" onClick={newFolderModal.close}>
            Cancel
          </button>
          <button className="sidebar__modal-button sidebar__modal-button--primary" onClick={handleCreateFolderSubmit}>
            Create
          </button>
        </div>
      </Modal>

      {/* Notifications Modal */}
      <Modal
        isOpen={notifications.isOpen}
        onClose={notifications.close}
        title="Notifications (122)"
        size="lg"
      >
        <div className="sidebar__notifications-list">
          {/* Notification items would go here */}
          <p>Notifications content...</p>
        </div>
      </Modal>
    </>
  );
};
