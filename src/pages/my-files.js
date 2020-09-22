import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import './demo.scss';
import module from './demo.module.scss';

export default ({ data }) => {
  console.log(module)
  console.log(data);
  return (
    <Layout>
      <div>
        <h1 className={module.red}>my site's files</h1>
        <table>
          <thead>
            <tr>
              <th className='red'>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`