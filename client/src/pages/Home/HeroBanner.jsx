import React from "react";
import { Link } from "react-router-dom";

// Pre-define the content as a constant
const HERO_TEXT = {
  title: "Fuel your preparation with the PSC Newspapers",
  subtitle: "Magazines and PSC related News",
  tagline: "– all in one place"
};

// Create a separate styled component for the main heading
const MainHeading = React.memo(() => (
  <h1 
    // Use native HTML attributes for faster parsing
    className="hero-heading"
    dangerouslySetInnerHTML={{
      __html: `${HERO_TEXT.title} ${HERO_TEXT.subtitle} ${HERO_TEXT.tagline}`
    }}
  />
));

MainHeading.displayName = 'MainHeading';

const HeroBanner = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <MainHeading />
        
        <div className="hero-buttons">
          <Link to="/news" className="hero-button">
            PSC Resources
          </Link>
          <a
            href="https://t.me/topicaleepaper"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;