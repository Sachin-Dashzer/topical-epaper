import React, { useEffect, useState, memo, lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";

// Lazy load AOS for better initial load performance
const AOS = lazy(() => import('aos'));
import "aos/dist/aos.css";

// Import image with explicit width and height
const Logo = new URL('../assets/logo.png', import.meta.url).href;

const SocialLinks = memo(({ className = '' }) => (
  <ul className={`d-flex gap-4 ${className}`}>
    <li>
      <a href='https://t.me/topicaleepaper' target="_blank" rel="noopener noreferrer" className='title text-white'>
        <i className="fa-brands fa-telegram"></i>
      </a>
    </li>
    <li>
      <a href='https://www.youtube.com/@skullrockgaming7865' target="_blank" rel="noopener noreferrer" className='title text-white'>
        <i className="fa-brands fa-youtube"></i>
      </a>
    </li>
    <li>
      <a href='https://whatsapp.com/channel/0029VamePKH3QxRxg46zeW35' target="_blank" rel="noopener noreferrer" className='title text-white'>
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </li>
  </ul>
));

SocialLinks.displayName = 'SocialLinks';

const Header = memo(() => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuBox, setMenuBox] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Debounce scroll handler for better performance
    let timeoutId = null;
    
    const handleScroll = () => {
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }

      timeoutId = window.requestAnimationFrame(() => {
        const scrollPos = 100;
        const scrollTop = window.scrollY;

        setIsSticky(scrollTop > scrollPos);
        setShowScrollTop(scrollTop > scrollPos);
      });
    };

    // Initialize AOS with reduced motion preference check
    const initAOS = async () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion) {
        try {
          const AOSModule = await import('aos');
          AOSModule.init({
            once: true, // Initialize animations only once
            disable: 'mobile' // Disable on mobile for better performance
          });
        } catch (error) {
          console.error('AOS failed to load:', error);
        }
      }
    };

    initAOS();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        window.cancelAnimationFrame(timeoutId);
      }
    };
  }, []);

  const toggleMenu = () => setMenuBox(prev => !prev);

  const closeMenu = () => setMenuBox(false);

  return (
    <div>
      <header className={`stricky ${isSticky ? "stricky-fixed" : ""}`}>
        <div className="topHeader py-md-1 w-100">
          <p className="font-heading text-center">
            Stay ahead with exclusive newspapers, right when you need them.
          </p>
          <div className="navSocialLinks">
            <SocialLinks />
          </div>
        </div>
        
        <nav className='d-flex justify-content-between align-items-center'>
          <div className="logo">
            <h3 className="large-heading font-heading fontWeight800">
              <a href="/" className="text-white">
                <img 
                  src={Logo} 
                  loading="lazy" 
                  alt="Topical Epapers Logo"
                  width="150" 
                  height="50"
                  decoding="async"
                />
                Topical Epapers
              </a>
            </h3>
          </div>

          <div className="navLinks">
            <ul className='d-md-flex d-none gap-5'>
              {[
                { to: "/", text: "Home" },
                { to: "/news", text: "PSC Resources" },
                { to: "/updates", text: "PSC News" },
                // { to: "/blog", text: "PSC Blogs" },
                { to: "/about-us", text: "About" },
                { to: "/contact", text: "Contact us" }
              ].map(({ to, text }) => (
                <li key={to}>
                  <NavLink 
                    to={to} 
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div onClick={toggleMenu} className="small_heading d-md-none">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </nav>
      </header>

      <div className={`${menuBox ? '' : 'active'} offCanvasBox bg-light shadow`}>
        <div className="offcanvas-header">
          <div className="w-100 d-flex px-3 py-4 justify-content-between">
            <h4 className="small_heading font-heading">
              <a href="/" className="text-light fontWeight800">
                <img 
                  src={Logo} 
                  loading="lazy" 
                  alt="Topical Epapers Logo"
                  width="150" 
                  height="50"
                  decoding="async"
                />
                Topical Epapers
              </a>
            </h4>
            <div 
              className="sub_heading text-light pe-2" 
              onClick={closeMenu}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>

        <div className="offcanvas-body">
          <ul className='py-4 px-4'>
            {[
              { to: "/", text: "Home" },
              { to: "/news", text: "PSC Resources" },
              { to: "/updates", text: "PSC News" },
              { to: "/blog", text: "PSC Blogs" },
              { to: "/about-us", text: "About" },
              { to: "/contact", text: "Request us" }
            ].map(({ to, text }) => (
              <li key={to}>
                <NavLink
                  onClick={closeMenu}
                  to={to}
                  className='text-dark small_heading fontWeight700 mt-3'
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="offcavas-footer bg-primary py-4 position-absolute w-100 bottom-0">
          <SocialLinks className="ps-4 pb-1" />
        </div>
      </div>
    </div>
  );
});

Header.displayName = 'Header';
export default Header;