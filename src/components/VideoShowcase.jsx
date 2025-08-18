import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './VideoShowcase.css';

const VideoShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="video-showcase-container">
      {/* Random Star Glow Effect */}
      <div className="random-glow"></div>
      
      <div className="showcase-header">
        <h2>Video Showcase</h2>
        <p>Interactive video presentation with smooth animations</p>
      </div>

      <section className="video-section reveal-section">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="reveal-content"
        >
          <div className="content-layout">
            {/* Left Side - GIF */}
            <motion.div
              className="video-container reveal-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <img
                src="/videos/Scene1.gif"
                alt="Animated Scene"
                className="video-element"
              />
            </motion.div>

            {/* Right Side - Description */}
            <div className="description-container">
              <h3>Animated Scene</h3>
              <p>
                Experience this captivating animated scene that brings your content to life. 
                The smooth animations and dynamic elements create an engaging visual experience 
                that captures attention and enhances user interaction.
              </p>
              <div className="features">
                <div className="feature">
                  <span className="feature-icon">✨</span>
                  <span>Smooth Animations</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎬</span>
                  <span>High Quality</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🚀</span>
                  <span>Interactive</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default VideoShowcase;
