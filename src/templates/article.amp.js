import React from 'react'
import { Link, graphql } from 'gatsby'
import AmpHeader from "../components/ampHeader";
import Date from "../components/date";

import {
  MORE,
  ANALYTICS,
  TITLE,
  LANGUAGE,
  LAST,
  CANNONNICAL_URL,
} from "../utils/Constants";

import { Helmet } from "react-helmet";

const ArticleTemplate = ({ data }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${CANNONNICAL_URL}/${data.strapiOriginalArticle.id}`,
    },
    headline: data.strapiOriginalArticle.title,
    image: [data.strapiOriginalArticle.mainImage],
    datePublished: data.strapiOriginalArticle.date,
    dateModified: data.strapiOriginalArticle.date,
    author: {
      "@type": "Person",
      name: "Carlos Santos",
      url: CANNONNICAL_URL,
    },
    publisher: {
      "@type": "Organization",
      name: TITLE,
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/rosanjeans/image/upload/v1649834225/logo_bhhm4j.png",
      },
    },
  };

  const ANALYTICS_SCRIPT = {
    vars: {
      gtag_id: ANALYTICS,
      config: {
        ANALYTICS: { groups: "default" },
      },
    },
  };

  const ORGANIZATION_STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: CANNONNICAL_URL,
    name: TITLE,
  };

  const BREADCRUMB_STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Homepage",
        item: CANNONNICAL_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "${data.strapiOriginalArticle.sport.name}",
        item: `${CANNONNICAL_URL}/${data.strapiOriginalArticle.sport.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data.strapiOriginalArticle.title}`,
      },
    ],
  };

  const SPEAKERS_STRUCTURED_DATA = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    name: data.strapiOriginalArticle.title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".titulo-principal", ".conteudo"],
    },
    url: `${CANNONNICAL_URL}/${data.strapiOriginalArticle.urlTitle}`,
  };
  const getDateTime = (date) => {
    return new window.Date(date).getTime();
  };
  return (
    <>
      <AmpHeader sports={data.allStrapiSport.edges} />
      <Helmet
        title={data.strapiOriginalArticle.title}
        titleTemplate={"%s"}
        htmlAttributes={{
          lang: LANGUAGE,
        }}
      >
        <meta http-equiv="content-language" content={LANGUAGE} />
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
      </Helmet>
      <section class="amp-section single-post-area">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(BREADCRUMB_STRUCTURED_DATA),
          }}
        ></script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SPEAKERS_STRUCTURED_DATA),
          }}
        ></script>
        <amp-analytics type="gtag" data-credentials="include">
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(ANALYTICS_SCRIPT),
            }}
          ></script>
        </amp-analytics>
        <div class="single-post-title bg-img background-overlay">
          <div class="container h-100">
            <div class="row h-100 align-items-end">
              <div class="col-12">
                <div class="amp-section single-post-title-content">
                  <div class=" gazette-post-tag">
                    <Link to={`/${data.strapiOriginalArticle.sport.slug}`}>
                      {data.strapiOriginalArticle.sport.name}
                    </Link>
                  </div>
                  <h1 class="amp-section titulo-principal font-pt">
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

        <div class="single-post-contents">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8">
                <div class="descricao single-post-text">
                  <p>{data.strapiOriginalArticle.description}</p>
                </div>
              </div>
              <div class="col-12">
                <div class="single-post-thumb">
                  <figure>
                    <amp-img
                      height="190"
                      width="300"
                      src={data.strapiOriginalArticle.mainImage}
                      alt={data.strapiOriginalArticle.title}
                    />
                  </figure>
                </div>
              </div>
              <div class="col-12 col-md-8">
                <div
                  class="conteudo single-post-text"
                  dangerouslySetInnerHTML={{
                    __html: data.strapiOriginalArticle.content
                      .replaceAll("<div<", "<")
                      .replaceAll("</div<", "<")
                      .replaceAll("<style>", "<div className='erro-estilo'>")
                      .replaceAll('loading="lazy"', " ")
                      .replaceAll("<picture>", "<figure>")
                      .replaceAll("</picture>", "</figure>")
                      .replaceAll("</style>", "</div>"),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="amp-section main-content-wrapper section_padding_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="gazette-todays-post ">
                <div class="gazette-heading">
                  <h4>
                    {MORE}
                    {data.strapiOriginalArticle.sport.name}
                  </h4>
                </div>
                {data?.relatedArticle?.edges.map((article) =>
                  article.node.id !== data.strapiOriginalArticle.id ? (
                    <figure class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                      <Link
                        to={`/${article.node.urlTitle}`}
                        style={{ marginRight: "2%", width: "30%" }}
                      >
                        <amp-img
                          width="300"
                          height="190"
                          src={article.node.mainImage}
                          alt={article.node.title}
                        />
                      </Link>
                      <div>
                        <div class="gazette-post-tag">
                          <Link to={`/${article.node.sport.slug}`}>
                            {article.node.sport.name}
                          </Link>
                        </div>
                        <Link
                          to={`/${article.node.urlTitle}`}
                          class="font-pt more-article"
                        >
                          {article.node.title}
                        </Link>
                      </div>
                    </figure>
                  ) : null
                )}
              </div>
              <div class="gazette-todays-post ">
                <div class="gazette-heading">
                  <h4>{LAST}</h4>
                </div>
                {data?.lastArticles?.edges.map((article) =>
                  article.node.id !== data.strapiOriginalArticle.id ? (
                    <figure class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                      <Link
                        to={`/${article.node.urlTitle}`}
                        class="image-single-post-mobile"
                        style={{ marginRight: "2%", width: "30%" }}
                      >
                        <amp-img
                          width="300"
                          height="190"
                          src={article.node.mainImage}
                          alt={article.node.title}
                        />
                      </Link>
                      <div class="text-single-post-mobile">
                        <div class="gazette-post-tag">
                          <Link to={`/${article.node.sport.slug}`}>
                            {article.node.sport.name}
                          </Link>
                        </div>
                        <Link
                          to={`/${article.node.urlTitle}`}
                          class="font-pt more-article"
                        >
                          {article.node.title}
                        </Link>
                      </div>
                    </figure>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query ArticleTemplate2($id: String!, $sportId: String!) {
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
      sort: { fields: date, order: DESC }
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
      sort: { fields: date, order: DESC }
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