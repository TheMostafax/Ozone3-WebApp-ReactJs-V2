import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <div className='footer-container'>
   
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <a href="https://www.instagram.com/ozone3.studios/"target='_blank'>Email</a>
          <a href="https://www.instagram.com/ozone3.studios/"target='_blank'>Phone</a>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <a href="https://www.instagram.com/ozone3.studios/"target='_blank'>Instagram</a>
          <a href="https://www.tiktok.com/@ozone.studios/"target='_blank'>Tik-Tok</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
