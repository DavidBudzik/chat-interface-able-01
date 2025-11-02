import React, { useState } from 'react';
import './TutorialWalkthrough.css';
import closeIcon from '../assets/icons/Close.svg';
import playIcon from '../assets/icons/play.svg';
import addIcon from '../assets/icons/Add.svg';
import checkIcon from '../assets/icons/Confirmation.svg';
import listIcon from '../assets/icons/List.svg';
import graphIcon from '../assets/icons/Graph-widget.svg';
import shareIcon from '../assets/icons/Share.svg';
import chevronRightIcon from '../assets/icons/Chevron right.svg';
import workflowIcon from '../assets/icons/Workflow.svg';

interface TutorialWalkthroughProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TutorialStep {
  id: string;
  title: string;
  subtitle: string;
  sectionSubtitle: string;
  description: string;
  additionalText?: string;
  type: 'video' | 'use-case-selection' | 'interactive-demo' | 'data-sources' | 'feature-highlight' | 'completion';
  mediaType: 'video' | 'use-cases' | 'templates' | 'sources' | 'features' | 'completion';
  useCases?: Array<{
    id: string;
    icon: string;
    title: string;
    desc: string;
    color: string;
  }>;
  templates?: string[];
  sources?: Array<{
    name: string;
    type: string;
    active: boolean;
  }>;
  features?: Array<{
    title: string;
    desc: string;
  }>;
  nextSteps?: string[];
}

const STEPS: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'Getting Started',
    subtitle: 'with Workflows',
    sectionSubtitle: 'Introduction to Able',
    description: 'Able is a globally recognized research and analysis platform for corporate development, market intelligence, and investment decisions. Founded to streamline decision-making, the company has grown into one of the world\'s leading research tools.',
    additionalText: 'Watch this tutorial to learn how to create your first research project, organize your analysis, and collaborate with your team effectively.',
    type: 'video',
    mediaType: 'video',
  },
  {
    id: 'use-case',
    title: 'What brings you',
    subtitle: 'to Able?',
    sectionSubtitle: 'Choose your primary use case',
    description: 'This helps us personalize your experience and show you the most relevant features for your role.',
    type: 'use-case-selection',
    mediaType: 'use-cases',
    useCases: [
      {
        id: 'corp-dev',
        icon: workflowIcon,
        title: 'Corporate Development',
        desc: 'M&A research, competitive intelligence, market sizing',
        color: '#E03500',
      },
      {
        id: 'market-research',
        icon: listIcon,
        title: 'Market Research',
        desc: 'Industry trends, customer insights, market mapping',
        color: '#0066FF',
      },
      {
        id: 'investment',
        icon: graphIcon,
        title: 'Investment Analysis',
        desc: 'Deal sourcing, due diligence, portfolio monitoring',
        color: '#00C48C',
      },
    ],
  },
  {
    id: 'first-research',
    title: 'Create Your First',
    subtitle: 'Research Project',
    sectionSubtitle: 'Start with a template or from scratch',
    description: 'Research projects help you organize data collection, analysis, and collaboration around a specific question or decision.',
    additionalText: 'Click the "New Research" button to open a workspace. Choose from templates or start from scratch to build your research.',
    type: 'interactive-demo',
    mediaType: 'templates',
    templates: [
      'Competitive Intelligence Report',
      'Market Entry Analysis',
      'Target Company Profile',
    ],
  },
  {
    id: 'data-sources',
    title: 'Connect Your',
    subtitle: 'Data Sources',
    sectionSubtitle: 'Leverage proprietary and alternative data',
    description: 'Able connects to 50+ data sources including MathLabs DB, Factset, Moody\'s, and your proprietary datasets.',
    additionalText: 'Access institutional-grade data across global markets, proprietary signals, and real-time intelligence—all in one place.',
    type: 'data-sources',
    mediaType: 'sources',
    sources: [
      { name: 'MathLabs DB', type: 'Proprietary signals', active: true },
      { name: 'Factset', type: 'Market data', active: true },
      { name: 'Moody\'s', type: 'Credit analytics', active: true },
      { name: 'Web Intel', type: 'Real-time news', active: true },
    ],
  },
  {
    id: 'ai-insights',
    title: 'Generate AI-Powered',
    subtitle: 'Insights',
    sectionSubtitle: 'From data to decisions in minutes',
    description: 'Our proprietary NLP engine analyzes your data to surface non-obvious patterns, generate custom signals, and accelerate decision-making.',
    additionalText: 'Turn weeks of analysis into minutes with AI-powered summaries, signal detection, and cross-reference analysis.',
    type: 'feature-highlight',
    mediaType: 'features',
    features: [
      { title: 'Smart Summaries', desc: 'Auto-generate executive summaries from any source' },
      { title: 'Signal Detection', desc: 'Identify emerging trends and opportunities' },
      { title: 'Cross-Reference', desc: 'Connect insights across entities and data' },
    ],
  },
  {
    id: 'ready',
    title: 'You\'re Ready',
    subtitle: 'to Start',
    sectionSubtitle: 'Time to create value',
    description: 'You now have everything you need to accelerate your research and decision-making with Able.',
    additionalText: 'Explore resources and start building your first research project today.',
    type: 'completion',
    mediaType: 'completion',
    nextSteps: [
      'Create your first research project',
      'Invite team members',
      'Explore template library',
      'Connect data sources',
    ],
  },
];

