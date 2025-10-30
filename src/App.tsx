import { useState, useRef, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Logo } from './components/Logo';
import { ChatInput } from './components/ChatInput';
import { ActionButtons } from './components/ActionButtons';
import { VideoTutorial } from './components/VideoTutorial';
import ChatBoxContainer from './components/ChatBoxContainer';
import { TableSidebar } from './components/TableSidebar';
import { TutorialWalkthrough } from './components/TutorialWalkthrough';
import './App.css';

const TUTORIAL_SEEN_KEY = 'able_tutorial_seen';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasStartedChat, setHasStartedChat] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'user',
      content: 'Find Companies in {Domain} Based in {Region} With {Criteria}',
      timestamp: new Date()
    },
    {
      id: '2',
      type: 'assistant',
      content: "Could you tell me which specific sector you're interested in, what type of buyer you have in mind (e.g., strategic, financial), and what deal size range you'd like to focus on (e.g., over $50M, under $10M)? Once I have those details, I can help you find the transactions you're looking for.",
      timestamp: new Date()
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [tableSidebarOpen, setTableSidebarOpen] = useState(true);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  
  // Mock suggestion data - can be replaced with real data
  const suggestions = ['Analyze nike Across asia', 'Find companies in tech', 'Search for recent deals'];

  useEffect(() => {
    // Check if user is new (hasn't seen tutorial before)
    const hasSeenTutorial = localStorage.getItem(TUTORIAL_SEEN_KEY);
    if (!hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, []);

  const handleOptionSelect = (option: string) => {
    setInputValue(option);
    setShowOptions(null);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleChatStart = () => {
    if (!inputValue.trim()) return;
    
    setHasStartedChat(true);
    setSidebarOpen(false);
    
    const userInput = inputValue;
    setInputValue('');
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: userInput,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsThinking(true);
    
    // Simulate AI thinking delay (8 seconds for demo)
    const thinkingTime = 8000;
    
    setTimeout(() => {
      // Add assistant response after thinking
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "Could you tell me which specific sector you're interested in, what type of buyer you have in mind (e.g., strategic, financial), and what deal size range you'd like to focus on (e.g., over $50M, under $10M)? Once I have those details, I can help you find the transactions you're looking for.",
        timestamp: new Date()
      };
      
      setIsThinking(false);
      setMessages(prev => [...prev, assistantMessage]);
      // Show table sidebar after AI response
      setTableSidebarOpen(true);
    }, thinkingTime);
  };

  const handleChatReset = () => {
    setHasStartedChat(false);
    setMessages([]);
    setInputValue('');
    setIsThinking(false);
    setTableSidebarOpen(false);
  };

  const handleClearMessages = () => {
    setMessages([]);
    setInputValue('');
    setIsThinking(false);
  };

  const handleBackToHome = () => {
    setHasStartedChat(false);
    setSidebarOpen(true);
    setTableSidebarOpen(false);
  };

  const handleCloseTutorial = () => {
    setShowTutorial(false);
    localStorage.setItem(TUTORIAL_SEEN_KEY, 'true');
  };

  const handleOpenTutorial = () => {
    setShowTutorial(true);
  };

  const handleResetTutorial = () => {
    localStorage.removeItem(TUTORIAL_SEEN_KEY);
    setShowTutorial(true);
    console.log('Tutorial reset - localStorage cleared');
  };

  // Developer helper: Press Ctrl+Shift+R to reset tutorial
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        localStorage.removeItem(TUTORIAL_SEEN_KEY);
        setShowTutorial(true);
        console.log('Tutorial reset - will show again');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={`app-container ${tableSidebarOpen ? 'app-container--table-sidebar-open' : ''}`}>
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onWatchVideo={handleOpenTutorial}
        onResetTutorial={import.meta.env.DEV ? handleResetTutorial : undefined}
      />
      
      <main className={`main-content ${hasStartedChat ? 'main-content--chat-started' : ''} ${tableSidebarOpen ? 'main-content--table-sidebar-open' : ''} ${sidebarOpen ? 'main-content--sidebar-expanded' : ''}`}>
        {hasStartedChat ? (
          <ChatBoxContainer
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSend={handleChatStart}
            disabled={!inputValue.trim() || isThinking}
            messages={messages}
            onHomeClick={handleBackToHome}
            onClearChat={handleClearMessages}
            isThinking={isThinking}
            onOpenList={() => setTableSidebarOpen(true)}
            tableSidebarOpen={tableSidebarOpen}
          />
        ) : (
          <div className="chat-box" ref={chatBoxRef}>
            <Logo />
            <ChatInput 
              value={inputValue} 
              onChange={setInputValue} 
              onChatStart={handleChatStart} 
            />
            <ActionButtons 
              activeButton={showOptions}
              onButtonClick={setShowOptions}
              onOptionSelect={handleOptionSelect}
            />
          </div>
        )}
      </main>
      <VideoTutorial 
        isOpen={showTutorial} 
        onClose={handleCloseTutorial}
        onStart={() => { setShowTutorial(false); setShowWalkthrough(true); }}
        sidebarOpen={sidebarOpen}
      />

      <TutorialWalkthrough 
        isOpen={showWalkthrough}
        onClose={() => setShowWalkthrough(false)}
      />
      
      <TableSidebar 
        isOpen={tableSidebarOpen}
        onClose={() => setTableSidebarOpen(false)}
        isLoading={isThinking}
        isEmpty={false}
      />
      
    </div>
  );
}

export default App;
