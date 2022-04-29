import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from '../components/image'
import Date from '../components/date'
import { Helmet } from "react-helmet"
import { LOGO_SPORTS, CANNONNICAL_URL, STYLE_URL } from "../utils/Constants";
const SportTemplate = ({ data, pageContext }) => {
  const logo = LOGO_SPORTS.find(
    (item) => item.id === data.strapiSport.slug
  )?.url;
  const { numPages, currentPage } = pageContext;
  return (
    <>
      <Header sports={data.allStrapiSport.edges} />
      <Helmet
        title={data.strapiSport.name}
        titleTemplate={"Gazeta - %s"}
        htmlAttributes={{
          lang: "pt-BR",
        }}
      >
        <meta http-equiv="content-language" content="pt-BR" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DNYR5XDG2H"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DNYR5XDG2H');`}
        </script>
        <script>
          {`(function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "bo771inyeh");`}
        </script>
        <meta
          name="google-site-verification"
          content="rSyIix3thcMTM9NDtS7DsAVbA9Tzpn48KcQWIdiBOGc"
        />
        <meta
          name="description"
          content={`Tudo sobre ${data.strapiSport.name}`}
        />
        <meta name="msvalidate.01" content="05531788A36D9ACC3B731D1C81E82CB2" />
        <meta name="image" content={logo} />
        <meta
          property="og:url"
          content={`${CANNONNICAL_URL}/${data.strapiSport.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content={data.strapiSport.name} />
        <meta
          property="og:description"
          content={`Tudo sobre ${data.strapiSport.name}`}
        />
        <meta property="og:image" content={logo} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.strapiSport.name} />
        <meta
          name="twitter:description"
          content={`Tudo sobre ${data.strapiSport.name}`}
        />
        <meta name="twitter:image" content={logo} />
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
        "name": "Homepage",
        "item": "${CANNONNICAL_URL}"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "${data.strapiSport.name}",
      }]
    }`}
        </script>
      </Helmet>
      <section class="single-post-area">
        <div
          class="single-post-title bg-img background-overlay"
          style={{
            backgroundImage: `url("${logo}")`,
            minHeight: "150px",
          }}
        >
          <div class="container h-100">
            <div class="row h-100 align-items-end">
              <div class="col-12">
                <div class="single-post-title-content">
                  <h1
                    style={{ color: "white", fontSize: "48px" }}
                    class="titulo-principal font-pt"
                  >
                    {data.strapiSport.name}
                  </h1>
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
                {data?.allStrapiArticle?.edges.map((article) => (
                  <Link
                    to={article.node.url}
                    class="gazette-single-todays-post d-md-flex align-items-start mb-50"
                  >
                    <div
                      class="image-single-post-mobile"
                      style={{ marginRight: "2%", width: "30%" }}
                    >
                      <Image
                        style={{ width: "100%", height: "180px" }}
                        src={article.node.cover}
                        alt={article.node.title}
                      />
                    </div>
                    <div
                      class="text-single-post-mobile"
                      style={{ width: "68%" }}
                    >
                      <div class="gazette-post-tag">
                        <Link
                          class="titulos"
                          to={`/${article.node.sport.slug}`}
                        >
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
                ))}
              </div>
            </div>
          </div>
          {numPages > 1 && (
            <div class="row">
              <div class="col-12">
                <div class="gazette-pagination-area">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      {currentPage > 1 && (
                        <li class="page-item">
                          <Link
                            activeClassName="page-link"
                            class="page-link"
                            to={
                              currentPage === 2
                                ? `/${data.strapiSport.slug}`
                                : `/${data.strapiSport.slug}/${currentPage - 1}`
                            }
                            aria-label="Previous"
                          >
                            <i class="fa fa-angle-left"></i>
                          </Link>
                        </li>
                      )}
                      {numPages > 5 && (
                        <>
                          <li class="page-item">
                            <Link
                              activeClassName="page-link pagina-seleccionada"
                              class="page-link"
                              to={`/${data.strapiSport.slug}/1`}
                            >
                              1
                            </Link>
                          </li>
                          <li class="page-item">
                            <Link
                              activeClassName="page-link pagina-seleccionada"
                              class="page-link"
                              to={`/${data.strapiSport.slug}/2`}
                            >
                              2
                            </Link>
                          </li>
                          <li class="page-item">
                            <Link
                              activeClassName="page-link pagina-seleccionada"
                              class="page-link"
                              to={`/${data.strapiSport.slug}/3`}
                            >
                              3
                            </Link>
                          </li>
                          <li class="page-item">
                            <Link
                              activeClassName="page-link pagina-seleccionada"
                              class="page-link"
                              to={`/${data.strapiSport.slug}/4`}
                            >
                              4
                            </Link>
                          </li>
                          <li class="page-item">
                            <Link
                              activeClassName="page-link pagina-seleccionada"
                              class="page-link"
                              to={`/${data.strapiSport.slug}/5`}
                            >
                              5
                            </Link>
                          </li>
                        </>
                      )}
                      {numPages < 5 &&
                        [...Array(numPages)].map((x, i) => (
                          <li class="page-item">
                            <Link
                              activeClassName="page-link pagina-seleccionada"
                              class="page-link"
                              to={
                                i === 0
                                  ? `/${data.strapiSport.slug}`
                                  : `/${data.strapiSport.slug}/${i + 1}`
                              }
                            >
                              {i + 1}
                            </Link>
                          </li>
                        ))}
                      {currentPage < numPages && (
                        <li class="page-item">
                          <Link
                            activeClassName="page-link"
                            class="page-link"
                            to={`/${data.strapiSport.slug}/${currentPage + 1}`}
                            aria-label="Next"
                          >
                            <i class="fa fa-angle-right"></i>
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer sports={data.allStrapiSport.edges} />
    </>
  );
};

export default SportTemplate;

export const query = graphql`
  query SportTemplate(
    $id: String!
    $articleSportId: String!
    $limit: Int!
    $skip: Int!
  ) {
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
      filter: { sport: { id: { eq: $articleSportId } } }
      limit: $limit
      skip: $skip
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          url
          title
          date
          dateToPresent
          datetime
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
`; 