export const TutorialWalkthrough: React.FC<TutorialWalkthroughProps> = ({ isOpen, onClose }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);

  if (!isOpen) return null;

  const goNext = () => setStepIndex((i) => Math.min(STEPS.length - 1, i + 1));
  const goBack = () => setStepIndex((i) => Math.max(0, i - 1));

  const currentStepData = STEPS[stepIndex];

  const renderMediaContent = () => {
    switch (currentStepData.mediaType) {
      case 'video':
        return (
          <div className="tw-media-content tw-media-video">
            <img src={playIcon} alt="Play video" className="tw-play-button" />
          </div>
        );

      case 'use-cases':
        return (
          <div className="tw-media-content tw-media-use-cases">
            <div className="tw-use-cases-grid">
              {currentStepData.useCases?.map((useCase) => {
                const isSelected = selectedUseCase === useCase.id;
                return (
                  <button
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(useCase.id)}
                    className={`tw-use-case-card ${isSelected ? 'tw-use-case-card--selected' : ''}`}
                    style={{ '--case-color': useCase.color } as React.CSSProperties}
                  >
                    <div className="tw-use-case-icon-wrapper">
                      <img src={useCase.icon} alt="" className="tw-use-case-icon" />
                    </div>
                    <div className="tw-use-case-content">
                      <h3 className="tw-use-case-title">{useCase.title}</h3>
                      <p className="tw-use-case-desc">{useCase.desc}</p>
                    </div>
                    {isSelected && <img src={checkIcon} alt="Selected" className="tw-use-case-check" />}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'templates':
        return (
          <div className="tw-media-content tw-media-templates">
            <div className="tw-templates-container">
              <button className="tw-new-research-button">
                <img src={addIcon} alt="Add" className="tw-button-icon" />
                New Research Project
              </button>
              <div className="tw-templates-list">
                {currentStepData.templates?.map((template, idx) => (
                  <button key={idx} className="tw-template-card">
                    <div className="tw-template-content">
                      <img src={listIcon} alt="" className="tw-template-icon" />
                      <span className="tw-template-name">{template}</span>
                    </div>
                    <img src={chevronRightIcon} alt="" className="tw-chevron-icon" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'sources':
        return (
          <div className="tw-media-content tw-media-sources">
            <div className="tw-sources-container">
              {currentStepData.sources?.map((source, idx) => (
                <div key={idx} className="tw-source-card">
                  <div className="tw-source-content">
                    <img src={workflowIcon} alt="" className="tw-source-icon" />
                    <div className="tw-source-info">
                      <h4 className="tw-source-name">{source.name}</h4>
                      <p className="tw-source-type">{source.type}</p>
                    </div>
                  </div>
                  {source.active && <img src={checkIcon} alt="Active" className="tw-source-check" />}
                </div>
              ))}
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="tw-media-content tw-media-features">
            <div className="tw-features-container">
              <div className="tw-features-icon-wrapper">
                <img src={workflowIcon} alt="Features" className="tw-features-icon" />
              </div>
              <div className="tw-features-list">
                {currentStepData.features?.map((feature, idx) => (
                  <div key={idx} className="tw-feature-card">
                    <h3 className="tw-feature-title">{feature.title}</h3>
                    <p className="tw-feature-desc">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'completion':
        return (
          <div className="tw-media-content tw-media-completion">
            <div className="tw-completion-container">
              <div className="tw-completion-icon-wrapper">
                <img src={checkIcon} alt="Complete" className="tw-completion-icon" />
              </div>
              <h2 className="tw-completion-title">You're All Set!</h2>
              <p className="tw-completion-subtitle">Time to start researching</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="video-tutorial-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="video-tutorial-modal tutorial-walkthrough-modal" onClick={(e) => e.stopPropagation()}>
        <div className="video-tutorial__content">
          <div className="video-tutorial__header">
            <div className="video-tutorial__header-row">
              <div>
                <h2 className="video-tutorial__title">Welcome to Able</h2>
                <p className="video-tutorial__subtitle">{currentStepData.sectionSubtitle}</p>
              </div>
              <button className="video-tutorial__close-inline" onClick={onClose} aria-label="Close tutorial">
                <img src={closeIcon} alt="Close" className="video-tutorial__icon" />
              </button>
            </div>
          </div>

          <div className="video-tutorial__video-container">
            <div className="tw-body">
              <div className="tw-image">
                {renderMediaContent()}
              </div>
              <div className="tw-text">
                <div className="tw-progress-dots">
                  {STEPS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`tw-progress-dot ${idx === stepIndex ? 'tw-progress-dot--active' : ''}`}
                    />
                  ))}
                </div>

                <h2 className="tw-step-title">
                  {currentStepData.title}
                  {currentStepData.subtitle && (
                    <>
                      <br />
                      {currentStepData.subtitle}
                    </>
                  )}
                </h2>

                <div className="tw-step-content">
                  <p>{currentStepData.description}</p>
                  {currentStepData.additionalText && <p>{currentStepData.additionalText}</p>}
                </div>

                {currentStepData.type !== 'completion' && (
                  <button className="tw-read-more">Read more</button>
                )}

                {currentStepData.type === 'completion' && currentStepData.nextSteps && (
                  <div className="tw-next-steps">
                    <p className="tw-next-steps-label">Next Steps</p>
                    {currentStepData.nextSteps.map((step, idx) => (
                      <div key={idx} className="tw-next-step-item">
                        <span className="tw-next-step-bullet">•</span>
                        {step}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="video-tutorial__footer">
            <button className="video-tutorial__skip-button" onClick={onClose}>
              Skip tutorial
            </button>
            <div className="video-tutorial__nav-buttons">
              <button
                className="video-tutorial__back-button"
                onClick={goBack}
                disabled={stepIndex === 0}
              >
                Back
              </button>
              <button
                className={`video-tutorial__start-button ${stepIndex === 0 ? 'video-tutorial__start-button--pulse' : ''}`}
                onClick={stepIndex === STEPS.length - 1 ? onClose : goNext}
              >
                {stepIndex === STEPS.length - 1 ? 'Get started' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialWalkthrough;


