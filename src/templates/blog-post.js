import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/layout'
import { Seo } from '../components/common'

const BlogPostTemplate = ({ data: { mdx: post }, children }) => {
  return (
    <Layout>
      <article className="prose max-w-none dark:prose-invert" itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export const Head = ({ data: { mdx: post } }) => {
  return <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
}

export const pageQuery = graphql`
  query BlogPostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tag
        title
      }
      fields {
        timeToRead {
          minutes
          time
          words
        }
      }
    }
  }
`

export default BlogPostTemplate
