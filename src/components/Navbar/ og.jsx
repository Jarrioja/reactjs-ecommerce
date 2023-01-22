//import React from "react";
import React from "react";
import "./Navbar.scss";
import { MenuItems } from "./MenuItems";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <header className='header-nav'>
      <div className='header-nav__header-top container-fluid d-flex justify-content-between align-items-center'>
        <div>RRSS</div>
        <div>
          <img className='logo' src='./tgk.svg' alt='' />
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
      <div className='header-nav__header-bot container-fluid d-flex justify-content-between align-items-center navbar-light bg-light shadow-sm sticky-top'>
        <a className='navbar-brand opacity-0 invisible' href='#'>
          <img className='logo' src='./tgk.svg' alt='' />
        </a>
        <nav className='navbar navbar-expand-lg '>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {MenuItems.map((item, index) => {
                return (
                  <li className='nav-item '>
                    <a className={item.cName} href={item.url} key={index}>
                      {item.tittle}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className='opacity-0 invisible'>
          <CartWidget />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
