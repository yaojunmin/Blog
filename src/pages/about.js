import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

const About = ({data}) => (
  <Layout>
    <h1>yjm About {data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.description}</p>
    <Link to='/'>Go back to the homepage</Link>
  </Layout>
)

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }  
`