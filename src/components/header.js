import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../assets/img/core-img/logo.png'
import "../assets/css/core-style.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"

const Header = ({ sports }) => (
  
  <header class="header-area">
  <div class="middle-header">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 col-md-4">
          <div class="logo-area">
            <Link to="/"><img src={Logo} alt="logo" /></Link>
          </div>
        </div>
        <div class="col-12 col-md-8">
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-header">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12">
          <div class="main-menu">
            <nav class="navbar navbar-expand-lg">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#gazetteMenu" aria-controls="gazetteMenu" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i> Menu</button>
              <div class="collapse navbar-collapse" id="gazetteMenu">
                <ul class="navbar-nav mr-auto">
                  {sports.map(sport => (
                    <li class="nav-item">
                      <Link class="nav-link" to={`/${sport.node.slug}`}>{sport.node.name}</Link>
                    </li>
                  ))}                      
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
