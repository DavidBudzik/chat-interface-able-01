import React, { useRef, useState, useEffect } from 'react';
import closeIcon from '../assets/icons/Close.svg';
import playIcon from '../assets/icons/play.svg';
import thinkingVideo from '../assets/thinking-video.mp4';
import './VideoTutorial.css';

interface VideoTutorialProps {
  isOpen: boolean;
  onClose: () => void;
  onStart?: () => void; // Trigger walkthrough
  sidebarOpen?: boolean;
}

export const VideoTutorial: React.FC<VideoTutorialProps> = ({ isOpen, onClose, onStart, sidebarOpen = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // reset when closing
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`video-tutorial-overlay ${sidebarOpen ? 'video-tutorial-overlay--sidebar-open' : ''}`}
      onClick={onClose}
      role="dialog" aria-modal="true"
    >
      <div className="video-tutorial-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="video-tutorial__content">
          <div className="video-tutorial__header">
            <div className="video-tutorial__header-row">
              <h2 className="video-tutorial__title">Welcome to Able</h2>
              <button className="video-tutorial__close-inline" onClick={onClose} aria-label="Close tutorial">
                <img src={closeIcon} alt="Close" className="video-tutorial__icon" />
              </button>
            </div>
            <p className="video-tutorial__subtitle">Learn how to get started in 2 minutes</p>
          </div>

          <div className="video-tutorial__video-container">
            {/* Video element with dual source: uploaded file then fallback */}
            <video
              ref={videoRef}
              className={`video-tutorial__video ${isPlaying ? 'video-tutorial__video--visible' : ''}`}
              controls
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/tutorial-vide-placeholder.mp4" type="video/mp4" />
              <source src={thinkingVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay placeholder + play button */}
            {!isPlaying && (
              <div className="video-tutorial__video-placeholder" onClick={() => videoRef.current?.play()}>
                <button
                  className="video-tutorial__play-button"
                  aria-label="Play video"
                  onClick={() => videoRef.current?.play()}
                >
                  <img src={playIcon} alt="Play" className="video-tutorial__play-icon" />
                </button>
                <div className="video-tutorial__video-info">
                  <span className="video-tutorial__duration">2:30</span>
                </div>
              </div>
            )}
          </div>

          <div className="video-tutorial__footer">
            <button className="video-tutorial__skip-button" onClick={onClose}>
              Skip tutorial
            </button>
            <div className="video-tutorial__nav-buttons">
              <button className="video-tutorial__back-button video-tutorial__back-button--hidden" onClick={() => {}}>
                Back
              </button>
              <button className="video-tutorial__start-button" onClick={onStart || onClose}>
                Get the tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

