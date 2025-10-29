import React, { useState } from 'react';
import { X, Share2, MoreVertical, Check, List, GitPullRequest, FileText, Book, ChevronDown, Plus, ChevronLeft, Workflow, Package } from 'lucide-react';
import ableLogoIcon from '../assets/able-logo-icon.png';
import './TableSidebar.css';

interface TableSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  isEmpty?: boolean;
}

interface TableRow {
  id: string;
  name: string;
  company: string;
  sector: string;
  location: string;
  dealSize: string;
  status: string;
  selected: boolean;
}

const MOCK_TABLE_DATA: Omit<TableRow, 'selected'>[] = [
  { id: '1', name: 'Adidas AG', company: 'Adidas AG', sector: 'Consumer Goods', location: 'Germany', dealSize: '$2.1B', status: 'Active' },
  { id: '2', name: 'Nike Inc.', company: 'Nike Inc.', sector: 'Consumer Goods', location: 'USA', dealSize: '$15.2B', status: 'Active' },
  { id: '3', name: 'Puma SE', company: 'Puma SE', sector: 'Consumer Goods', location: 'Germany', dealSize: '$850M', status: 'Active' },
  { id: '4', name: 'Under Armour', company: 'Under Armour', sector: 'Consumer Goods', location: 'USA', dealSize: '$1.2B', status: 'Completed' },
  { id: '5', name: 'Reebok', company: 'Reebok', sector: 'Consumer Goods', location: 'USA', dealSize: '$3.8B', status: 'Active' },
  { id: '6', name: 'Converse', company: 'Converse', sector: 'Consumer Goods', location: 'USA', dealSize: '$305M', status: 'Active' },
  { id: '7', name: 'Vans', company: 'Vans', sector: 'Consumer Goods', location: 'USA', dealSize: '$396M', status: 'Active' },
  { id: '8', name: 'New Balance', company: 'New Balance', sector: 'Consumer Goods', location: 'USA', dealSize: '$4.7B', status: 'Active' },
];

type TabType = 'list' | 'domain-map' | 'domain-report' | 'knowledge';

