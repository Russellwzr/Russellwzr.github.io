import * as React from "react"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Seo } from "../components/common"
import { StyledBlogArticle } from "../components/blogs/styles"

const BlogPostTemplate = ({
  data: { previous, next, mdx: post },
  children,
}) => {
  return (
    <Layout>
      <StyledBlogArticle
        className="mt-16"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <small>{post.frontmatter.date}</small>
        </header>
        {children}
      </StyledBlogArticle>
      <hr className="mt-12" />
      <nav>
        <ul className="mt-8 flex justify-between font-light md:text-lg">
          <li className="hover:text-yellow-500">
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                <span className="font-bold mr-4">{"<  "}</span>
                <span>{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li className="hover:text-yellow-500">
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                <span className="font-bold ml-4">{"  >"}</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { mdx: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export const pageQuery = graphql`
  query BlogPostTemplate(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export default BlogPostTemplate
