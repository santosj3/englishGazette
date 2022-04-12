import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from '../components/image'
import Date from '../components/date'

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

    <section class="main-content-wrapper section_padding_100">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-12">
            <div class="gazette-todays-post ">
              <div class="gazette-heading">
                <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>Mais de {data.strapiArticle.sport.name}</h4>
              </div>
              {data?.relatedArticle?.edges.map((article) =>
                article.node.id!== data.strapiArticle.id?
                <div class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                  <div style={{ marginRight: "2%", width: "30%" }}>
                    <Image style={{ width: "100%", height: "170px" }} src={article.node.cover} alt={article.node.title} />
                  </div>
                  <div style={{ maxWidth: "68%" }}>
                    <div class="gazette-post-tag">
                      <Link to={`/${article.node.sport.slug}`}>{article.node.sport.name}</Link>
                    </div>
                    <h3 syle={{ marginBottom: "0" }}><Link to={article.node.url} style={{ fontWeight: 400, fontSize: "25px" }} class="font-pt">{article.node.title}</Link></h3>
                    <span class="gazette-post-date mb-2" style={{ float: "right" }}><Date date={article.node.date}></Date></span>
                  </div>
                </div> : null
              )}
            </div>
            <div class="gazette-todays-post ">
              <div class="gazette-heading">
                <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>Últimas</h4>
              </div>
              {data?.lastArticles?.edges.map((article) =>
                article.node.id!== data.strapiArticle.id?
                <div class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                  <div style={{ marginRight: "2%", width: "30%" }}>
                    <Image style={{ width: "100%", height: "170px" }} src={article.node.cover} alt={article.node.title} />
                  </div>
                  <div style={{ maxWidth: "68%" }}>
                    <div class="gazette-post-tag">
                      <Link to={`/${article.node.sport.slug}`}>{article.node.sport.name}</Link>
                    </div>
                    <h3 syle={{ marginBottom: "0" }}><Link to={article.node.url} style={{ fontWeight: 400, fontSize: "25px" }} class="font-pt">{article.node.title}</Link></h3>
                    <span class="gazette-post-date mb-2" style={{ float: "right" }}><Date date={article.node.date}></Date></span>
                  </div>
                </div> : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer sports={data.allStrapiSport.edges}/>          
    
  </>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!,$sportId: String! ) {
    strapiArticle(id: {eq: $id}) {
      id
      title
      cover
      description
      content
      date
      sport{
        id
        name
        slug
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
    relatedArticle: allStrapiArticle(
      filter: {language: {id: {eq: "625279e89ec5232714eef52d"}}, sport: {id: {eq: $sportId}}}
      limit: 6
      sort: {fields: createdAt, order: DESC}
    ) {
      edges {
        node {
          id
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
    lastArticles: allStrapiArticle(
      filter: {language: {id: {eq: "625279e89ec5232714eef52d"}}}
      limit: 10
      sort: {fields: createdAt, order: DESC}
    ) {
      edges {
        node {
          id
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
  }
`