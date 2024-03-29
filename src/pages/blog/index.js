import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
  return (
      <Layout pageTitle="My Blog Posts">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
              {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date_published}</p>
          </article>
        ))}
      </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date_published, order: DESC}) {
      nodes {
        frontmatter {
            date_published(formatString: "YYYY-MM-DD")
            title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage