import React from 'react';
import logo from '../images/logo.svg';
import fb from '../images/icon-facebook.svg';
import ig from '../images/icon-instagram.svg';
import pin from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';

const Footer = ({ navlinks }) => {
    return (
        <footer className="footer">
            <img src={logo} alt="Loopstudios company logo" />
            <ul className="footer__page__links">
                {navlinks.map((link) => (
                    <li><a> {link} </a></li>
                ))}
            </ul>
            <div className="footer__social__links">
                <span>
                    <img src={fb} alt="Facebook company logo" />
                    <div className="border border--fb" />
                </span>
                <span>
                    <img src={twitter} alt="Twitter company logo" />
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.1181 2.99388L21.1843 3.18828C22.0503 3.08582 22.8984 2.86988 23.707 2.54641C23.0889 3.40169 22.3377 4.1535 21.4815 4.77293L21.4356 4.80614L21.4381 4.86273C21.7479 11.7393 16.6194 19.399 7.548 19.399H7.5479C5.04162 19.4013 2.58471 18.7228 0.438113 17.44C2.91997 17.6246 5.38813 16.8773 7.3548 15.3346L7.58697 15.1525L7.29195 15.147C6.28633 15.1283 5.31171 14.7957 4.50448 14.1957C3.7442 13.6307 3.16823 12.855 2.84663 11.9668C3.5447 12.0752 4.25849 12.0358 4.94152 11.8503L4.93465 11.6461C2.67684 11.1932 1.10008 9.19863 1.06916 7.03358C1.7267 7.36971 2.45114 7.55661 3.19069 7.57995L3.55716 7.59152L3.25236 7.38772C2.23248 6.70578 1.51067 5.66093 1.23378 4.46571C0.968342 3.31996 1.13086 2.11853 1.6875 1.08644C2.91622 2.56472 4.43495 3.77625 6.15049 4.64585C7.91191 5.53871 9.84142 6.05115 11.8138 6.14987L11.9529 6.15684L11.9213 6.02116C11.2185 3.00774 13.5049 0.105004 16.616 0.105004L16.6161 0.105004C17.2754 0.104144 17.9278 0.238783 18.5328 0.500565C19.1379 0.762347 19.6827 1.14569 20.1334 1.62679L20.1732 1.66928L20.2303 1.65802C21.2516 1.45682 22.2345 1.097 23.1435 0.592166C22.7561 1.59367 22.0444 2.44022 21.1181 2.99388Z" stroke="#00acee" stroke-width="0.41"/>
                    </svg>
                </span>
                <span>
                    <img src={ig} alt="Instagram company logo" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0.25H19C21.6234 0.25 23.75 2.37665 23.75 5V19C23.75 21.6234 21.6234 23.75 19 23.75H5C2.37665 23.75 0.25 21.6234 0.25 19V5C0.25 2.37665 2.37665 0.25 5 0.25Z" stroke="url(#paint0_radial)" stroke-width="0.5"/>
                        <defs>
                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24 -0.5) rotate(133.854) scale(35.3624)">
                            <stop stop-color="#9B36B7"/>
                            <stop offset="1" stop-color="#ECA922"/>
                            </radialGradient>
                        </defs>
                    </svg>

                    <div className="border border--ig" />
                </span>
                <span>
                    <img src={pin} alt="Pinterest company logo" />
                    <div className="border border--pin" />
                </span>
            </div>
            <small className="footer__copyright">© 2021 Loopstudios. All rights reserved.</small>
        </footer>
    )
}

export default Footer;