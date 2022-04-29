import * as React from "react"
import { Link, graphql } from "gatsby"

import Date from "../components/date"
import Image from "../components/image"
import Logo from "../assets/img/core-img/logo.png";

import Header from "../components/header";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import {
  ERROR_TITLE,
  LOCALE,
  DESCRIPTION,
  ANALYTICS,
  TITLE,
  LANGUAGE,
  LAST,
  CANNONNICAL_URL,
  STYLE_URL,
} from "../utils/Constants";

// markup
const NotFoundPage = ({ data }) => {
  return (
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
        <meta name="msvalidate.01" content="05531788A36D9ACC3B731D1C81E82CB2" />
        <meta name="description" content={DESCRIPTION} />
        <meta name="image" content={Logo} />
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
      <section class="single-post-area">
        <div
          class="single-post-title bg-img background-overlay"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/rosanjeans/image/upload/v1649751714/sigmund-TnEe6BdBC2M-unsplash_hsyf4c.jpg)`,
          }}
        >
          <div class="container h-100">
            <div class="row h-100 align-items-end">
              <div class="col-12">
                <div class="single-post-title-content">
                  <h2
                    style={{ color: "white", paddingTop: "148px" }}
                    class="font-pt"
                  >
                    {ERROR_TITLE}
                  </h2>
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
                  <h4 style={{ fontSize: "24px", textTransform: "uppercase" }}>
                    {LAST}
                  </h4>
                </div>
                {data?.allStrapiOriginalArticle?.edges.map((article) => (
                  <div class="gazette-single-todays-post d-md-flex align-items-start mb-50">
                    <div
                      class="image-single-post-mobile"
                      style={{ marginRight: "2%", width: "30%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "180px" }}
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
                        <Date date={article.node.originalDate}></Date>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer sports={data.allStrapiSport.edges} />
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundQuery {
    allStrapiOriginalArticle(
      limit: 40
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          mainImage
          date
          createdAt
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