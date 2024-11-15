import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Column */}
        <div className={styles.footerSection}>
          <h3>DISCOVER</h3>
          <ul>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="freek">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <br/>
          <h3>COURSES</h3>
          <ul>
            <li><a href="Quran">Qur'an Memorization</a></li>
            <li><a href="tajweed">Learn the Arabic Language</a></li>
            <li><a href="arabic">Arabic Course (UAE Schools)</a></li>
          </ul>
        </div>

        {/* Center Column */}
        <div className={styles.footerSection}>
          <h3 style={{paddingLeft:'89px'}}>HELP CENTER</h3>
          <p style={{paddingLeft:'55px'}}>UK +44 20 4577 1227<br />USA +1 85 5442 3380</p>
          <p>Email: contact@alfurqan.academy</p>
          <br/>
          <br/>
          <h3 style={{paddingLeft:'80px'}}>CONNECT WITH US</h3>
          <div className={styles.socialIcons}>
            <a href="#"><Image src="/assets/icons/Whatsapp.png" alt="WhatsApp" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/FB.png" alt="Facebook" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/X.png" alt="Twitter" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/in.jpg" alt="LinkedIn" width={24} height={24} /></a>
            {/* <a href="#"><Image src="/assets/icons/pinterest.png" alt="Pinterest" width={24} height={24} /></a> */}
            <a href="#"><Image src="/assets/icons/Youtube.png" alt="YouTube" width={24} height={24} /></a>
            <a href="#"><Image src="/assets/icons/insta.png" alt="YouTube" width={24} height={24} /></a>

          </div>
          <br/>
          <div>
          <a href="#"><Image src="/assets/img/logo-white.png" alt="" width={40} height={40} style={{ marginLeft: '122px' }} /></a>
          <p style={{paddingLeft:'66px'}}>© Furqan Academy LTD</p>
          <p>128,City Road,London,ECIV 2NX,United Kingdom</p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.footerSection} style={{paddingLeft:'70px'}}>
          <h3 style={{paddingLeft:'70px'}}>LET'S STAY IN TOUCH</h3>
          <input type="email"  className={styles.emailInput} placeholder="Type your Email Address" />&nbsp;
          <button className={styles.btn}>Submit</button>
          <h3 style={{marginTop:'60px',paddingLeft:'80px'}}>Download Our App</h3>
          <div className={styles.appLinks}>
            <a href="#"><Image src="/assets/icons/Appstore.png" alt="App Store" width={120} height={50} /></a>
            <a href="#"><Image src="/assets/icons/Googleplay.png" alt="Google Play" width={120} height={50} /></a>
          </div>
          <br/>
          <br/>
          <div className={styles.appLinks}>
            <a href="#"><Image src="/assets/icons/trust.png" alt="App Store" width={120} height={40} /><span style={{fontSize:'9px'}}>TrustScore 4.8 307 reviews</span></a>
            <a href="#"><Image src="/assets/icons/Google review.png" alt="Google Play" width={120} height={40} /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>©2024 Al Furqan Academy - All Rights Reserved</p>
        <div className={styles.legalLinks}>
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
