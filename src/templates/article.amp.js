import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
     <amp-img src-set={data.strapiArticle.mainImage} src={data.strapiArticle.mainImage} width="200" height="200" alt={data.strapiArticle.title} layout="responsive" />
     <p>{data.strapiArticle.description}</p>
     <div  dangerouslySetInnerHTML={{__html: data.strapiArticle.content}}></div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate2($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      description
      cover
      content
    }
  }
`