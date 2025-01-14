import React, { memo } from "react";
import { Link } from "react-router-dom";

// Preload critical content
const HERO_CONTENT = {
  main: "Fuel your preparation with the",
  highlight1: "PSC Newspapers",
  middle: "Magazines and PSC related News",
  highlight2: "– all in one place"
};

// Separate styled components for better performance and maintainability
const ButtonBase = memo(({ children, ...props }) => (
  <Link
    {...props}
    className="inline-block px-6 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors duration-200"
  >
    {children}
  </Link>
));

ButtonBase.displayName = 'ButtonBase';

// Memoized button components to prevent unnecessary re-renders
const PSCButton = memo(() => (
  <ButtonBase to="/news">PSC Resources</ButtonBase>
));

PSCButton.displayName = 'PSCButton';

const TelegramButton = memo(() => (
  <ButtonBase
    as="a"
    href="https://t.me/topicaleepaper"
    target="_blank"
    rel="noopener noreferrer"
  >
    Join Telegram
  </ButtonBase>
));

TelegramButton.displayName = 'TelegramButton';

const HeroBanner = memo(() => {
  return (
    <section className="bg-dark">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            <span className="block mb-2">{HERO_CONTENT.main}</span>
            <span className="block text-primary mb-2">
              {HERO_CONTENT.highlight1}
            </span>
            <span className="block mb-2 text-2xl md:text-3xl lg:text-4xl">
              {HERO_CONTENT.middle}
            </span>
            <span className="block text-primary text-2xl md:text-3xl lg:text-4xl">
              {HERO_CONTENT.highlight2}
            </span>
          </h1>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <PSCButton />
            <TelegramButton />
          </div>
        </div>
      </div>
    </section>
  );
});

HeroBanner.displayName = 'HeroBanner';

// Preload CSS variables
const style = document.createElement('style');
style.textContent = `
  :root {
    --primary: #007bff;
    --primary-dark: #0056b3;
  }
`;
document.head.appendChild(style);

export default HeroBanner;