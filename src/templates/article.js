import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from '../components/image'
import Date from '../components/date'
import { CANNONNICAL_URL, STYLE_URL } from "../utils/Constants";
import { Helmet } from "react-helmet";
const ArticleTemplate = ({ data }) => (
  <>
    <Header sports={data.allStrapiSport.edges} />
    <Helmet
      title={data.strapiArticle.title}
      titleTemplate={"%s"}
      htmlAttributes={{
        lang: "pt-BR",
      }}
    >
      <meta name="description" content={data.strapiArticle.description} />
      <meta name="image" content={data.strapiArticle.cover} />
      <meta property="og:url" content={data.strapiArticle.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={data.strapiArticle.title} />
      <meta
        property="og:description"
        content={data.strapiArticle.description}
      />
      <meta property="og:image" content={data.strapiArticle.cover} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.strapiArticle.title} />
      <meta
        name="twitter:description"
        content={data.strapiArticle.description}
      />
      <meta name="twitter:image" content={data.strapiArticle.cover} />
      <link rel="stylesheet" href={STYLE_URL}></link>
      <link
        rel="icon"
        href="https://technext.github.io/gazette/img/core-img/favicon.ico"
      />
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
        "name": "Homepage",
        "item": "${CANNONNICAL_URL}"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "${data.strapiArticle.sport.name}",
        "item": "${CANNONNICAL_URL}/${data.strapiArticle.sport.slug}"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "${data.strapiArticle.title}"
      }]
    }`}
      </script>
      <script type="application/ld+json">
        {`{
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "name": "${data.strapiArticle.title}",
      "speakable":
      {
       "@type": "SpeakableSpecification",
       "cssSelector": ['.titulo-principal', '.conteudo']
       },
      "url": "${CANNONNICAL_URL}${data.strapiArticle.url}"
    }`}
      </script>
      <script type="application/ld+json">
        {`{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${CANNONNICAL_URL}${data.strapiArticle.url}"
      },
      "headline": "${data.strapiArticle.title}",
      "image": [
        "${data.strapiArticle.cover}"
      ],
      "datePublished": "${data.strapiArticle.dateToGoogle}",
      "dateModified": "${data.strapiArticle.dateToGoogle}",
      "author": {
        "@type": "Person",
        "name": "Carlos Santos",
        "url": "${CANNONNICAL_URL}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Gazeta Esportiva",
        "logo": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/rosanjeans/image/upload/v1649834225/logo_bhhm4j.png"
        }
      }
    }`}
      </script>
    </Helmet>
    <section class="single-post-area">
      <div
        class="single-post-title bg-img background-overlay"
        style={{
          backgroundImage: `url("${data.strapiArticle.cover}")`,
          minHeight: "150px",
          paddingTop: "2%",
        }}
      >
        <div class="container h-100">
          <div class="row h-100 align-items-end">
            <div class="col-12">
              <div class="single-post-title-content">
                <div class="gazette-post-tag">
                  <Link to={`/${data.strapiArticle.sport.slug}`}>
                    {data.strapiArticle.sport.name}
                  </Link>
                </div>
                <h1 style={{ color: "white" }} class="titulo-principal font-pt">
                  {data.strapiArticle.title}
                </h1>
                <p>
                  <Date
                    date={data.strapiArticle.dateToPresent}
                    datetime={data.strapiArticle.datetime}
                  ></Date>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="single-post-contents" style={{ marginTop: "2%" }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8">
              <div class="descricao single-post-text">
                <p>{data.strapiArticle.description}</p>
              </div>
            </div>
            <div class="col-12">
              <div class="single-post-thumb">
                <img
                  src={data.strapiArticle.cover}
                  alt={data.strapiArticle.title}
                />
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div
                class="conteudo single-post-text"
                dangerouslySetInnerHTML={{ __html: data.strapiArticle.content }}
              ></div>
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
                <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>
                  Mais de {data.strapiArticle.sport.name}
                </h4>
              </div>
              {data?.relatedArticle?.edges.map((article) =>
                article.node.id !== data.strapiArticle.id ? (
                  <Link
                    to={article.node.url}
                    class="gazette-single-todays-post d-md-flex align-items-start mb-50"
                  >
                    <div
                      class="image-single-post-mobile"
                      style={{ marginRight: "2%", width: "30%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "200px" }}
                        src={article.node.cover}
                        alt={article.node.title}
                      />
                    </div>
                    <div
                      class="text-single-post-mobile"
                      style={{ width: "68%" }}
                    >
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
                  </Link>
                ) : null
              )}
            </div>
            <div class="gazette-todays-post ">
              <div class="gazette-heading">
                <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>
                  Últimas
                </h4>
              </div>
              {data?.lastArticles?.edges.map((article) =>
                article.node.id !== data.strapiArticle.id ? (
                  <Link
                    to={article.node.url}
                    class="gazette-single-todays-post d-md-flex align-items-start mb-50"
                  >
                    <div
                      class="image-single-post-mobile"
                      style={{ marginRight: "2%", width: "30%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "200px" }}
                        src={article.node.cover}
                        alt={article.node.title}
                      />
                    </div>
                    <div
                      class="text-single-post-mobile"
                      style={{ width: "68%" }}
                    >
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
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer sports={data.allStrapiSport.edges} />
  </>
);

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
      dateToPresent
      datetime
      dateToGoogle
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
          dateToPresent
          datetime
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
          dateToPresent
          datetime
          sport{
            name
            slug
          }
        }
      }
    }
  }
`