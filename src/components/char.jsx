import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaTwitch, FaGlobe, FaCloud } from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "./char.css";

const socialMediaData = [
  {
    title: "Bluesky",
    platform: "Bluesky",
    link: "https://bsky.app/profile/did:plc:tdmjatp7aaxvqvxxyi6yxj7y",
    icon: FaCloud,
    color: "#0085FF",
    description: "Follow me on Bluesky",
  },
  {
    title: "YouTube",
    platform: "YouTube",
    link: "https://m.youtube.com/@DestinyNocturne",
    icon: FaYoutube,
    color: "#FF0000",
    description: "Subscribe to my channel",
  },
  {
    title: "Instagram",
    platform: "Instagram",
    link: "https://www.instagram.com/destinynocturne/",
    icon: FaInstagram,
    color: "#E4405F",
    description: "Follow my journey",
  },
  {
    title: "TikTok",
    platform: "TikTok",
    link: "https://www.tiktok.com/@destinynocturne?_t=ZP-8z42evIAjug&_r=1",
    icon: FaTiktok,
    color: "#000000",
    description: "Watch my videos",
  },
  {
    title: "Twitch",
    platform: "Twitch",
    link: "https://www.twitch.tv/destinynocturnettv",
    icon: FaTwitch,
    color: "#9146FF",
    description: "Join my streams",
  },
  {
    title: "Destiny Nocturne",
    platform: "Profile",
    link: "https://bsky.app/profile/destinynocturne.bsky.social",
    icon: FaGlobe,
    color: "#8A2BE2",
    description: "My main profile",
  },
];

const Char = () => {
  const handleCardClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="universe-section">
      <div className="universe-content">
        <h2 className="universe-title">Connect With Me</h2>
        <p className="universe-subtitle">Follow my journey across all platforms</p>

        <div className="slider-container">
        <Swiper
  modules={[Autoplay]}  // no Navigation now
  loop={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 15 }, // Mobile
    768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
    1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
  }}
  className="custom-swiper"
>

            {socialMediaData.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <SwiperSlide key={index}>
                  <div
                    className="social-card"
                    onClick={() => handleCardClick(social.link)}
                    style={{ "--card-color": social.color }}
                  >
                    <div className="card-content">
                      <div className="icon-container">
                        <IconComponent className="social-icon" />
                      </div>
                      <h3 className="card-title">{social.title}</h3>
                      <p className="card-description">{social.description}</p>
                      <div className="platform-badge">{social.platform}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Char;
