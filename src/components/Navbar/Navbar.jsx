import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { MenuItems } from "./MenuItems";
import CartWidget from "../CartWidget/CartWidget";
import SocialWidget from "../SocialWidget/SocialWidget";

import "./Navbar.scss";

function Navbar() {
  /* Hide top row of the header on scroll */
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShow = 50;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToShow) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  return (
    <>
      <div className='header-nav__header-top container-fluid d-flex justify-content-between align-items-center'>
        <SocialWidget />
        <div className='logo-wrapper'>
          <Link className='navbar-brand' to='/'>
            <img className='logo' src='../tgk.svg' alt='' />
          </Link>
        </div>
        <div className='user-menu'>
          <CartWidget />
        </div>
      </div>
      <div className='header-nav__header-bot container-fluid d-flex  align-items-center navbar-light bg-light shadow-sm sticky-top'>
        <div
          className={`logo-wrapper ${
            isVisible ? "py-2" : "opacity-0 invisible "
          } `}
        >
          <a className='navbar-brand' href='/'>
            <img className='logo ' src='../tgk.svg' alt='' />
          </a>
        </div>
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div className='container-fluid'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav'>
                {MenuItems.map((item, index) => {
                  return (
                    <li className='nav-item ' key={index}>
                      <NavLink className={item.cName} to={item.url}>
                        {item.tittle}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className={`user-menu ${isVisible ? "" : "opacity-0 invisible"}`}>
          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default Navbar;
