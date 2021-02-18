import React, { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';
import hamburger from '../images/icon-hamburger.svg';

const Header = ({ navlinks, viewport }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let navbar = document.querySelector('.navbar'),
            menuBtn = document.querySelector('.menu__btn'), 
            mobileMenu = document.querySelector('.mobile__menu');

        if (viewport > 890) {
            navbar.classList.remove('active')
            menuBtn.classList.remove('active')
            mobileMenu.classList.remove('active')
        }
    }, [viewport > 890])

    return (
        <div className="header">
            <nav className={`navbar${open ? ' active' : ''}`}>
                <img src={logo} alt="Loopstudio company logo" />
                <ul>
                    {navlinks.map((link) => (
                        <li><a> {link} </a></li>
                    ))}
                </ul>
            </nav>
            <h1>Immersive experiences that deliver</h1>
            <button className={`menu__btn${open ? ' active' : ''}`} onClick={() => setOpen(!open)}>
                <img className="close" src={close} alt="" />
                <img className="hamburger" src={hamburger} alt="" />
            </button>
            <div className={`mobile__menu${open ? ' active' : ''}`}>
                <ul>
                    {navlinks.map((link) => (
                        <li><a> {link} </a></li>
                    ))}
                </ul>
            </div>
            <img 
                className="header__hero__img"
                src={require(`../images/${viewport > 890 ? 'desktop' : 'mobile'}/image-hero.jpg`).default} 
                alt="Woman using VR goggles" 
            />
        </div>
    )
}

export default Header;