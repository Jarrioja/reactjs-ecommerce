//import React from "react";
import React from "react";
import "./Navbar.scss";
import { MenuItems } from "./MenuItems";
import CartWidget from "./CartWidget";

function Navbar() {
  return (
    <header className='header-nav sticky-top'>
      <div className='header-nav__header-top container-fluid d-flex justify-content-between align-items-center'>
        <div>RRSS</div>
        <div>
          <img className='logo' src='./tgk.svg' alt='' />
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
      <div className='header-nav__header-bot container-fluid d-flex justify-content-between align-items-center navbar-light bg-light shadow-sm '>
        <a className='navbar-brand opacity-0 invisible' href='#'>
          <img className='logo' src='./tgk.svg' alt='' />
        </a>
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
