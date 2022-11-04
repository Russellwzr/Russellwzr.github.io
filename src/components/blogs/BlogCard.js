import React from "react"
import { Link } from "gatsby"
import { StyledBlogCard } from "./styles"

const BlogCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  return (
    <li>
      <StyledBlogCard
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h2>
            <Link to={post.fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: post.frontmatter.description || post.excerpt,
            }}
            itemProp="description"
          />
        </section>
      </StyledBlogCard>
      <hr className="mt-4" />
    </li>
  )
}

export default BlogCard
