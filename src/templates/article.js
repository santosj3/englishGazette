import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from '../components/image'
import Date from '../components/date'
import {
  MORE,
  ANALYTICS,
  TITLE,
  LANGUAGE,
  LOCALE,
  LAST,
  CANNONNICAL_URL,
  STYLE_URL,
} from "../utils/Constants";
import { Helmet } from "react-helmet";
const getDateTime = (date) => {
  return new Date(date).getTime();
};

const ArticleTemplate = ({ data }) => (
  <>
    <Header sports={data.allStrapiSport.edges} />
    <Helmet
      title={data.strapiOriginalArticle.title}
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
      <meta
        name="description"
        content={data.strapiOriginalArticle.description}
      />
      <meta name="image" content={data.strapiOriginalArticle.mainImage} />
      <meta
        property="og:url"
        content={`${CANNONNICAL_URL}/${data.strapiOriginalArticle.urlTitle}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:title" content={data.strapiOriginalArticle.title} />
      <meta
        property="og:description"
        content={data.strapiOriginalArticle.description}
      />
      <meta
        property="og:image"
        content={data.strapiOriginalArticle.mainImage}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.strapiOriginalArticle.title} />
      <meta
        name="twitter:description"
        content={data.strapiOriginalArticle.description}
      />
      <meta
        name="twitter:image"
        content={data.strapiOriginalArticle.mainImage}
      />
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
        "name": "Homepage",
        "item": "${CANNONNICAL_URL}"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "${data.strapiOriginalArticle.sport.name}",
        "item": "${CANNONNICAL_URL}/${data.strapiOriginalArticle.sport.slug}"
      },{
        "@type": "ListItem",
        "position": 3,
        "name": "${data.strapiOriginalArticle.title}"
      }]
    }`}
      </script>
      <script type="application/ld+json">
        {`{
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "name": "${data.strapiOriginalArticle.title}",
      "speakable":
      {
       "@type": "SpeakableSpecification",
       "cssSelector": ['.titulo-principal', '.conteudo']
       },
      "url": "${CANNONNICAL_URL}/${data.strapiOriginalArticle.urlTitle}"
    }`}
      </script>
      <script type="application/ld+json">
        {`{
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${CANNONNICAL_URL}/${data.strapiOriginalArticle.urlTitle}"
      },
      "headline": "${data.strapiOriginalArticle.title}",
      "image": [
        "${data.strapiOriginalArticle.mainImage}"
      ],
      "datePublished": "${data.strapiOriginalArticle.date}",
      "dateModified": "${data.strapiOriginalArticle.date}",
      "author": {
        "@type": "Person",
        "name": "Carlos Santos",
        "url": "${CANNONNICAL_URL}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "${TITLE}",
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
          backgroundImage: `url("${data.strapiOriginalArticle.mainImage}")`,
          minHeight: "150px",
          paddingTop: "2%",
        }}
      >
        <div class="container h-100">
          <div class="row h-100 align-items-end">
            <div class="col-12">
              <div class="single-post-title-content">
                <div class="gazette-post-tag">
                  <Link to={`/${data.strapiOriginalArticle.sport.slug}`}>
                    {data.strapiOriginalArticle.sport.name}
                  </Link>
                </div>
                <h1 style={{ color: "white" }} class="titulo-principal font-pt">
                  {data.strapiOriginalArticle.title}
                </h1>
                <p>
                  <Date
                    date={data.strapiOriginalArticle.date}
                    datetime={getDateTime(data.strapiOriginalArticle.date)}
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
                <p>{data.strapiOriginalArticle.description}</p>
              </div>
            </div>
            <div class="col-12">
              <div class="single-post-thumb">
                <img
                  src={data.strapiOriginalArticle.mainImage}
                  alt={data.strapiOriginalArticle.title}
                />
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div
                class="conteudo single-post-text"
                dangerouslySetInnerHTML={{
                  __html: data.strapiOriginalArticle.content,
                }}
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
                  {MORE}
                  {data.strapiOriginalArticle.sport.name}
                </h4>
              </div>
              {data?.relatedArticle?.edges.map((article) =>
                article.node.id !== data.strapiOriginalArticle.id ? (
                  <Link
                    to={`/${article.node.urlTitle}`}
                    class="gazette-single-todays-post d-md-flex align-items-start mb-50"
                  >
                    <div
                      class="image-single-post-mobile"
                      style={{ marginRight: "2%", width: "30%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "200px" }}
                        src={article.node.mainImage}
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
                      <label syle={{ marginBottom: "0" }}>
                        <Link
                          to={`/${article.node.urlTitle}`}
                          style={{ fontWeight: 400, fontSize: "25px" }}
                          class="font-pt"
                        >
                          {article.node.title}
                        </Link>
                      </label>
                      <span
                        class="gazette-post-date mb-2"
                        style={{ float: "right" }}
                      >
                        <Date
                          date={article.node.date}
                          datetime={getDateTime(article.node.date)}
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
                  {LAST}
                </h4>
              </div>
              {data?.lastArticles?.edges.map((article) =>
                article.node.id !== data.strapiOriginalArticle.id ? (
                  <Link
                    to={`/${article.node.urlTitle}`}
                    class="gazette-single-todays-post d-md-flex align-items-start mb-50"
                  >
                    <div
                      class="image-single-post-mobile"
                      style={{ marginRight: "2%", width: "30%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "200px" }}
                        src={article.node.mainImage}
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
                      <label syle={{ marginBottom: "0" }}>
                        <Link
                          to={`/${article.node.urlTitle}`}
                          style={{ fontWeight: 400, fontSize: "25px" }}
                          class="font-pt"
                        >
                          {article.node.title}
                        </Link>
                      </label>
                      <span
                        class="gazette-post-date mb-2"
                        style={{ float: "right" }}
                      >
                        <Date
                          date={article.node.date}
                          datetime={getDateTime(article.node.date)}
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

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate($id: String!, $sportId: String!) {
    strapiOriginalArticle(id: { eq: $id }) {
      id
      title
      mainImage
      description
      content
      date
      originalDate
      sport {
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
    relatedArticle: allStrapiOriginalArticle(
      filter: { sport: { id: { eq: $sportId } } }
      limit: 6
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          title
          urlTitle
          mainImage
          description
          content
          date
          originalDate
          sport {
            name
            slug
          }
        }
      }
    }
    lastArticles: allStrapiOriginalArticle(
      limit: 10
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          title
          urlTitle
          mainImage
          description
          content
          date
          originalDate
          sport {
            name
            slug
          }
        }
      }
    }
  }
`;