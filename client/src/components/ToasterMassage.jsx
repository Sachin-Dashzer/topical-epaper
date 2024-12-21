import React, { useEffect, useState } from "react";

const Toaster = ({ success, message, show, onClose }) => {
  const [active, setActive] = useState(show);

  useEffect(() => {
    if (show) {
      setActive(true);
      const timer = setTimeout(() => {
        setActive(false);
        if (onClose) onClose(); // Optional callback when toaster closes
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [show, onClose]);

  return (
    active && (
      <div
        className={`toaster shadow pe-2 ${
          !success ? "bg-primary text-white" : "bg-secondary"
        } ${show ? "activeToaster" : "deactiveToaster"}`}
      >
        <div className="w-100 p-3 px-4 pe-5 relative">
          <p className="text fontWeight700">{message}</p>
          <div className="cancelIcon" onClick={() => setActive(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    )
  );
};

export default Toaster;
