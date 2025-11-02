import React, { useState } from 'react';
import { X, ChevronRight, Database, TrendingUp, Building2, BarChart3, Sparkles, FileSearch, Check, Play, Plus } from 'lucide-react';

export default function AbleWalkthroughMockup() {
  const [walkthroughActive, setWalkthroughActive] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedUseCase, setSelectedUseCase] = useState(null);

  const walkthroughSteps = [
    {
      id: 'welcome',
      title: 'Getting Started',
      subtitle: 'with Workflows',
      sectionSubtitle: 'Introduction to Able',
      description: 'Able is a globally recognized research and analysis platform for corporate development, market intelligence, and investment decisions. Founded to streamline decision-making, the company has grown into one of the world's leading research tools.',
      additionalText: 'Watch this tutorial to learn how to create your first research project, organize your analysis, and collaborate with your team effectively.',
      type: 'video',
      mediaType: 'video'
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
          icon: Building2,
          title: 'Corporate Development',
          desc: 'M&A research, competitive intelligence, market sizing',
          color: '#E03500'
        },
        {
          id: 'market-research',
          icon: TrendingUp,
          title: 'Market Research',
          desc: 'Industry trends, customer insights, market mapping',
          color: '#0066FF'
        },
        {
          id: 'investment',
          icon: BarChart3,
          title: 'Investment Analysis',
          desc: 'Deal sourcing, due diligence, portfolio monitoring',
          color: '#00C48C'
        }
      ]
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
        'Target Company Profile'
      ]
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
        { name: 'Web Intel', type: 'Real-time news', active: true }
      ]
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
        { title: 'Cross-Reference', desc: 'Connect insights across entities and data' }
      ]
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
        'Connect data sources'
      ]
    }
  ];

  const currentStepData = walkthroughSteps[currentStep];

  const nextStep = () => {
    if (currentStep < walkthroughSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTutorial = () => {
    setWalkthroughActive(false);
  };

  const completeWalkthrough = () => {
    setWalkthroughActive(false);
  };

  const renderMediaContent = () => {
    switch (currentStepData.mediaType) {
      case 'video':
        return (
          <div className="w-full h-full bg-[#474747] flex items-center justify-center">
            <div className="w-24 h-16 bg-[#E03500] rounded-lg flex items-center justify-center">
              <Play size={32} className="text-white ml-1" />
            </div>
          </div>
        );
      
      case 'use-cases':
        return (
          <div className="w-full h-full bg-[#474747] flex items-center justify-center p-12">
            <div className="grid grid-cols-1 gap-4 w-full max-w-md">
              {currentStepData.useCases.map((useCase) => {
                const Icon = useCase.icon;
                const isSelected = selectedUseCase === useCase.id;
                return (
                  <button
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(useCase.id)}
                    className={`bg-[#2A2A2A] border-2 rounded-lg p-5 text-left transition-all ${
                      isSelected ? 'border-[#E03500] scale-105' : 'border-[#3A3A3A] hover:border-[#555]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: useCase.color + '20' }}
                      >
                        <Icon size={24} style={{ color: useCase.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{useCase.title}</h3>
                        <p className="text-gray-400 text-sm">{useCase.desc}</p>
                      </div>
                      {isSelected && (
                        <Check size={20} className="text-[#E03500] flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      
      case 'templates':
        return (
          <div className="w-full h-full bg-[#474747] flex items-center justify-center p-12">
            <div className="w-full max-w-md space-y-4">
              <button className="w-full bg-[#E03500] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#C22D00] transition-all font-medium">
                <Plus size={20} />
                New Research Project
              </button>
              <div className="space-y-3 pt-4">
                {currentStepData.templates.map((template, idx) => (
                  <button
                    key={idx}
                    className="w-full bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-4 text-left hover:border-[#E03500] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileSearch size={20} className="text-gray-400 group-hover:text-[#E03500]" />
                        <span className="text-white text-sm">{template}</span>
                      </div>
                      <ChevronRight size={18} className="text-gray-500 group-hover:text-[#E03500]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'sources':
        return (
          <div className="w-full h-full bg-[#474747] flex items-center justify-center p-12">
            <div className="w-full max-w-md space-y-4">
              {currentStepData.sources.map((source, idx) => (
                <div
                  key={idx}
                  className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Database size={24} className="text-[#E03500]" />
                    <div>
                      <h4 className="text-white font-medium text-sm">{source.name}</h4>
                      <p className="text-gray-400 text-xs">{source.type}</p>
                    </div>
                  </div>
                  {source.active && (
                    <Check size={18} className="text-[#00C48C]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'features':
        return (
          <div className="w-full h-full bg-[#474747] flex items-center justify-center p-12">
            <div className="w-full max-w-md space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E03500] to-[#FF6B3D] rounded-xl flex items-center justify-center mx-auto">
                <Sparkles size={32} className="text-white" />
              </div>
              <div className="space-y-4">
                {currentStepData.features.map((feature, idx) => (
                  <div key={idx} className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'completion':
        return (
          <div className="w-full h-full bg-[#474747] flex items-center justify-center p-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00C48C] to-[#00A076] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Check size={48} className="text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">You're All Set!</h2>
              <p className="text-gray-300 text-lg">Time to start researching</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (!walkthroughActive) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#232323] text-white">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-[#E03500] to-[#FF6B3D] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Walkthrough Complete!</h1>
          <p className="text-gray-400 mb-6">You're ready to start using Able.</p>
          <button
            onClick={() => {
              setWalkthroughActive(true);
              setCurrentStep(0);
              setSelectedUseCase(null);
            }}
            className="bg-[#E03500] text-white px-6 py-3 rounded hover:bg-[#C22D00] transition-colors"
          >
            Restart Walkthrough
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#232323] text-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-10 pt-6 pb-5">
        <div>
          <h1 className="text-[24px] font-light tracking-[-0.5px] leading-[32px] text-white mb-0">
            Welcome to Able
          </h1>
          <p className="text-[14px] text-[#a0a0a0] leading-[24px]">
            {currentStepData.sectionSubtitle}
          </p>
        </div>
        <button 
          onClick={skipTutorial}
          className="border border-[#2e2e2e] bg-[#000000] p-2 hover:bg-[#1a1a1a] transition-colors"
        >
          <X size={24} className="text-white" />
        </button>
      </div>

      {/* Main Content - Split Screen */}
      <div className="flex-1 flex border border-[#474747] mx-10 mb-5 overflow-hidden">
        {/* Left Side - Media/Interactive Content */}
        <div className="flex-1 bg-[#474747]">
          {renderMediaContent()}
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 bg-[#181818] flex flex-col p-10">
          {/* Progress Stepper */}
          <div className="flex gap-[6px] mb-6">
            {walkthroughSteps.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 ${
                  idx === currentStep ? 'bg-[#E03500]' : 'bg-[#474747]'
                }`}
              />
            ))}
          </div>

          {/* Title */}
          <h2 className="text-[24px] font-normal leading-[32px] text-white mb-6">
            {currentStepData.title}
            {currentStepData.subtitle && (
              <>
                <br />
                {currentStepData.subtitle}
              </>
            )}
          </h2>

          {/* Description Content */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="text-[14px] text-white leading-[24px]">
              <p className="mb-2">{currentStepData.description}</p>
              {currentStepData.additionalText && (
                <p>{currentStepData.additionalText}</p>
              )}
            </div>

            {/* Read More Button / Next Steps */}
            <div className="mt-auto">
              {currentStepData.type !== 'completion' && (
                <button className="border border-[#2e2e2e] px-3 py-2 text-[14px] text-white hover:bg-[#2a2a2a] transition-colors">
                  Read more
                </button>
              )}
              {currentStepData.type === 'completion' && currentStepData.nextSteps && (
                <div className="border border-[#2e2e2e] p-4 space-y-2">
                  <p className="text-[12px] text-[#a0a0a0] uppercase mb-3">Next Steps</p>
                  {currentStepData.nextSteps.map((step, idx) => (
                    <div key={idx} className="text-[14px] text-[#a0a0a0] flex items-center gap-2">
                      <span className="text-[#E03500]">•</span>
                      {step}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between px-10 pb-10">
        <button
          onClick={skipTutorial}
          className="border border-[#2e2e2e] px-3 py-2 text-[14px] text-white hover:bg-[#2a2a2a] transition-colors"
        >
          Skip tutorial
        </button>

        <div className="flex gap-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-3 py-2 text-[14px] text-white transition-colors ${
              currentStep === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#2a2a2a]'
            }`}
          >
            Back
          </button>
          <button
            onClick={currentStep === walkthroughSteps.length - 1 ? completeWalkthrough : nextStep}
            className="bg-[#E03500] px-3 py-2 text-[14px] text-white hover:bg-[#C22D00] transition-colors"
          >
            {currentStep === walkthroughSteps.length - 1 ? 'Get started' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
