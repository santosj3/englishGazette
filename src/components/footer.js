import React from "react"
import { Link } from "gatsby"
const Footer = ({ sports }) => (
  
  <footer class="footer-area bg-img background-overlay" style={{backgroundImage: `url(https://res.cloudinary.com/rosanjeans/image/upload/v1649751472/philip-myrtorp-IoDbn1l_19A-unsplash_obsrzj.jpg)`}}>
      <div class="top-footer-area section_padding_100_70">
        <div class="container">
          <div class="row">
          {sports.map((sport)=>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt"> <Link style={{color:"white"}} to={sport.node.slug}>{sport.node.name}</Link></h4>
                </div>                
              </div>
            </div> 
            )}           
          </div>
        </div>
      </div>

      <div class="bottom-footer-area" >
        <div class="container h-100">
          <div class="row h-100 align-items-center justify-content-center">
            <div class="col-12">
              <div class="copywrite-text">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
)


export default Footer