export const TableSidebar: React.FC<TableSidebarProps> = ({ isOpen, onClose, isLoading = false, isEmpty = false }) => {
  const [selectedTab, setSelectedTab] = useState<TabType>('list');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [rows, setRows] = useState<TableRow[]>(
    isEmpty ? [] : MOCK_TABLE_DATA.map(row => ({ ...row, selected: false }))
  );

  const getTabIcon = (type: TabType) => {
    switch (type) {
      case 'list':
        return <List size={20} />;
      case 'domain-map':
        return <GitPullRequest size={20} />;
      case 'domain-report':
        return <FileText size={20} />;
      case 'knowledge':
        return <Book size={20} />;
      default:
        return <List size={20} />;
    }
  };

  const getTabLabel = (type: TabType) => {
    switch (type) {
      case 'list':
        return 'List';
      case 'domain-map':
        return 'Domain map';
      case 'domain-report':
        return 'Report';
      case 'knowledge':
        return 'Knowledge';
      default:
        return 'List';
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.size === rows.length) {
      setSelectedRows(new Set());
      setRows(prev => prev.map(row => ({ ...row, selected: false })));
    } else {
      const allIds = new Set(rows.map(row => row.id));
      setSelectedRows(allIds);
      setRows(prev => prev.map(row => ({ ...row, selected: true })));
    }
  };

  const handleSelectRow = (id: string) => {
    setSelectedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });

    setRows(prev =>
      prev.map(row =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };

  const allSelected = selectedRows.size === rows.length && rows.length > 0;
  const someSelected = selectedRows.size > 0 && selectedRows.size < rows.length;

  const tabTypes: TabType[] = ['list', 'domain-map', 'domain-report', 'knowledge'];

  return (
    <div className={`table-sidebar ${isOpen ? 'table-sidebar--open' : ''}`}>
      <div className="table-sidebar__container">
        {/* Header */}
        <div className="table-sidebar__header">
          <div className="table-sidebar__header-left">
            <div className="table-sidebar__tabs">
              {tabTypes.map((tabType) => (
                <button
                  key={tabType}
                  className={`table-sidebar__tab ${selectedTab === tabType ? 'table-sidebar__tab--active' : ''}`}
                  onClick={() => setSelectedTab(tabType)}
                >
                    <span className="table-sidebar__tab-icon">{getTabIcon(tabType)}</span>
                    <span className="table-sidebar__tab-label">{getTabLabel(tabType)}</span>
                  </button>
              ))}
            </div>
            <div className="table-sidebar__tab-actions">
              <button className="table-sidebar__icon-button table-sidebar__icon-button--add" aria-label="Add">
                <Plus size={20} />
              </button>
            </div>
          </div>
          <div className="table-sidebar__actions">
            <button className="table-sidebar__icon-button table-sidebar__icon-button--share" aria-label="Share">
              <Share2 size={20} />
            </button>
            <button className="table-sidebar__icon-button table-sidebar__icon-button--close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Back Button */}
        <button className="table-sidebar__back-button" onClick={onClose} aria-label="Back">
          <ChevronLeft size={16} />
        </button>

        {/* Toolbar */}
        <div className="table-sidebar__toolbar">
          <div className="table-sidebar__toolbar-left">
            <button className="table-sidebar__icon-button table-sidebar__icon-button--add" aria-label="Add">
              <Plus size={20} />
            </button>
            <div className="table-sidebar__toolbar-divider"></div>
            <div className="table-sidebar__toolbar-buttons">
              <button className="table-sidebar__toolbar-icon-button" aria-label="Action">
                <Workflow size={20} />
              </button>
              <button className="table-sidebar__toolbar-icon-button" aria-label="Action">
                <Workflow size={20} />
              </button>
              <button className="table-sidebar__toolbar-icon-button" aria-label="Action">
                <Workflow size={20} />
              </button>
            </div>
          </div>
          <div className="table-sidebar__toolbar-right">
            <button className="table-sidebar__dropdown-button">
              <span>Export</span>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="table-sidebar__loading">
            <div className="table-sidebar__loading-spinner">
              {/* Loading animation placeholder */}
            </div>
            <p className="table-sidebar__loading-text">Your list is loading...</p>
          </div>
        )}

        {/* Empty States for non-list tabs */}
        {!isLoading && selectedTab !== 'list' && (
          <div className="table-sidebar__empty">
            <div className="table-sidebar__empty-icon">
              <img src={ableLogoIcon} alt="Able" />
            </div>
            <p className="table-sidebar__empty-text">
              {selectedTab === 'domain-map' && 'No domain map available'}
              {selectedTab === 'domain-report' && 'No report available'}
              {selectedTab === 'knowledge' && 'No knowledge base available'}
            </p>
          </div>
        )}

        {/* Empty State for list tab */}
        {!isLoading && selectedTab === 'list' && rows.length === 0 && (
          <div className="table-sidebar__empty">
            <div className="table-sidebar__empty-icon">
              <img src={ableLogoIcon} alt="Able" />
            </div>
            <p className="table-sidebar__empty-text">No items to display</p>
          </div>
        )}

        {/* Table Content - only show for list tab */}
        {!isLoading && selectedTab === 'list' && rows.length > 0 && (
          <>
        {/* Bulk Action Panel */}
        {selectedRows.size > 0 && (
          <div className="table-sidebar__bulk-actions">
            <span className="table-sidebar__bulk-actions-text">
              {selectedRows.size} {selectedRows.size === 1 ? 'item' : 'items'} selected
            </span>
            <div className="table-sidebar__bulk-actions-buttons">
              <button className="table-sidebar__bulk-action-button">Export</button>
              <button className="table-sidebar__bulk-action-button">Delete</button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="table-sidebar__content">
          <div className="table-sidebar__table-wrapper">
            <table className="table-sidebar__table">
              <thead>
                <tr>
                  <th className="table-sidebar__th table-sidebar__th--checkbox">
                    <button
                      className="table-sidebar__checkbox-button"
                      onClick={handleSelectAll}
                      aria-label="Select all"
                    >
                      <div className={`table-sidebar__checkbox ${allSelected ? 'table-sidebar__checkbox--checked' : ''} ${someSelected ? 'table-sidebar__checkbox--indeterminate' : ''}`}>
                        {allSelected && <Check size={12} className="table-sidebar__checkbox-icon" strokeWidth={3} />}
                      </div>
                    </button>
                  </th>
                  <th className="table-sidebar__th">Name</th>
                  <th className="table-sidebar__th">Company</th>
                  <th className="table-sidebar__th">Sector</th>
                  <th className="table-sidebar__th">Location</th>
                  <th className="table-sidebar__th">Deal Size</th>
                  <th className="table-sidebar__th">Status</th>
                  <th className="table-sidebar__th table-sidebar__th--actions"></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.id}
                    className={`table-sidebar__row ${row.selected ? 'table-sidebar__row--selected' : ''}`}
                  >
                    <td className="table-sidebar__td table-sidebar__td--checkbox">
                      <button
                        className="table-sidebar__checkbox-button"
                        onClick={() => handleSelectRow(row.id)}
                        aria-label={`Select ${row.name}`}
                      >
                        <div className={`table-sidebar__checkbox ${row.selected ? 'table-sidebar__checkbox--checked' : ''}`}>
                          {row.selected && <Check size={12} className="table-sidebar__checkbox-icon" strokeWidth={3} />}
                        </div>
                      </button>
                    </td>
                    <td className="table-sidebar__td table-sidebar__td--name">{row.name}</td>
                    <td className="table-sidebar__td">{row.company}</td>
                    <td className="table-sidebar__td">{row.sector}</td>
                    <td className="table-sidebar__td">{row.location}</td>
                    <td className="table-sidebar__td">{row.dealSize}</td>
                    <td className="table-sidebar__td">
                      <span className={`table-sidebar__status table-sidebar__status--${row.status.toLowerCase()}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="table-sidebar__td table-sidebar__td--actions">
                      <button className="table-sidebar__row-action" aria-label="More options">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
  );
};

