import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import Image from '../components/image'
import Date from '../components/date'
import { LOGO_SPORTS } from '../utils/Constants'
const SportTemplate = ({ data, numPages, currentPage }) => {
  const logo = LOGO_SPORTS.find((item)=>item.id===data.strapiSport.slug)?.url
  return (
    <>
      <Header sports={data.allStrapiSport.edges} />
      <section class="single-post-area">
        <div class="single-post-title bg-img background-overlay" style={{
          backgroundImage: `url("${logo}")`
        }} >
          <div class="container h-100">
            <div class="row h-100 align-items-end">
              <div class="col-12">
                <div class="single-post-title-content">
                  <h2 class="font-pt">{data.strapiSport.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span>{numPages}</span>
      <span>{currentPage}</span>
      <section class="main-content-wrapper section_padding_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="gazette-todays-post ">
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
    </>)
}

export default SportTemplate

export const query = graphql`
  query SportTemplate($id: String!,$articleSportId:String!, $limit: Int!, $skip: Int!) {
    strapiSport(id: { eq: $id }) {
      id
      name
      slug
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
    allStrapiArticle(
      filter: {sport: {id: {eq: $articleSportId}}}
      limit: $limit
      skip: $skip
      sort: {fields: createdAt, order: DESC}
    ) {
      edges {
        node {
          id
          url
          title
          date
          sport {
            id
            name
            slug
          }
          cover
        }
      }
    }
  }
` 