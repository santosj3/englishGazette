import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const SportTemplate = ({ data }) => (
    <Layout>
      <h1>{data.strapiSport.name}</h1>
     
    </Layout>
  )
  
export default SportTemplate

export const query = graphql`
  query SportTemplate($id: String!) {
    strapiSport(id: { eq: $id }) {
      id
      name
    }
  }
` 