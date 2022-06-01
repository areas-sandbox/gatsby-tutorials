import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Published: {node.frontmatter.published}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>
          ))
        }
    </Layout>
  )
}

export const query = graphql
  `
  query {
    allMdx(sort: {fields: frontmatter___published, order: DESC}) {
      nodes {
        frontmatter {
          title
          published(formatString: "MMMM D, YYYY")
        }
        id
        body
      }
    }
  }
  `

export default BlogPage
