import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'

const ArticleTemplate = ({ data }) => (
  <>
    <Header sports={data.allStrapiSport.edges}/>

    <section class="single-post-area">
      <div class="single-post-title bg-img background-overlay" style={{
        backgroundImage: `url("${data.strapiArticle.cover}")`
      }} >
        <div class="container h-100">
          <div class="row h-100 align-items-end">
            <div class="col-12">
              <div class="single-post-title-content">
                <div class="gazette-post-tag">
                  <Link to={`/${data.strapiArticle.sport.slug}`}>{data.strapiArticle.sport.name}</Link>
                </div>
                <h2 class="font-pt">{data.strapiArticle.title}</h2>
                <p>{data.strapiArticle.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-post-contents">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8">
              <div class="single-post-text">
                <p>{data.strapiArticle.description}</p>
              </div>
            </div>
            <div class="col-12">
              <div class="single-post-thumb">
                <img src={data.strapiArticle.cover} alt={data.strapiArticle.title} />
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="single-post-text" dangerouslySetInnerHTML={{ __html: data.strapiArticle.content }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-area bg-img background-overlay" >
      <div class="top-footer-area section_padding_100_70">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt">Regions</h4>
                </div>
                <ul class="footer-widget-menu">
                  <li><a href="#">U.S.</a></li>
                  <li><a href="#">Africa</a></li>
                  <li><a href="#">Americas</a></li>
                  <li><a href="#">Asia</a></li>
                  <li><a href="#">China</a></li>
                  <li><a href="#">Europe</a></li>
                  <li><a href="#">Middle</a></li>
                  <li><a href="#">East</a></li>
                  <li><a href="#">Opinion</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt">Fashion</h4>
                </div>
                <ul class="footer-widget-menu">
                  <li><a href="#">Election 2016</a></li>
                  <li><a href="#">Nation</a></li>
                  <li><a href="#">World</a></li>
                  <li><a href="#">Our Team</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt">Politics</h4>
                </div>
                <ul class="footer-widget-menu">
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Markets</a></li>
                  <li><a href="#">Tech</a></li>
                  <li><a href="#">Luxury</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt">Featured</h4>
                </div>
                <ul class="footer-widget-menu">
                  <li><a href="#">Football</a></li>
                  <li><a href="#">Golf</a></li>
                  <li><a href="#">Tennis</a></li>
                  <li><a href="#">Motorsport</a></li>
                  <li><a href="#">Horseracing</a></li>
                  <li><a href="#">Equestrian</a></li>
                  <li><a href="#">Sailing</a></li>
                  <li><a href="#">Skiing</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt">FAQ</h4>
                </div>
                <ul class="footer-widget-menu">
                  <li><a href="#">Aviation</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Traveller</a></li>
                  <li><a href="#">Destinations</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Food/Drink</a></li>
                  <li><a href="#">Hotels</a></li>
                  <li><a href="#">Partner Hotels</a></li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-2">
              <div class="single-footer-widget">
                <div class="footer-widget-title">
                  <h4 class="font-pt">+More</h4>
                </div>
                <ul class="footer-widget-menu">
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Architecture</a></li>
                  <li><a href="#">Arts</a></li>
                  <li><a href="#">Autos</a></li>
                  <li><a href="#">Luxury</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-footer-area">
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
  </>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      cover
      description
      content
      date
      sport{
        name
      }
    }
    allStrapiSport {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`