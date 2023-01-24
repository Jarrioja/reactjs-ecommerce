//import React from "react";
import React from "react";
import "./Navbar.scss";
import { MenuItems } from "./MenuItems";
import CartWidget from "../CartWidget/CartWidget";
import SocialWidget from "../SocialWidget/SocialWidget";

function Navbar() {
  return (
    <>
      <div className='header-nav__header-top container-fluid d-flex justify-content-between align-items-center'>
        <SocialWidget />
        <div className='logo-wrapper'>
          <img className='logo' src='./tgk.svg' alt='' />
        </div>
        <div className='user-menu'>
          <CartWidget />
        </div>
      </div>
      <div className='header-nav__header-bot container-fluid d-flex  align-items-center navbar-light bg-light shadow-sm sticky-top'>
        <div className='logo-wrapper opacity-0 invisible '>
          <a className='navbar-brand' href='#'>
            <img className='logo ' src='./tgk.svg' alt='' />
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
                      <a className={item.cName} href={item.url}>
                        {item.tittle}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className='user-menu opacity-0 invisible'>
          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default Navbar;
