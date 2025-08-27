import React, { useRef, useEffect } from 'react';
import './MovieCredits.css';

const MovieCredits = () => {
  const creditsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video starts playing
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }

    // Remove all JavaScript scrolling logic - let CSS handle it
    // This prevents the "2 times para is scrolling" issue
  }, []);

  return (
    <div className="movie-credits-container">
      {/* Animated Background Elements */}
      <div className="credits-background">
        <div className="twinkling-stars"></div>
        <div className="moving-dots"></div>
        <div className="random-glow"></div>
      </div>

      {/* Left Side - Video Container */}
      <div className="video-section">
        <video
          className="credits-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          ref={videoRef}
        >
          <source src="/videos/girl.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right Side - Scrolling Credits */}
      <div className="credits-section">
        <div className="credits-container">
          <div className="credits-content" ref={creditsRef}>
            <h2>Movie Credits</h2>

            <div className="credit-category">
              <h3>Cast</h3>
              <p>Lead Actress - Sarah Johnson</p>
              <p>Supporting Actor - Michael Chen</p>
              <p>Villain - Robert Smith</p>
              <p>Hero - David Wilson</p>
              <p>Sidekick - Emma Davis</p>
            </div>

            <div className="credit-category">
              <h3>Crew</h3>
              <p>Director - Christopher Nolan</p>
              <p>Producer - Emma Thompson</p>
              <p>Screenwriter - Aaron Sorkin</p>
              <p>Cinematographer - Roger Deakins</p>
              <p>Editor - Lee Smith</p>
            </div>

            <div className="credit-category">
              <h3>Production</h3>
              <p>Production Company - Warner Bros.</p>
              <p>Executive Producer - Steven Spielberg</p>
              <p>Line Producer - Mary Johnson</p>
              <p>Production Designer - Rick Carter</p>
              <p>Costume Designer - Sandy Powell</p>
            </div>

            <div className="credit-category">
              <h3>Post-Production</h3>
              <p>Visual Effects - Industrial Light & Magic</p>
              <p>Sound Designer - Gary Rydstrom</p>
              <p>Composer - Hans Zimmer</p>
              <p>Colorist - Stefan Sonnenfeld</p>
              <p>Sound Mixer - Tom Johnson</p>
            </div>

            <div className="credit-category">
              <h3>Special Thanks</h3>
              <p>To all the amazing fans</p>
              <p>To our families and friends</p>
              <p>To everyone who believed in this project</p>
              <p>To the city of Los Angeles</p>
              <p>To the film industry</p>
            </div>

            <div className="credit-category">
              <h3>In Memory Of</h3>
              <p>John Smith - 1950-2023</p>
              <p>Mary Johnson - 1945-2022</p>
              <p>Robert Wilson - 1960-2021</p>
            </div>

            <div className="credit-category">
              <h3>Final Message</h3>
              <p>Thank you for watching</p>
              <p>This film was made with love</p>
              <p>For all the dreamers out there</p>
              <p>Keep believing in magic</p>
              <p>Until next time...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCredits;
