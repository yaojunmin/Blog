import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ReackMarkdown from 'react-markdown';

export default ({ data }) => {
  // const post = data.markdownRemark;
  // return (
  //   <Layout>
  //     <div>
  //       <h1>{post.frontmatter.title}</h1>
  //       <div dangerouslySetInnerHTML={{ __html: post.html }} />
  //     </div>
  //   </Layout>
  // )

  const Image = props => {
    return <img alt="" {...props} style={{maxWidth: '100%'}} />
  }
  const post = data.strapiPost
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <ReackMarkdown
          source={post.content}
          renderers={{image: Image}}
        />
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `

export const query = graphql`
  query($id: String!) {
    strapiPost(id: {eq: $id}) {
      content
      title
    }
  }
`