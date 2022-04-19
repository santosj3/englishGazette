import React from "react"
import { Link, graphql } from "gatsby"

import Date from "../components/date"
import Image from "../components/image"
import Logo from '../assets/img/core-img/logo.png'

import Header from '../components/header'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

import { CANNONNICAL_URL, STYLE_URL } from "../utils/Constants";

const IndexPage = ({ data }) => (
  <>
    <Header sports={data.allStrapiSport.edges} />
    <Helmet title="Gazeta Esportiva" titleTemplate={"%s"}>
      <meta name="description" content={`Tudo sobre desporto motorizado`} />
      <meta name="image" content={Logo} />
      <meta property="og:url" content={CANNONNICAL_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content="Gazeta Esportiva" />
      <meta
        property="og:description"
        content={`Tudo sobre desporto motorizado`}
      />
      <meta property="og:image" content={Logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Gazeta Esportiva" />
      <meta
        name="twitter:description"
        content={`Tudo sobre desporto motorizado`}
      />
      <meta name="twitter:image" content={Logo} />
      <link
        rel="icon"
        href="https://technext.github.io/gazette/img/core-img/favicon.ico"
      />
      <link rel="stylesheet" href={STYLE_URL}></link>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "${CANNONNICAL_URL}",
          "name": "Gazeta Esportiva",          
        }
      `}
      </script>
      <script type="application/ld+json">
        {`{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Homepage"
      }]
    }`}
      </script>
    </Helmet>
    <section class="welcome-blog-post-slide contentor">
      {data?.allStrapiArticle?.edges.slice(0, 3).map((article) => (
        <div
          class="single-blog-post-slide bg-img background-overlay-5 item-contentor"
          style={{
            backgroundImage: `url("${article.node.cover}")`,
          }}
        >
          <div class="post-sozinho">
            <div class="tags">
              <Link to={`/${article.node.sport.slug}`}>
                {article.node.sport.name}
              </Link>
            </div>
            <h3>
              <Link to={article.node.url} class="font-pt">
                {article.node.title}
              </Link>
            </h3>
            <div class="date">
              <Link class="tagsHp" to={article.node.url}>
                <Date
                  date={article.node.dateToPresent}
                  datetime={article.node.datetime}
                ></Date>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>

    <section class="main-content-wrapper section_padding_100">
      <div class="container">
        <div class="coluna">
          <div class="coluna-esquerda">
            <div class="gazette-todays-post ">
              <div class="gazette-heading">
                <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>
                  Últimas
                </h4>
              </div>
              {data?.allStrapiArticle?.edges.slice(3, 9).map((article) => (
                <div class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                  <div
                    class="image-single-post-hp"
                    style={{ marginRight: "2%" }}
                  >
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      src={article.node.cover}
                      alt={article.node.title}
                    />
                  </div>
                  <div class="text-single-post-hp">
                    <div class="gazette-post-tag">
                      <Link to={`/${article.node.sport.slug}`}>
                        {article.node.sport.name}
                      </Link>
                    </div>
                    <h3 syle={{ marginBottom: "0" }}>
                      <Link
                        to={article.node.url}
                        style={{ fontWeight: 400, fontSize: "25px" }}
                        class="font-pt"
                      >
                        {article.node.title}
                      </Link>
                    </h3>
                    <span
                      class="gazette-post-date mb-2"
                      style={{ float: "right" }}
                    >
                      <Date
                        date={article.node.dateToPresent}
                        datetime={article.node.datetime}
                      ></Date>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="coluna-direita">
            <div class="sidebar-area">
              <div class="breaking-news-widget">
                <div class="widget-title"></div>
                {data?.allStrapiArticle?.edges.slice(9, 14).map((article) => (
                  <div
                    to={article.node.url}
                    class="single-breaking-news-widget"
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 2,
                        height: "100%",
                        left: 0,
                      }}
                    ></div>
                    <Image
                      style={{ height: 255, width: "100%" }}
                      src={article.node.cover}
                      alt={article.node.title}
                    />
                    <div class="breakingnews-title">
                      <p>{article.node.sport.name}</p>
                    </div>
                    <div
                      class="breaking-news-heading gradient-background-overlay"
                      style={{ zIndex: 5 }}
                    >
                      <h5 class="font-pt">
                        <Link to={article.node.url} style={{ color: "white" }}>
                          {article.node.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="gazette-catagory-posts-area">
        <div class="container">
          <div class="row">
            {data?.allStrapiArticle?.edges.slice(14, 38).map((article) => (
              <Link to={article.node.url} class="col-12 col-md-4">
                <div class="gazette-single-catagory-post">
                  <>
                    <div class="single-catagory-post-thumb mb-15">
                      <Image
                        style={{ height: "233px", marginBottom: "0" }}
                        src={article.node.cover}
                        alt={article.node.title}
                      />
                    </div>
                    <div class="gazette-post-tag">
                      <Link to={article.node.sport.slug}>
                        {article.node.sport.name}
                      </Link>
                    </div>
                    <h5>
                      {" "}
                      <Link class="font-pt" to={article.node.url}>
                        {article.node.title}
                      </Link>
                    </h5>
                    <span>
                      <Date
                        date={article.node.dateToPresent}
                        datetime={article.node.datetime}
                      ></Date>
                    </span>
                  </>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer sports={data.allStrapiSport.edges} />
  </>
);

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle(sort: {fields: date, order: DESC}, limit: 40) {
      edges {
        node {
          cover
          date
          dateToGoogle
          dateToPresent
          datetime
          description
          id
          url
          title
          sport {
            id
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