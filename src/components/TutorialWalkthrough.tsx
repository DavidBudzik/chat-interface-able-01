import React, { useState } from 'react';
import { X } from 'lucide-react';
import './TutorialWalkthrough.css';
import ableLogo from '../assets/able-logo-icon.png';

interface TutorialWalkthroughProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TutorialStep {
  title: string;
  description: string;
  imageSrc: string;
  ctaHref?: string;
}

const STEPS: TutorialStep[] = [
  {
    title: 'Create your first research',
    description:
      'Start by describing what you are looking to explore in natural language. Use placeholders like {Company}, {Domain}, or {Region} to quickly adapt prompts across different targets and scenarios. Keep your initial request concise and goal-oriented for the best results. You can always refine the scope, add more context, or ask follow-up questions in subsequent messages. The AI will understand your intent and help you structure your research effectively.',
    imageSrc: ableLogo,
  },
  {
    title: 'Open the list panel',
    description:
      'Switch to the List tab to view, select, and manage your research results in a structured table format. Filter by company size, location, sector, or any other criteria to narrow down your findings. Sort columns to identify patterns and prioritize the most relevant results. Select multiple items at once using checkboxes to speed up your curation process. Use bulk actions to export selected items, move them to different folders, or apply tags for better organization. Everything stays perfectly synchronized with your chat context, so you can reference specific findings in your conversations.',
    imageSrc: ableLogo,
  },
  {
    title: 'Use domain map and reports',
    description:
      'Explore related entities and connections using the Domain map to uncover relationships you might have missed. This visual tool helps you understand how companies, people, and concepts are interconnected in your research area. Generate comprehensive reports with quick summaries, key insights, and actionable recommendations to align your team and stakeholders. These powerful tools help you validate your research direction quickly, identify knowledge gaps, and maintain consistent context as your investigation evolves. Use them to present findings professionally and make data-driven decisions.',
    imageSrc: ableLogo,
  },
  {
    title: 'Share with your team',
    description:
      'Invite collaborators and share lists, notes, and exports seamlessly across your organization. Add comments, annotations, and insights directly to your research findings to facilitate team discussions. Iterate on findings collaboratively, with full version history and change tracking to maintain an auditable research process. Export data in multiple formats (CSV, PDF, Excel) to integrate with your existing workflows. The goal is to move from initial exploration to actionable insights quickly and efficiently, ensuring your entire team stays aligned and informed throughout the research process.',
    imageSrc: ableLogo,
  },
];

export const TutorialWalkthrough: React.FC<TutorialWalkthroughProps> = ({ isOpen, onClose }) => {
  const [stepIndex, setStepIndex] = useState(0);

  if (!isOpen) return null;

  const goNext = () => setStepIndex((i) => Math.min(STEPS.length - 1, i + 1));
  const goBack = () => setStepIndex((i) => Math.max(0, i - 1));
  const goTo = (i: number) => setStepIndex(i);

  const step = STEPS[stepIndex];

  return (
    <div className="video-tutorial-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="video-tutorial-modal tutorial-walkthrough-modal" onClick={(e) => e.stopPropagation()}>

        <div className="video-tutorial__content">
          <div className="video-tutorial__header">
            <div className="video-tutorial__header-row">
              <h2 className="video-tutorial__title">Welcome to Able</h2>
              <button className="video-tutorial__close-inline" onClick={onClose} aria-label="Close tutorial">
                <X size={24} />
              </button>
            </div>
            <p className="video-tutorial__subtitle">Four simple steps to get productive</p>
          </div>

          <div className="video-tutorial__video-container">
            <div className="tw-body">
              <div className="tw-image">
              </div>
              <div className="tw-text">
                <h4 className="tw-step-title">{step.title}</h4>
                <p className="tw-step-desc">{step.description}</p>
                <button className="tw-read-more" onClick={() => window.open(step.ctaHref || '#', '_blank')}>Read more</button>
              </div>
            </div>
          </div>

          <div className="video-tutorial__footer">
            <button className="video-tutorial__skip-button" onClick={onClose}>Skip tutorial</button>
            <div className="video-tutorial__nav-buttons">
              {stepIndex > 0 && (
                <button className="video-tutorial__back-button" onClick={goBack}>
                  Back
                </button>
              )}
              <button className={`video-tutorial__start-button ${stepIndex === 0 ? 'video-tutorial__start-button--pulse' : ''}`} onClick={stepIndex === STEPS.length - 1 ? onClose : goNext}>
                {stepIndex === STEPS.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialWalkthrough;


