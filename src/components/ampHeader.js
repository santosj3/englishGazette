import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/img/core-img/logo.png";
import "../assets/css/ampStyle.css";
const AmpHeader = ({ sports }) => (
  <header class="amp-section header-area">
    <div class="middle-header">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 col-md-4">
            <div class="logo-area">
              <Link to="/">
                <amp-img
                  style={{ marginTop: "20px", marginLeft: "0.3em" }}
                  src={Logo}
                  alt="logo"
                  width="200"
                  height="21"
                />
              </Link>
            </div>
          </div>
          <div class="col-12 col-md-8"></div>
        </div>
      </div>
    </div>
    <div class="amp-section bottom-header">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="main-menu">
              <nav class="dropdown">
                <button class=" " type="button" aria-label="Toggle navigation">
                  <svg
                    viewBox="0 0 100 80"
                    width="15"
                    height="15"
                    style={{ filter: "invert(1)" }}
                  >
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                  </svg>{" "}
                  Menu
                </button>
                <div class="dropdown-content">
                  {sports.map((sport) => (
                    <div class="nav-item">
                      <Link
                        activeClassName="nav-link"
                        class="nav-link"
                        to={`/${sport.node.slug}`}
                      >
                        {sport.node.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default AmpHeader;
