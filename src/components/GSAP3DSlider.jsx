import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GSAP3DSlider.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GSAP3DSlider = () => {
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const textRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      image: '/images/sad.png',
      title: 'Superman',
      subtitle: 'The Man of Steel',
      description: 'A symbol of hope and justice in the DC Universe. With incredible strength and unwavering moral compass.',
      category: 'DC Comics'
    },
    {
      id: 2,
      image: '/images/happy.png',
      title: 'Superman Classic',
      subtitle: 'Iconic Hero',
      description: 'The classic hero in action! This iconic version has inspired generations with dedication to truth and justice.',
      category: 'DC Comics'
    },
    {
      id: 3,
      image: '/images/ang.png',
      title: 'Superman Modern',
      subtitle: 'Contemporary Legend',
      description: 'Modern take on the legend! A contemporary interpretation that brings Superman into the 21st century.',
      category: 'DC Comics'
    },
    {
      id: 4,
      image: '/images/img2.jpeg',
      title: 'DC Universe',
      subtitle: 'Epic Adventures',
      description: 'Explore the vast DC multiverse filled with legendary heroes, villains, and epic storylines.',
      category: 'DC Comics'
    },
    {
      id: 5,
      image: '/images/img1.jpeg',
      title: 'Fantasy World',
      subtitle: 'Magical Realms',
      description: 'Journey into mystical realms where magic and wonder await around every corner.',
      category: 'Fantasy'
    }
  ];

  useEffect(() => {
    initializeSlider();
    return () => {
      // Cleanup GSAP animations
      gsap.killTweensOf(slidesRef.current);
      gsap.killTweensOf(textRefs.current);
    };
  }, []);

  const initializeSlider = () => {
    const slides = slidesRef.current;
    const texts = textRefs.current;

    // Set initial positions
    gsap.set(slides, {
      scale: 0.8,
      opacity: 0.6,
      rotationY: -15,
      z: -200
    });

    // Set initial text states
    gsap.set(texts, {
      y: 50,
      opacity: 0,
      scale: 0.9
    });

    // Animate current slide to center
    animateToSlide(0);
  };

  const animateToSlide = (slideIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const slides = slidesRef.current;
    const texts = textRefs.current;
    const targetSlide = slides[slideIndex];
    const targetText = texts[slideIndex];

    // Animate all slides
    gsap.to(slides, {
      duration: 1.2,
      ease: "power2.inOut",
      scale: (i) => i === slideIndex ? 1 : 0.8,
      opacity: (i) => i === slideIndex ? 1 : 0.6,
      rotationY: (i) => i === slideIndex ? 0 : -15,
      z: (i) => i === slideIndex ? 0 : -200,
      stagger: 0.1
    });

    // Animate text reveal
    gsap.to(texts, {
      duration: 0.8,
      ease: "power2.out",
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.1
    });

    // Special animation for target slide text
    gsap.fromTo(targetText, 
      { 
        y: 100, 
        opacity: 0, 
        scale: 0.8,
        rotationX: -15
      },
      { 
        duration: 1,
        ease: "power2.out",
        y: 0, 
        opacity: 1, 
        scale: 1,
        rotationX: 0
      }
    );

    // Parallax effect on target slide image
    gsap.to(targetSlide.querySelector('.slide-image'), {
      duration: 1.2,
      ease: "power2.out",
      scale: 1.1,
      y: -20
    });

    // Reset other slide images
    slides.forEach((slide, i) => {
      if (i !== slideIndex) {
        gsap.to(slide.querySelector('.slide-image'), {
          duration: 0.8,
          ease: "power2.out",
          scale: 1,
          y: 0
        });
      }
    });

    setCurrentSlide(slideIndex);

    // Reset animation flag
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    animateToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    animateToSlide(prevIndex);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide && !isAnimating) {
      animateToSlide(index);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="gsap-3d-slider" ref={sliderRef}>
      <div className="random-glow"></div>
      <div className="slider-header">
        <h2>3D Cinematic Slider</h2>
        <p>Experience premium animations with GSAP-powered transitions</p>
      </div>

      <div className="slider-container">
        {/* Navigation Buttons */}
        <button 
          className="nav-btn prev-btn" 
          onClick={prevSlide}
          disabled={isAnimating}
        >
          <span>‹</span>
        </button>
        
        <button 
          className="nav-btn next-btn" 
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <span>›</span>
        </button>

        {/* Slides Container */}
        <div className="slides-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[index] = el)}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <div className="slide-image-container">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="slide-image"
                />
                <div className="slide-overlay"></div>
              </div>
              
              <div 
                className="slide-content"
                ref={(el) => (textRefs.current[index] = el)}
              >
                <div className="slide-category">{slide.category}</div>
                <h3 className="slide-title">{slide.title}</h3>
                <h4 className="slide-subtitle">{slide.subtitle}</h4>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default GSAP3DSlider;
