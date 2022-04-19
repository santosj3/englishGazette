import { Link } from "gatsby";
import React from "react";
import Logo from "../assets/img/core-img/logo.png";
import "../assets/css/ampStyle.css";
const AmpHeader = ({ sports }) => (
  <header class="header-area">
    <div class="middle-header">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 col-md-4">
            <div class="logo-area">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div class="col-12 col-md-8"></div>
        </div>
      </div>
    </div>
    <div class="bottom-header">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="main-menu">
              <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="gazetteMenu">
                  <div class="navbar-nav mr-auto">
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
