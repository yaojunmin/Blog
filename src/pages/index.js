// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
//     <Link to="/about/">Go to about page</Link>
//   </Layout>
// )

// export default IndexPage

import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import GatsbyIcon from '../images/gatsby-icon.png';

const Index = ({ data }) => {
  console.log(data);
  // return (
  //   <Layout>
  //     <div>
  //       <h1>文章列表</h1>
  //       <h4>共{data.allMarkdownRemark.totalCount} 篇文章</h4>
  //       {data.allMarkdownRemark.edges.map(({ node }) => (
  //         <div key={node.id}>
  //           <Link to={node.fields.slug}>
  //           <h3>
  //             {node.frontmatter.title}{" "}
  //             <span>- {node.frontmatter.date}</span>
  //           </h3>
  //           <p>{node.excerpt}</p>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   </Layout>
  // )
  return (<Layout>
    <div>
      <h1>文章列表<img src={GatsbyIcon} alt="ceshi tupian" /></h1>
      <h4>共{data.allStrapiPost.totalCount} 篇文章</h4>
      {data.allStrapiPost.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.url}>
          <h3>
            {node.title}
            <span>- {node.created_at}</span>
          </h3>
          </Link>
        </div>
      ))}
    </div>
  </Layout>)
}

export default Index;

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  {
    allStrapiPost {
      edges {
        node {
          id
          title
          url
          created_at(formatString: "YYYY-MM-DD")
        }
      }
      totalCount
    }
  }
`