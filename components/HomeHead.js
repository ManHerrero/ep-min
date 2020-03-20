import React from "react";

class HomeHead extends React.Component {
  render() {
    return (
      <header className="header menu_fixed">
        <div id="logo">
          <a
            href="home.html"
            title="ErasmusPlay - Your Erasmus experience starts now"
          >
            {}
            <h4 className="logo_bar_wt logo_normal">
              <i className="icon-play-circled2" /> ErasmusPlay
            </h4>
            <h4 className="logo_bar logo_sticky">
              <i className="icon-play-circled2" /> ErasmusPlay
            </h4>
          </a>
        </div>
        <ul id="top_menu" className="d-none">
          <li>
            <a href="account.html" className="btn_add">
              Add Listing
            </a>
          </li>
          <li>
            <a
              href="#sign-in-dialog"
              id="sign-in"
              className="login"
              title="Sign In"
            >
              Sign In
            </a>
          </li>
          <li>
            <a
              href="wishlist.html"
              className="wishlist_bt_top"
              title="Your wishlist"
            >
              Your wishlist
            </a>
          </li>
        </ul>
        {}
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        {}
        <nav id="menu" className="main-menu">
          <ul>
            <li>
              <span>
                <a href="home.html">Home</a>
              </span>
            </li>
            <li>
              <span>
                <a href="discover.html">Partners</a>
              </span>
            </li>
            <li>
              <span>
                <a href="about.hmtl">About Us</a>
              </span>
            </li>
            <li>
              <span>
                <a href="contact.html">Help</a>
              </span>
            </li>
            <li className="d-none">
              <span>
                <a href="#0">Languages</a>
              </span>
              <ul>
                <li>
                  <a href="#">English</a>
                </li>
                <li>
                  <a href="#">Español</a>
                </li>
                <li>
                  <a href="#">Français</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default HomeHead;
