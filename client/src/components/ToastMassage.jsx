import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
// import './ToastStyles.css'; // Import the SCSS styles for the toasts

const Toasts = ({ message, status, duration = 3000 }) => {
  const [toasts, setToasts] = useState([]);

  // Function to handle the SweetAlert2 toast
  const handleToast = (type, icon, message, duration) => {
    Swal.fire({
      toast: true,
      icon: icon,
      position: 'top-end',
      title: message,
      showConfirmButton: false,
      timer: duration,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  };

  // Function to create custom toast notifications
  const createToast = (type, message, duration) => {
    const id = Date.now();
    setToasts([
      ...toasts,
      { id, type, message, duration }
    ]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, duration);
  };

  useEffect(() => {
    if (message) {
      if (status === true) {
        handleToast('success', 'success', message, duration); // Success toast
      } else if (status === false) {
        handleToast('error', 'error', message, duration); // Error toast
      }
      createToast(status, message, duration); // Custom toast
    }
  }, [message, status, duration]);

  return (
    <div className="toasts-container">
      <h1>Toast Factory with Swipe Handling</h1>

      {/* Render the toasts */}
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type} ${toast.message ? 'active' : ''}`}>
          <div className="t-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Use different icons based on toast type */}
              {toast.type === 'success' && <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM16.29 9.29l-4.29 4.29-2-2-4 4L4.71 14l4-4 2 2 4-4 2.29 2.29z" />}
              {toast.type === 'error' && <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm1 17h-2v-2h2zm0-4h-2V7h2z" />}
              {/* Add more icons for other types like 'warning', 'info' if necessary */}
            </svg>
          </div>
          <div className="t-message">{toast.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Toasts;
