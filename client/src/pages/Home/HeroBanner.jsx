import React from "react";
import poster from "../../assets/call-to-aciton.webp";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="heroBox">
        {/* Optimized the video placeholder to lazy load */}
        <div className="heroVideo">
          <div className="video">
            <img
              src={poster}
              loading="lazy"
              alt="Hero Banner Placeholder"
              width="100%"
              height="auto"
              style={{ display: "block" }}
            />
          </div>
        </div>

        <div
          className="heroContent pt-5 pt-md-0 px-3"
          data-aos-delay="300"
          data-aos="fade-up"
        >
          <h1 className="large_heading fontWeight800">
            "Fuel your preparation with the <br />
            <span className="text-primary">PSC Newspapers</span>, <br />
            Magazines and PSC related News <br />
            <span className="text-primary"> – all in one place.</span>"
          </h1>

          <div className="bannerBtns d-flex align-items-center justify-content-center">
            <a href="/news" className="btnTheme mx-md-3">
              <span className="text fontWeight400">PSC Resources</span>
            </a>
            <a
              href="https://t.me/topicaleepaper"
              target="_blank"
              rel="noopener noreferrer"
              className="btnTheme mx-3"
            >
              <span className="text fontWeight400">Join Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
