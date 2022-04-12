import * as React from "react"
import { Link, graphql } from "gatsby"

import Date from "../components/date"
import Image from "../components/image"

import Header from '../components/header'
import Footer from '../components/footer'


// markup
const NotFoundPage = ({ data }) => {
  return (
    <>
      <Header sports={data.allStrapiSport.edges} />
      <section class="single-post-area">
        <div class="single-post-title bg-img background-overlay" style={{
          backgroundImage: `url(https://res.cloudinary.com/rosanjeans/image/upload/v1649751714/sigmund-TnEe6BdBC2M-unsplash_hsyf4c.jpg)`
        }} >
          <div class="container h-100">
            <div class="row h-100 align-items-end">
              <div class="col-12">
                <div class="single-post-title-content">
                  <h2 class="font-pt">404 - Página Não encontrada</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main-content-wrapper section_padding_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="gazette-todays-post "><div class="gazette-heading">
                <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>Últimas</h4>
              </div>
                {data?.allStrapiArticle?.edges.map((article) =>
                  <div class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                    <div style={{ marginRight: "2%", width: "30%" }}>
                      <Image style={{ width: "100%", height: "180px" }} src={article.node.cover} alt={article.node.title} />
                    </div>
                    <div style={{ maxWidth: "68%" }}>
                      <div class="gazette-post-tag">
                        <Link to={`/${article.node.sport.slug}`}>{article.node.sport.name}</Link>
                      </div>
                      <h3 syle={{ marginBottom: "0" }}><Link to={article.node.url} style={{ fontWeight: 400, fontSize: "25px" }} class="font-pt">{article.node.title}</Link></h3>
                      <span class="gazette-post-date mb-2" style={{ float: "right" }}><Date date={article.node.date}></Date></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer sports={data.allStrapiSport.edges} />
    </>)
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundQuery {
    allStrapiArticle(
      filter: {language: {id: {eq: "625279e89ec5232714eef52d"}}}
      limit: 40
      sort: {fields: createdAt, order: DESC}
    ) {
      edges {
        node {
          title
          url
          cover
          description
          content
          date
          sport{
            name
            slug
          }
        }
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