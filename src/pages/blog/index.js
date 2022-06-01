import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog Posts">
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Published: {node.frontmatter.published}</p>
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
        slug
      }
    }
  }
  `

export default BlogPage
