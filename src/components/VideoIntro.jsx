import React, { useState, useEffect, useRef } from 'react';
import './VideoIntro.css';

const VideoIntro = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);

  useEffect(() => {
    // Start playing the video
    if (videoRef.current) {
      console.log('Video element found, attempting to play...');
      videoRef.current.play().then(() => {
        console.log('Video started playing successfully');
        setIsPlaying(true);
        setShowSkip(true);
      }).catch(error => {
        console.log('Video autoplay failed:', error);
        // Fallback: show skip button immediately
        setShowSkip(true);
      });
    } else {
      console.log('Video element not found');
    }

    // Start progress tracking
    progressIntervalRef.current = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        if (duration > 0) {
          const progressPercent = (currentTime / duration) * 100;
          setProgress(progressPercent);
        }
      }
    }, 100);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleVideoEnd = () => {
    // Video finished playing, transition to main website
    startTransition();
  };

  const handleSkip = () => {
    // User clicked skip, transition to main website
    startTransition();
  };

  const startTransition = () => {
    setIsTransitioning(true);
    // Wait for fade out animation, then call onComplete
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  const handleVideoLoad = () => {
    // Video loaded, start playing
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className={`video-intro ${isTransitioning ? 'fade-out' : ''}`}>
      {/* Background with animated elements */}
      <div className="intro-background">
        <div className="twinkling-stars"></div>
        <div className="moving-dots"></div>
        <div className="random-glow"></div>
      </div>

      {/* Intro Title - Now at the top */}
      <div className="intro-title">
        <h1>Welcome to My Desire</h1>
      </div>

      {/* Video Container */}
      <div className="video-container">
        <video
          ref={videoRef}
          className="intro-video"
          onEnded={handleVideoEnd}
          onLoadedData={handleVideoLoad}
          onError={(e) => {
            console.log('Video error:', e);
            setVideoError(true);
            setShowSkip(true);
          }}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          muted
          playsInline
          preload="metadata"
          controls={false}
        >
          <source src="/videos/girl.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay */}
        <div className="video-overlay">
          {/* Loading Text */}
          {!isPlaying && !videoError && (
            <div className="loading-text">
              Loading...
            </div>
          )}
          {/* Error Text */}
          {videoError && (
            <div className="error-text">
              Video not available
            </div>
          )}
        </div>

        {/* Skip Button - Inside video container, right bottom */}
        {showSkip && (
          <button 
            className="skip-button"
            onClick={handleSkip}
          >
            Skip Intro
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoIntro;
