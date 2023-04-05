const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const readingTime = require(`reading-time`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // template for tag blog list
  const tagBlogList = path.resolve(`./src/templates/tag-blog-list.js`)

  // template for single blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all tag name and markdown blog posts
  const result = await graphql(
    `
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            id
            fields {
              slug
            }
            internal {
              contentFilePath
            }
            frontmatter {
              tag
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMdx.nodes
  const tags = new Set()

  // Create blog posts pages
  posts.forEach(post => {
    for (const curTag of post.frontmatter.tag) {
      tags.add(curTag)
    }
    createPage({
      path: post.fields.slug,
      component: `${blogPost}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
      },
    })
  })

  // Create tag-blog-list pages
  for (const tag of tags) {
    createPage({
      path: "/blog/" + tag,
      component: tagBlogList,
      context: {
        tagName: tag,
      },
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = "/blog" + createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value,
    })

    createNodeField({
      node,
      name: `timeToRead`,
      value: readingTime(node.body),
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      tag: [String!]!
    }

    type Fields {
      slug: String
    }
  `)
}
