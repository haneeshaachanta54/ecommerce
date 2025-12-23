import React from 'react';
import "../CSS/style.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <div className="footer-title">About</div>
          <div className="footer-text">
            This is a simple footer layout using only div elements.
          </div>
        </div>

        <div className="footer-section">
          <div className="footer-title">Links</div>
          <div className="footer-link">Home</div>
          <div className="footer-link">About</div>
          <div className="footer-link">Services</div>
          <div className="footer-link">Contact</div>
        </div>

        <div className="footer-section">
          <div className="footer-title">Contact</div>
          <div className="footer-text">Email: example@email.com</div>
          <div className="footer-text">Phone: +123 456 7890</div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Your Website. All rights reserved.
      </div>
    </div>
  )
}

export default Footer