import React, { useRef, useEffect } from 'react';
import thinkingVideo from '../assets/thinking-video.mp4';
import './ThinkingLoader.css';

interface ThinkingLoaderProps {
  isVisible: boolean;
}

export const ThinkingLoader: React.FC<ThinkingLoaderProps> = ({ isVisible }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video && isVisible) {
      // Set start time to 3 seconds to skip beginning, and 1 second from end
      const startTime = 3;
      let endTime = 0;
      let handleTimeUpdate: (() => void) | null = null;
      
      const setupLoop = () => {
        if (video) {
          endTime = video.duration - 1; // 1 second before end
          video.currentTime = startTime;
          
          handleTimeUpdate = () => {
            if (video && video.currentTime >= endTime) {
              video.currentTime = startTime;
            }
          };
          
          video.addEventListener('timeupdate', handleTimeUpdate);
          video.play().catch(console.error);
        }
      };
      
      if (video.readyState >= 1) {
        // Metadata already loaded
        setupLoop();
      } else {
        // Wait for metadata
        const handleLoadedMetadata = () => {
          setupLoop();
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }
      
      return () => {
        if (video && handleTimeUpdate) {
          video.removeEventListener('timeupdate', handleTimeUpdate);
        }
        if (video) {
          video.pause();
        }
      };
    } else if (video && !isVisible) {
      video.pause();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="thinking-loader">
      <video
        ref={videoRef}
        className="thinking-loader__video"
        src={thinkingVideo}
        playsInline
        muted
        autoPlay
        loop
      />
      <div className="thinking-loader__content">
        <div className="thinking-loader__text-wrapper">
          <div className="thinking-loader__skeleton-line thinking-loader__skeleton-line--1"></div>
          <div className="thinking-loader__skeleton-line thinking-loader__skeleton-line--2"></div>
          <div className="thinking-loader__skeleton-line thinking-loader__skeleton-line--3"></div>
        </div>
      </div>
    </div>
  );
};

