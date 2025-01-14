import React, { memo } from "react";
import { Link } from "react-router-dom";

// Preload critical content
const HERO_CONTENT = {
  main: "Fuel your preparation with the",
  highlight1: "PSC Newspapers",
  middle: "Magazines and PSC related News",
  highlight2: "– all in one place"
};

const HeroBanner = memo(() => {
  return (
    <section className="heroBanner p-0 bg-dark">
      <div className="heroBox">
        <div
          className="heroContent px-3 text-center"
          style={{
            // Inline critical styles for faster render
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem 1rem'
          }}
        >
          {/* Changed to h1 for better SEO and priority loading */}
          <h1 
            className="heading fontWeight800 mb-4"
            style={{
              // Inline critical styles
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
              // System font stack for faster initial render
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
            }}
          >
            {HERO_CONTENT.main}
            <br />
            <span 
              className="text-primary"
              style={{ display: 'inline-block', marginTop: '0.5rem' }}
            >
              {HERO_CONTENT.highlight1}
            </span>
            <br />
            <span 
              style={{ display: 'block', margin: '0.5rem 0' }}
            >
              {HERO_CONTENT.middle}
            </span>
            <span 
              className="text-primary"
              style={{ display: 'block' }}
            >
              {HERO_CONTENT.highlight2}
            </span>
          </h1>

          <div 
            className="bannerBtns d-flex align-items-center justify-content-center flex-wrap"
            style={{ gap: '1rem' }}
          >
            <Link 
              to="/news" 
              className="btnTheme"
              style={{
                // Inline critical button styles
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              PSC Resources
            </Link>
            <a
              href="https://t.me/topicaleepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="btnTheme"
              style={{
                // Inline critical button styles
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'var(--primary)',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 500
              }}
            >
              Join Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

export default HeroBanner;