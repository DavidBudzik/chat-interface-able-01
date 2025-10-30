import React, { useState, useRef, useEffect } from 'react';
import ableLogoIcon from '../assets/able-logo-icon.png';
import listIcon from '../assets/icons/List.svg';
import domainMapIcon from '../assets/icons/Dependency.svg';
import reportIcon from '../assets/icons/Graph-widget.svg';
import knowledgeIcon from '../assets/icons/knowledge.svg';
import addIcon from '../assets/icons/Add.svg';
import shareIcon from '../assets/icons/Share.svg';
import closeIcon from '../assets/icons/Close.svg';
import chevronLeftIcon from '../assets/icons/Chevron left.svg';
import menuIcon from '../assets/icons/Menu.svg';
import exploreIcon from '../assets/icons/Explore.svg';
import columnsIcon from '../assets/icons/Columns.svg';
import chevronDownIcon from '../assets/icons/Chevron down.svg';
import filterIcon from '../assets/icons/Filter.svg';
import searchIcon from '../assets/icons/Search.svg';
import confirmationIcon from '../assets/icons/Confirmation.svg';
import rerunIcon from '../assets/icons/Rerun.svg';
import playIcon from '../assets/icons/play.svg';
import addToListIcon from '../assets/icons/Add to list.svg';
import deleteIcon from '../assets/icons/Delete.svg';
import expandIcon from '../assets/icons/Expand.svg';
import moreOptionsIcon from '../assets/icons/Add.svg';
import websiteIcon from '../assets/icons/Website.svg';
import linkedinIcon from '../assets/icons/Linkedin.svg';
import crunchbaseIcon from '../assets/icons/Crunchbase.svg';
import deleteIconSmall from '../assets/icons/Delete.svg';
import rerunIconSmall from '../assets/icons/Rerun.svg';
import { CreateDialog } from './CreateDialog';

// Import company logos
import adobeLogo from '../assets/logo-icons/adobe.svg';
import airbnbLogo from '../assets/logo-icons/airbnb.svg';
import amazonLogo from '../assets/logo-icons/amazon.svg';
import angelListLogo from '../assets/logo-icons/angel_list.svg';
import asanaLogo from '../assets/logo-icons/asana.svg';
import askfmLogo from '../assets/logo-icons/askfm.svg';
import atlassianLogo from '../assets/logo-icons/atlassian.svg';
import basecampLogo from '../assets/logo-icons/basecamp.svg';
import confluenceLogo from '../assets/logo-icons/confluence.svg';
import coubLogo from '../assets/logo-icons/coub.png';
import css3Logo from '../assets/logo-icons/css_3.svg';
import facebookLogo from '../assets/logo-icons/Facebook.png';
import framerLogo from '../assets/logo-icons/framer.png';
import githubLogo from '../assets/logo-icons/github.svg';
import googlePlayLogo from '../assets/logo-icons/google_play.svg';
import kickstarterLogo from '../assets/logo-icons/kickstarter.png';
import marvelLogo from '../assets/logo-icons/marvel.png';
import okLogo from '../assets/logo-icons/OK.png';
import safariLogo from '../assets/logo-icons/safari.png';
import stumbleUponLogo from '../assets/logo-icons/stumble_upon.png';
import torLogo from '../assets/logo-icons/tor.png';
import yandexLogo from '../assets/logo-icons/yandex.png';

import './TableSidebar.css';

interface TableSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  isEmpty?: boolean;
}

interface CompanyData {
  id: string;
  company: {
    name: string;
    icon: string; // Can be text or image path
    iconType?: 'image' | 'text'; // Type of icon
    color: string;
  };
  offerings: {
    oneLiner: string;
    industries: string;
  };
  financial: {
    peerRevenue: {
      rank: number;
      grade: 'A' | 'B' | 'C' | 'D';
    };
    stage: string;
    recentFunding: string;
  };
  basics: {
    employees: string;
    hq: string;
    region: string;
    yearFounded: number;
  };
  other: {
    source: {
      name: string;
      reference: string;
    };
    customText: string;
  };
  selected: boolean;
}

