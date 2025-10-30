import React from 'react';
import { Modal } from './Modal';
import { useModal } from '../hooks/useModal';
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
import predictiveReportsIcon from '../assets/icons/Predictive reports.svg';
import folderIcon from '../assets/icons/Folder.svg';
import fileSearchIcon from '../assets/icons/Search everywhere.svg';
import './Sidebar.css';

interface SimplifiedSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onWatchVideo?: () => void;
  onResetTutorial?: () => void;
}

export const SimplifiedSidebar: React.FC<SimplifiedSidebarProps> = ({ 
  isOpen, 
  onToggle, 
  onWatchVideo,
  onResetTutorial 
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
                <img src={sidebarIcon} alt="Toggle sidebar" className="sidebar__icon" />
              </button>
            </div>
          )}

          {isOpen && (
            <div className="sidebar__content">
              <div className="sidebar__nav">
                <div className="sidebar__buttons-group">
                  <button className="sidebar__menu-item sidebar__menu-item--create" onClick={createMenu.open}>
                    <div className="sidebar__menu-icon sidebar__menu-icon--red">
                      <img src={addIcon} alt="Create new" className="sidebar__icon-inline" />
                    </div>
                    <span className="sidebar__menu-label">Create new</span>
                  </button>

                  <button className="sidebar__workflows-button">
                    <img src={workflowIcon} alt="Workflow" className="sidebar__icon" />
                    <span>All workflows</span>
                  </button>

                  <button className="sidebar__menu-item">
                    <div className="sidebar__menu-icon">
                      <img 
                        src={predictiveReportsIcon} 
                        alt="Predictive Reports" 
                        className="sidebar__menu-icon-image"
                      />
                    </div>
                    <span className="sidebar__menu-label">Predictive Reports</span>
                  </button>
                </div>

                <div className="sidebar__search-item">
                  <div className="sidebar__search-content">
                    <img src={searchIcon} alt="Search" className="sidebar__search-icon" />
                    <span className="sidebar__search-placeholder">Search researches....</span>
                  </div>
                  <button className="sidebar__filter-button" aria-label="Filter">
                    <img src={filterIcon} alt="Filter" className="sidebar__icon" />
                  </button>
                </div>
              </div>

              <div className="sidebar__folders">
                <div className="sidebar__folders-header">
                  <span className="sidebar__folders-title">Folders</span>
                  <img src={chevronDownIcon} alt="Expand" className="sidebar__icon" />
                </div>
                <div className="sidebar__folders-content">
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
                        🔄 Reset Tutorial
                      </button>
                    )}
                  </div>
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
                <button className="sidebar__collapsed-toggle" onClick={onToggle} aria-label="Toggle sidebar">
                  <img src={sidebarIcon} alt="Toggle sidebar" className="sidebar__icon" />
                </button>
                <button className="sidebar__collapsed-button sidebar__collapsed-button--primary" onClick={createMenu.open} aria-label="New chat">
                  <img src={addIcon} alt="Create new" className="sidebar__icon" />
                </button>
                <button className="sidebar__collapsed-button sidebar__collapsed-button--secondary" aria-label="Workflows">
                  <img src={workflowIcon} alt="Workflows" className="sidebar__icon" />
                </button>
              </div>
              <div className="sidebar__collapsed-account">
                <button className="sidebar__collapsed-notification" onClick={notifications.open} aria-label="Notifications">
                  <img src={notificationsIcon} alt="Notifications" className="sidebar__icon" />
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
              <img src={notificationsIcon} alt="Notifications" className="sidebar__icon" />
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
            <img src={fileSearchIcon} alt="Research" className="sidebar__icon" />
          </div>
          <span className="sidebar__create-menu-label">Research</span>
        </div>
        <div className="sidebar__create-menu-item" onClick={handleCreateFolder}>
          <div className="sidebar__create-menu-icon">
            <img src={folderIcon} alt="Folder" className="sidebar__icon" />
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
