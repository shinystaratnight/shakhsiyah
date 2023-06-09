import { Link } from 'gatsby';
import React, { useState } from 'react';
import useSticky from '../../hooks/useSticky';
import HeaderMenu from './headerMenu';
import HeaderTop from './headerTop';
import MobileMenu from './mobileMenu';

const Header = () => {
  const { sticky } = useSticky();

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <HeaderTop />
      <div className="header-top-area d-none d-lg-block">
        <div className="container-fluid p-0 header-main-wrapper-background">
          <div className="header-top-inner">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8"></div>
              <div className="col-xl-4 col-lg-4">
                <div className="header-top-login d-flex f-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          sticky
            ? 'sticky header-area sticky-header'
            : 'header-area sticky-header'
        }
      >
        <div className="container-fluid p-0 header-main-wrapper-background">
          <div className="header-main-wrapper">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-7 col-md-5 col-sm-9 col-9">
                <div className="header-left d-flex align-items-center">
                  <Link to="/">
                    <img
                      src="/assets/img/logo/logo.svg"
                      alt="logo"
                      style={{ width: "211px", height: "71px" }}
                    />
                  </Link>
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                      <HeaderMenu />
                    </nav>
                  </div>
                  <Link
    to="/admissions"
    className="user-btn-sign-up edu-btn ml-auto apply-button"
    style={{ width: "120px", height: "50px" }}
  >
    <span className="apply-button-text">Apply</span>
  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-5 col-md-7 col-sm-3 col-3">
                <div className="header-right d-flex align-items-center justify-content-end">
                  <div className="menu-bar d-xl-none ml-20">
                    <button
                      type="button"
                      className="side-toggle"
                      onClick={() => {
                        setMenuOpen(!menuOpen);
                      }}
                      aria-label="Toggle side menu"
                    >
                      <div className="bar-icon"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: menuOpen ? "block" : "none", width: "280px" }}></div>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div onClick={() => setMenuOpen(false)} className={menuOpen ? "offcanvas-overlay overlay-signin" : "offcanvas-overlay"}></div>

    </header>
  );
};

export default Header;
