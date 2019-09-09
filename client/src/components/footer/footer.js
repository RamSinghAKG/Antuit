import React from 'react';
import './footer.css';
const Footer = () => {
    console.log('render footer..');
    const footerText = `© 2019 Antuit Inc. All rights reserved.`;
    return (
        <footer className="footer-container">
            <img alt="Antuit logo" className="footerLogo" src='/images/antuit_logo.webp'></img>
            <label>{footerText}</label>
        </footer>
    );
};
export default Footer;