// Generate 50 rows of sample data
const generateSampleData = (): Omit<CompanyData, 'selected'>[] => {
  const companies = [
    { name: 'Adobe', icon: adobeLogo, iconType: 'image' as const, color: '#FF0000' },
    { name: 'Airbnb', icon: airbnbLogo, iconType: 'image' as const, color: '#FF5A5F' },
    { name: 'Amazon', icon: amazonLogo, iconType: 'image' as const, color: '#FF9900' },
    { name: 'Angel List', icon: angelListLogo, iconType: 'image' as const, color: '#000000' },
    { name: 'Asana', icon: asanaLogo, iconType: 'image' as const, color: '#F06A6A' },
    { name: 'Ask.fm', icon: askfmLogo, iconType: 'image' as const, color: '#DB3552' },
    { name: 'Atlassian', icon: atlassianLogo, iconType: 'image' as const, color: '#0052CC' },
    { name: 'Basecamp', icon: basecampLogo, iconType: 'image' as const, color: '#1D2D35' },
    { name: 'Confluence', icon: confluenceLogo, iconType: 'image' as const, color: '#172B4D' },
    { name: 'Coub', icon: coubLogo, iconType: 'image' as const, color: '#FF7700' },
    { name: 'CSS3', icon: css3Logo, iconType: 'image' as const, color: '#1572B6' },
    { name: 'Facebook', icon: facebookLogo, iconType: 'image' as const, color: '#1877F2' },
    { name: 'Framer', icon: framerLogo, iconType: 'image' as const, color: '#0055FF' },
    { name: 'GitHub', icon: githubLogo, iconType: 'image' as const, color: '#181717' },
    { name: 'Google Play', icon: googlePlayLogo, iconType: 'image' as const, color: '#4185F4' },
    { name: 'Kickstarter', icon: kickstarterLogo, iconType: 'image' as const, color: '#05CE78' },
    { name: 'Marvel', icon: marvelLogo, iconType: 'image' as const, color: '#ED1D24' },
    { name: 'OK', icon: okLogo, iconType: 'image' as const, color: '#EE8208' },
    { name: 'Safari', icon: safariLogo, iconType: 'image' as const, color: '#000000' },
    { name: 'StumbleUpon', icon: stumbleUponLogo, iconType: 'image' as const, color: '#EB4924' },
    { name: 'Tor', icon: torLogo, iconType: 'image' as const, color: '#7D4698' },
    { name: 'Yandex', icon: yandexLogo, iconType: 'image' as const, color: '#FC3F1D' },
  ];

  const industries = ['Automotive', 'Technology', 'Energy', 'FinTech', 'Healthcare', 'Cloud Services', 'Food & Beverage', 'Manufacturing', 'EdTech', 'Security', 'Retail', 'Aerospace', 'Logistics', 'Entertainment', 'Agriculture'];
  const stages = ['Seed', 'Series A', 'Series B', 'Series C', 'Self funded', 'IPO'];
  const hqLocations = ['USA', 'UK', 'Germany', 'Singapore', 'Canada', 'Ireland', 'Australia', 'Japan', 'India', 'Israel', 'France', 'Sweden', 'Netherlands', 'Switzerland', 'Spain'];
  const regions = ['North America', 'Europe', 'Asia', 'Asia-Pacific', 'Middle East', 'Latin America', 'Africa'];
  const sources = ['Querry', 'Direct', 'Report', 'Public'];
  const customTexts = ['Enterprise focus', 'Expanding', 'Fast growing', 'HIPAA certified', 'SOC2 certified', 'Regional leader', 'Market leader', '10M+ users', 'ISO certified', 'Award winning', '', 'Innovation hub', 'Series funded', 'Revenue positive'];

  const data: Omit<CompanyData, 'selected'>[] = [];
  
  for (let i = 0; i < 50; i++) {
    const company = companies[i % companies.length];
    const industry = industries[Math.floor(Math.random() * industries.length)];
    const stage = stages[Math.floor(Math.random() * stages.length)];
    const hq = hqLocations[Math.floor(Math.random() * hqLocations.length)];
    const region = regions[Math.floor(Math.random() * regions.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const customText = customTexts[Math.floor(Math.random() * customTexts.length)];
    
    const rank = Math.floor(Math.random() * 30) + 1;
    const grade = rank <= 8 ? 'A' : rank <= 18 ? 'B' : rank <= 25 ? 'C' : 'D';
    
    const fundingAmounts = ['2M', '5M', '8M', '12M', '15M', '20M', '25M', '35M', '45M', '50M', '120M'];
    const funding = fundingAmounts[Math.floor(Math.random() * fundingAmounts.length)];
    
    const employeeRanges = ['11-50', '51-100', '101-250', '251-500', '501-1000', '1000+'];
    const employees = employeeRanges[Math.floor(Math.random() * employeeRanges.length)];
    
    const year = Math.floor(Math.random() * 25) + 1998;
    
    const oneLiners = [
      'Comprehensive coating technology for electrodes',
      'AI-powered logistics optimization platform',
      'Renewable energy infrastructure and consulting',
      'Real-time data processing for financial markets',
      'Healthcare SaaS for patient management systems',
      'Multi-cloud infrastructure management platform',
      'B2B food distribution and supply chain network',
      'Industrial automation and robotics solutions',
      'Online education and skill development courses',
      'Cybersecurity solutions for enterprise networks',
      'Financial technology platform for digital payments',
      'Biotechnology research and pharmaceutical development',
      'Smart grid technology for energy distribution',
      'Autonomous vehicle software and hardware systems',
      'E-commerce platform for retail businesses',
      'Aerospace engineering and satellite technology',
      'Supply chain management and logistics software',
      'Virtual and augmented reality content creation',
      'Blockchain infrastructure and cryptocurrency solutions',
      'Agricultural technology and precision farming',
    ];
    const oneLiner = oneLiners[i % oneLiners.length] || oneLiners[0];

    data.push({
      id: (i + 1).toString(),
      company: {
        name: `${company.name}${i >= companies.length ? ` ${Math.floor(i / companies.length) + 1}` : ''}`,
        icon: company.icon,
        iconType: company.iconType || 'text',
        color: company.color,
      },
      offerings: {
        oneLiner,
        industries: industry,
      },
      financial: {
        peerRevenue: {
          rank,
          grade,
        },
        stage,
        recentFunding: funding,
      },
      basics: {
        employees,
        hq,
        region,
        yearFounded: year,
      },
      other: {
        source: {
          name: source,
          reference: `#${Math.floor(Math.random() * 4) + 1}`,
        },
        customText,
      },
    });
  }

  return data;
};

const MOCK_TABLE_DATA = generateSampleData();

type TabType = 'list' | 'domain-map' | 'domain-report' | 'knowledge';

export const TableSidebar: React.FC<TableSidebarProps> = ({ isOpen, onClose, isLoading = false, isEmpty = false }) => {
  const [selectedTab, setSelectedTab] = useState<TabType>('list');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [rows, setRows] = useState<CompanyData[]>(
    isEmpty ? [] : MOCK_TABLE_DATA.map(row => ({ ...row, selected: false }))
  );
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const addButtonRef = useRef<HTMLButtonElement>(null);
  const addMenuRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipTriggerRef = useRef<HTMLDivElement>(null);
  const [addToListMenuOpen, setAddToListMenuOpen] = useState(false);
  const addToListMenuRef = useRef<HTMLDivElement>(null);
  const addToListButtonRef = useRef<HTMLButtonElement>(null);
  const [createListModalOpen, setCreateListModalOpen] = useState(false);

  // Row action menu (opened from Add icon on hover)
  const [rowMenu, setRowMenu] = useState<{
    rowId: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setRowMenu(null);
    };
    const onDocClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest?.('.table-sidebar__row-menu')) setRowMenu(null);
    };
    if (rowMenu) {
      document.addEventListener('keydown', onEsc);
      document.addEventListener('mousedown', onDocClick);
    }
    return () => {
      document.removeEventListener('keydown', onEsc);
      document.removeEventListener('mousedown', onDocClick);
    };
  }, [rowMenu]);

  // Run menu (attached to "Run" button in bulk actions)
  const [runMenuOpen, setRunMenuOpen] = useState(false);
  const runMenuRef = useRef<HTMLDivElement>(null);
  const runButtonRef = useRef<HTMLButtonElement>(null);

  const getTabIcon = (type: TabType) => {
    switch (type) {
      case 'list':
        return <img src={listIcon} alt="List" className="table-sidebar__icon" />;
      case 'domain-map':
        return <img src={domainMapIcon} alt="Domain map" className="table-sidebar__icon" />;
      case 'domain-report':
        return <img src={reportIcon} alt="Report" className="table-sidebar__icon" />;
      case 'knowledge':
        return <img src={knowledgeIcon} alt="Knowledge" className="table-sidebar__icon" />;
      default:
        return <img src={listIcon} alt="List" className="table-sidebar__icon" />;
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

  // Get selected companies for bulk actions display
  const selectedCompanies = rows.filter(row => row.selected);
  const visibleCompanies = selectedCompanies.slice(0, 10);
  const remainingCount = selectedCompanies.length - 10;

  // Handle click outside for Add dropdown menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        addMenuRef.current &&
        !addMenuRef.current.contains(event.target as Node) &&
        addButtonRef.current &&
        !addButtonRef.current.contains(event.target as Node)
      ) {
        setAddMenuOpen(false);
      }
    }

    if (addMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [addMenuOpen]);

  // Handle click outside for Add to List dropdown menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        addToListMenuRef.current &&
        !addToListMenuRef.current.contains(event.target as Node) &&
        addToListButtonRef.current &&
        !addToListButtonRef.current.contains(event.target as Node)
      ) {
        setAddToListMenuOpen(false);
      }
    }

    if (addToListMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [addToListMenuOpen]);

  // Handle click outside for Run dropdown menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        runMenuRef.current &&
        !runMenuRef.current.contains(event.target as Node) &&
        runButtonRef.current &&
        !runButtonRef.current.contains(event.target as Node)
      ) {
        setRunMenuOpen(false);
      }
    }

    if (runMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [runMenuOpen]);

  // Handle tooltip visibility
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        tooltipTriggerRef.current &&
        !tooltipTriggerRef.current.contains(event.target as Node)
      ) {
        setTooltipVisible(false);
      }
    }

    if (tooltipVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [tooltipVisible]);

  const handleAddClick = () => {
    setAddMenuOpen(!addMenuOpen);
  };

  const handleAddCompany = () => {
    setAddMenuOpen(false);
    console.log('Add Company clicked');
    // TODO: Implement add company functionality
  };

  const handleAddColumn = () => {
    setAddMenuOpen(false);
    console.log('Add Column clicked');
    // TODO: Implement add column functionality
  };

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
                <img src={menuIcon} alt="Menu" className="table-sidebar__icon" />
              </button>
            </div>
          </div>
          <div className="table-sidebar__actions">
            <button className="table-sidebar__icon-button table-sidebar__icon-button--share" aria-label="Share">
              <img src={shareIcon} alt="Share" className="table-sidebar__icon" />
            </button>
            <button className="table-sidebar__icon-button table-sidebar__icon-button--close" onClick={onClose} aria-label="Close">
              <img src={closeIcon} alt="Close" className="table-sidebar__icon" />
            </button>
          </div>
        </div>

        {/* Back Button */}
        <button className="table-sidebar__back-button" onClick={onClose} aria-label="Back">
          <img src={chevronLeftIcon} alt="Back" className="table-sidebar__icon-small" />
        </button>

        {/* Toolbar */}
        <div className="table-sidebar__toolbar">
          <div className="table-sidebar__toolbar-left">
            <div className="table-sidebar__add-button-container">
              <button 
                ref={addButtonRef}
                className="table-sidebar__icon-button table-sidebar__icon-button--add" 
                aria-label="Add"
                onClick={handleAddClick}
              >
                <img src={addIcon} alt="Add" className="table-sidebar__icon" />
              </button>
              {addMenuOpen && (
                <div ref={addMenuRef} className="table-sidebar__add-dropdown">
                  <button 
                    className="table-sidebar__add-dropdown-item"
                    onClick={handleAddCompany}
                  >
                    <img src={exploreIcon} alt="Add Company" className="table-sidebar__add-dropdown-icon" />
                    <span className="table-sidebar__add-dropdown-text">Add Company</span>
                  </button>
                  <button 
                    className="table-sidebar__add-dropdown-item"
                    onClick={handleAddColumn}
                  >
                    <img src={columnsIcon} alt="Add Column" className="table-sidebar__add-dropdown-icon" />
                    <span className="table-sidebar__add-dropdown-text">Add Column</span>
                  </button>
                </div>
              )}
            </div>
            <div className="table-sidebar__toolbar-buttons">
              <div className="table-sidebar__toolbar-divider"></div>
              <button className="table-sidebar__toolbar-icon-button" aria-label="Filter">
                <img src={filterIcon} alt="Filter" className="table-sidebar__icon" />
              </button>
              <button className="table-sidebar__toolbar-icon-button" aria-label="Columns">
                <img src={columnsIcon} alt="Columns" className="table-sidebar__icon" />
              </button>
              <button className="table-sidebar__toolbar-icon-button" aria-label="Search">
                <img src={searchIcon} alt="Search" className="table-sidebar__icon" />
              </button>
            </div>
          </div>
          <div className="table-sidebar__toolbar-right">
            <button className="table-sidebar__dropdown-button">
              <span>Export</span>
              <img src={chevronDownIcon} alt="Expand" className="table-sidebar__icon" />
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
        {/* Table */}
        <div className={`table-sidebar__content ${selectedRows.size > 0 ? 'table-sidebar__content--has-bulk-actions' : ''}`}>
          <div className="table-sidebar__table-wrapper">
            {/* Two-tier header */}
            <div className="table-sidebar__table-header">
              {/* Primary Header Row */}
              <div className="table-sidebar__header-row-primary">
                <div className="table-sidebar__header-cell table-sidebar__header-cell--sticky">
                  <button
                    className="table-sidebar__checkbox-button"
                    onClick={handleSelectAll}
                    aria-label="Select all"
                  >
                    <div className={`table-sidebar__checkbox ${allSelected ? 'table-sidebar__checkbox--checked' : ''} ${someSelected ? 'table-sidebar__checkbox--indeterminate' : ''}`}>
                      {allSelected && <span className="table-sidebar__checkbox-checkmark"></span>}
                      {someSelected && !allSelected && <div className="table-sidebar__checkbox-indeterminate-mark"></div>}
                    </div>
                  </button>
                  <span className="table-sidebar__header-company-label">Company name ({rows.length})</span>
                </div>
                <div className="table-sidebar__header-group table-sidebar__header-group--offerings">
                  Offerings
                </div>
                <div className="table-sidebar__header-group table-sidebar__header-group--financial">
                  Financial
                </div>
                <div className="table-sidebar__header-group table-sidebar__header-group--basics">
                  Basics
                </div>
                <div className="table-sidebar__header-group table-sidebar__header-group--other">
                  Other
                </div>
              </div>

              {/* Secondary Header Row */}
              <div className="table-sidebar__header-row-secondary">
                <div className="table-sidebar__header-cell table-sidebar__header-cell--sticky"></div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-260">One liner</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-200">Industries</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-200">Peer based revenues</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-150">Stage</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-150">Recent Funding</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-140">Employees</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-140">HQ</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-140">Region</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-140">Year founded</div>
                <div className="table-sidebar__header-cell table-sidebar__header-cell--w-210">Source</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="table-sidebar__table-body">
              {rows.map((row) => (
                <div
                  key={row.id}
                  className={`table-sidebar__table-row ${row.selected ? 'table-sidebar__table-row--selected' : ''}`}
                >
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--sticky">
                    <div className="table-sidebar__company-cell">
                      <button
                        className="table-sidebar__checkbox-button table-sidebar__checkbox-button--row"
                        onClick={() => handleSelectRow(row.id)}
                        aria-label={`Select ${row.company.name}`}
                      >
                        <div className={`table-sidebar__checkbox ${row.selected ? 'table-sidebar__checkbox--checked' : ''}`}>
                          {row.selected && <span className="table-sidebar__checkbox-checkmark"></span>}
                        </div>
                      </button>
                      {/* eslint-disable-next-line react/forbid-dom-props */}
                      <div 
                        className="table-sidebar__company-icon" 
                        style={{ '--company-color': row.company.color } as React.CSSProperties}
                      >
                        {row.company.iconType === 'image' ? (
                          <img src={row.company.icon} alt={row.company.name} className="table-sidebar__company-icon-img" />
                        ) : (
                          row.company.icon
                        )}
                      </div>
                      <span className="table-sidebar__company-name">{row.company.name}</span>
                      
                      {/* Hover Icons */}
                      <div className="table-sidebar__company-hover-icons">
                        <button
                          className="table-sidebar__hover-icon-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle expand action
                            console.log('Expand clicked for', row.company.name);
                          }}
                          aria-label={`Expand ${row.company.name}`}
                        >
                          <img src={expandIcon} alt="Expand" className="table-sidebar__hover-icon" />
                        </button>
                        <button
                          className="table-sidebar__hover-icon-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle more options action
                            const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                            setRowMenu({ rowId: row.id, x: rect.left, y: rect.bottom + 6 });
                          }}
                          aria-label={`More options for ${row.company.name}`}
                        >
                          <img src={moreOptionsIcon} alt="More options" className="table-sidebar__hover-icon" />
                        </button>
                      </div>
                      {rowMenu?.rowId === row.id && (
                        <div
                          className="table-sidebar__row-menu"
                          style={{ left: rowMenu.x, top: rowMenu.y }}
                          role="menu"
                          aria-label={`Row actions for ${row.company.name}`}
                        >
                          <button className="table-sidebar__row-menu-item" role="menuitem">
                            <img src={websiteIcon} alt="Website" className="table-sidebar__row-menu-icon" />
                            <span>Go to website</span>
                          </button>
                          <button className="table-sidebar__row-menu-item" role="menuitem">
                            <img src={linkedinIcon} alt="LinkedIn" className="table-sidebar__row-menu-icon" />
                            <span>Go to Linkedin</span>
                          </button>
                          <button className="table-sidebar__row-menu-item" role="menuitem">
                            <img src={crunchbaseIcon} alt="Crunchbase" className="table-sidebar__row-menu-icon" />
                            <span>Go to Crunchbase</span>
                          </button>
                          <div className="table-sidebar__row-menu-sep" />
                          <button className="table-sidebar__row-menu-item" role="menuitem">
                            <img src={deleteIconSmall} alt="Delete" className="table-sidebar__row-menu-icon" />
                            <span>Delete</span>
                          </button>
                          <button className="table-sidebar__row-menu-item" role="menuitem">
                            <img src={rerunIconSmall} alt="Rerun" className="table-sidebar__row-menu-icon" />
                            <span>Rerun company info</span>
                          </button>
                          <button className="table-sidebar__row-menu-item" role="menuitem">
                            <img src={rerunIconSmall} alt="Rerun all" className="table-sidebar__row-menu-icon" />
                            <span>Rerun all companies info</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-260">
                    <span className="table-sidebar__text-truncate">{row.offerings.oneLiner}</span>
                  </div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-200">{row.offerings.industries}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-200">
                    <div className="table-sidebar__revenue-cell">
                      <div className="table-sidebar__revenue-indicator"></div>
                      <span>{row.financial.peerRevenue.rank}</span>
                      <div className="table-sidebar__revenue-badge">{row.financial.peerRevenue.grade}</div>
                    </div>
                  </div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-150">{row.financial.stage}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-150">{row.financial.recentFunding}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-140">{row.basics.employees}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-140">{row.basics.hq}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-140">{row.basics.region}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-140">{row.basics.yearFounded}</div>
                  <div className="table-sidebar__table-cell table-sidebar__table-cell--w-210">
                    <div className="table-sidebar__source-cell">
                      <span>{row.other.source.name}</span>
                      <div className="table-sidebar__source-badge">{row.other.source.reference}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bulk Action Panel */}
          {selectedRows.size > 0 && (
            <div className="table-sidebar__bulk-actions visible">
              <div className="table-sidebar__bulk-left">
                <div className="table-sidebar__selection-indicator">
                  <span className="table-sidebar__selection-count">
                    <strong>{selectedRows.size}</strong> {selectedRows.size === 1 ? 'Company' : 'Companies'} selected
                  </span>
                  {selectedRows.size === 1 && (() => {
                    const selectedRow = rows.find(row => row.selected);
                    return selectedRow ? (
                      <>
                        <div className="table-sidebar__bulk-separator"></div>
                        <div className="table-sidebar__bulk-company-info">
                    {/* eslint-disable-next-line react/forbid-dom-props */}
                    <div 
                      className="table-sidebar__bulk-company-icon" 
                      style={{ '--company-color': selectedRow.company.color } as React.CSSProperties}
                    >
                      {selectedRow.company.iconType === 'image' ? (
                        <img src={selectedRow.company.icon} alt={selectedRow.company.name} className="table-sidebar__bulk-company-icon-img" />
                      ) : (
                        selectedRow.company.icon
                      )}
                    </div>
                          <span className="table-sidebar__bulk-company-name">{selectedRow.company.name}</span>
                        </div>
                      </>
                    ) : null;
                  })()}
                  {selectedRows.size > 1 && (
                    <>
                      <div className="table-sidebar__bulk-separator"></div>
                      <div 
                        className="table-sidebar__bulk-companies-list"
                        ref={tooltipTriggerRef}
                        onMouseEnter={() => setTooltipVisible(true)}
                        onMouseLeave={() => setTooltipVisible(false)}
                      >
                        <div className="table-sidebar__bulk-companies-icons">
                    {visibleCompanies.map((company) => (
                      <div
                        key={company.id}
                        className="table-sidebar__bulk-company-icon-small"
                        /* eslint-disable-next-line react/forbid-dom-props */
                        style={{ '--company-color': company.company.color } as React.CSSProperties}
                      >
                        {company.company.iconType === 'image' ? (
                          <img src={company.company.icon} alt={company.company.name} className="table-sidebar__bulk-company-icon-img" />
                        ) : (
                          company.company.icon
                        )}
                      </div>
                    ))}
                          {remainingCount > 0 && (
                            <div className="table-sidebar__bulk-more-pill">
                              +{remainingCount}
                            </div>
                          )}
                        </div>
                        {tooltipVisible && selectedCompanies.length > 0 && (
                          <div className="table-sidebar__bulk-tooltip" ref={tooltipRef}>
                            <div className="table-sidebar__bulk-tooltip-content">
                              {selectedCompanies.map((company) => (
                                <div
                                  key={company.id}
                                  className="table-sidebar__bulk-tooltip-icon-wrapper"
                                  title={company.company.name}
                                >
                                  {/* eslint-disable-next-line react/forbid-dom-props */}
                                  <div 
                                    className="table-sidebar__bulk-tooltip-icon" 
                                    style={{ '--company-color': company.company.color } as React.CSSProperties}
                                  >
                                    {company.company.iconType === 'image' ? (
                                      <img src={company.company.icon} alt={company.company.name} className="table-sidebar__bulk-tooltip-icon-img" />
                                    ) : (
                                      company.company.icon
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="table-sidebar__bulk-right">
                <div className="table-sidebar__bulk-action-wrapper">
                <button 
                  ref={runButtonRef}
                  className="table-sidebar__bulk-action-button"
                  onClick={() => setRunMenuOpen(!runMenuOpen)}
                >
                  <img src={rerunIcon} alt="Run" className="table-sidebar__bulk-icon" />
                  Run
                </button>
                {runMenuOpen && (
                  <div ref={runMenuRef} className="table-sidebar__add-dropdown table-sidebar__add-dropdown--bulk">
                    <button
                      className="table-sidebar__add-dropdown-item"
                      onClick={() => {
                        setRunMenuOpen(false);
                        // TODO: Implement fill empty cells action
                      }}
                    >
                      <img src={playIcon} alt="Fill empty cells" className="table-sidebar__add-dropdown-icon" />
                      <span className="table-sidebar__add-dropdown-text">Fill empty cells</span>
                    </button>
                    <button
                      className="table-sidebar__add-dropdown-item"
                      onClick={() => {
                        setRunMenuOpen(false);
                        // TODO: Implement rerun all columns action
                      }}
                    >
                      <img src={rerunIcon} alt="Rerun all columns" className="table-sidebar__add-dropdown-icon" />
                      <span className="table-sidebar__add-dropdown-text">Rerun all columns</span>
                    </button>
                  </div>
                )}
                </div>
                <div className="table-sidebar__bulk-action-wrapper">
                  <button 
                    ref={addToListButtonRef}
                    className="table-sidebar__bulk-action-button"
                    onClick={() => setAddToListMenuOpen(!addToListMenuOpen)}
                  >
                    <img src={addToListIcon} alt="Add to list" className="table-sidebar__bulk-icon" />
                    Add to list
                  </button>
                  {addToListMenuOpen && (
                    <div ref={addToListMenuRef} className="table-sidebar__add-dropdown table-sidebar__add-dropdown--bulk">
                      <button
                        className="table-sidebar__add-dropdown-item"
                        onClick={() => {
                          setAddToListMenuOpen(false);
                          // Handle add to existing list
                        }}
                      >
                        <img src={exploreIcon} alt="Add to existing list" className="table-sidebar__add-dropdown-icon" />
                        <span className="table-sidebar__add-dropdown-text">Add to existing list</span>
                      </button>
                      <button
                        className="table-sidebar__add-dropdown-item"
                        onClick={() => {
                          setAddToListMenuOpen(false);
                          setCreateListModalOpen(true);
                        }}
                      >
                        <img src={addIcon} alt="Create new list" className="table-sidebar__add-dropdown-icon" />
                        <span className="table-sidebar__add-dropdown-text">Create new list</span>
                      </button>
                    </div>
                  )}
                </div>
                <button 
                  className="table-sidebar__bulk-action-button table-sidebar__bulk-action-button--danger"
                  aria-label="Delete selected companies"
                >
                  <img src={deleteIcon} alt="Delete" className="table-sidebar__bulk-icon" />
                </button>
                <button 
                  className="table-sidebar__bulk-close-button"
                  onClick={() => {
                    setSelectedRows(new Set());
                    setRows(prev => prev.map(row => ({ ...row, selected: false })));
                  }}
                  aria-label="Clear selection"
                >
                  <img src={closeIcon} alt="Close" className="table-sidebar__bulk-icon" />
                </button>
              </div>
            </div>
          )}
        </div>
        </>
        )}
      </div>

      {/* Create New List Modal */}
      <CreateDialog
        isOpen={createListModalOpen}
        onClose={() => setCreateListModalOpen(false)}
        title="Company List Name"
        label="Company list name"
        placeholder="Company list name"
        onSubmit={(listName) => {
          // Handle create list logic
          console.log('Creating list:', listName);
        }}
        submitButtonText="Create"
        cancelButtonText="Cancel"
      />
    </div>
  );
};

