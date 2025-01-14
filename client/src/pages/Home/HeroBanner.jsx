// HeroBanner.jsx
import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";

// Prefetch component content
const prefetchContent = () => {
  // Vite's way of prefetching
  const newsLink = document.createElement('link');
  newsLink.rel = 'prefetch';
  newsLink.href = '/news';
  newsLink.as = 'document';
  document.head.appendChild(newsLink);
};

const HeroBanner = memo(() => {
  useEffect(() => {
    // Implement prefetching after component mounts
    prefetchContent();
    
    // Add font display swap
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'YourFontName';
        font-display: swap;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="heroBanner p-0 bg-dark">
      <div className="heroBox">
        <div
          className="heroContent px-3 text-center"
        >
          <h4 className="large_heading fontWeight800 mb-4">
            Fuel your preparation with the{' '}
            <br />
            <span className="text-primary">PSC Newspapers</span>,{' '}
            <br />
            <span className=" my-2">
              Magazines and PSC related News
            </span>
            <span className="text-primary d-block">
              – all in one place.
            </span>
          </h4>
          <div className="bannerBtns d-flex align-items-center justify-content-center flex-wrap gap-3">
            <Link 
              to="/news" 
              className="btnTheme"
            >
              <span className="text fontWeight400">PSC Resources</span>
            </Link>
            <a
              href="https://t.me/topicaleepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="btnTheme"
            >
              <span className="text fontWeight400">Join Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';
export default HeroBanner;

