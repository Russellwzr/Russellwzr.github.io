import { useStaticQuery, graphql } from "gatsby"

const useFetchBlogPosts = tagName => {
  const result = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              tag
            }
          }
        }
      }
    `
  )
  const posts = result.allMdx.nodes
  if (tagName === "All") return posts
  return posts.filter(post => {
    for (let curTagName of post.frontmatter.tag) {
      if (tagName === curTagName) return true
    }
    return false
  })
}

export default useFetchBlogPosts
