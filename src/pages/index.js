import React from "react"
import { Link, graphql } from "gatsby"

import Date from "../components/date"
import Image from "../components/image"
import Logo from '../assets/img/core-img/logo.png'

import Header from '../components/header'
import Footer from '../components/footer'
import { Helmet } from "react-helmet"

import {
  LOCALE,
  DESCRIPTION,
  ANALYTICS,
  TITLE,
  LANGUAGE,
  LAST,
  CANNONNICAL_URL,
  STYLE_URL,
} from "../utils/Constants";

const IndexPage = ({ data }) => (
  <>
    <Header sports={data.allStrapiSport.edges} />
    <Helmet
      title={TITLE}
      titleTemplate={"%s"}
      htmlAttributes={{
        lang: LANGUAGE,
      }}
    >
      <meta http-equiv="content-language" content={LANGUAGE} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
      ></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${ANALYTICS}');`}
      </script>
      <script>
        {`(function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "bo771inyeh");`}
      </script>
      <meta name="description" content={DESCRIPTION} />
      <meta name="image" content={Logo} />
      <meta property="og:url" content={CANNONNICAL_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:title" content={TITLE} />
      <title>{TITLE}</title>
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={Logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
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
          "name": "${TITLE}",          
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
      {data?.allStrapiOriginalArticle?.edges.slice(0, 3).map((article) => (
        <div
          class="single-blog-post-slide bg-img background-overlay-5 item-contentor"
          style={{
            backgroundImage: `url("${article.node.mainImage}")`,
          }}
        >
          <div class="post-sozinho">
            <div class="tags">
              <Link to={`/${article.node.sport.slug}`}>
                {article.node.sport.name}
              </Link>
            </div>
            <h3>
              <Link to={article.node.urlTitle} class="font-pt">
                {article.node.title}
              </Link>
            </h3>
            <div class="date">
              <Link class="tagsHp" to={article.node.urlTitle}>
                <Date
                  date={article.node.date}
                  datetime={article.node.date}
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
                  {LAST}
                </h4>
              </div>
              {data?.allStrapiOriginalArticle?.edges
                .slice(3, 9)
                .map((article) => (
                  <div class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                    <div
                      class="image-single-post-hp"
                      style={{ marginRight: "2%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "100%" }}
                        src={article.node.mainImage}
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
                          to={article.node.urlTitle}
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
                          date={article.node.date}
                          datetime={article.node.date}
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
                {data?.allStrapiOriginalArticle?.edges
                  .slice(9, 14)
                  .map((article) => (
                    <div
                      to={article.node.urlTitle}
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
                        src={article.node.mainImage}
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
                          <Link
                            to={article.node.urlTitle}
                            style={{ color: "white" }}
                          >
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
            {data?.allStrapiOriginalArticle?.edges
              .slice(14, 38)
              .map((article) => (
                <Link to={article.node.urlTitle} class="col-12 col-md-4">
                  <div class="gazette-single-catagory-post">
                    <>
                      <div class="single-catagory-post-thumb mb-15">
                        <Image
                          style={{ height: "233px", marginBottom: "0" }}
                          src={article.node.mainImage}
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
                        <Link class="font-pt" to={article.node.urlTitle}>
                          {article.node.title}
                        </Link>
                      </h5>
                      <span>
                        <Date
                          date={article.node.date}
                          datetime={article.node.date}
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

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiOriginalArticle(sort: { fields: date, order: DESC }, limit: 40) {
      edges {
        node {
          mainImage
          date
          originalDate
          description
          id
          urlTitle
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
`;