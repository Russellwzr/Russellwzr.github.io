import React, { useState } from "react"
import BlogCard from "./BlogCard"
import PostsPagination from "./PostsPagination"
import { useFetchBlogPosts } from "../../hooks"

const postsPerPage = 20

const BlogPosts = ({ tagName }) => {
  const params = new URLSearchParams(
    typeof window !== "undefined" && window.location.search
  )
  let curPageParams = params.get("page") ?? 1
  curPageParams = parseInt(curPageParams)
  const [page, setPage] = useState(curPageParams)
  const posts = useFetchBlogPosts(tagName)
  const pageCount = Math.ceil(posts.length / postsPerPage)
  const beginIndex = (page - 1) * postsPerPage
  const renderPosts = posts.slice(
    beginIndex,
    Math.min(beginIndex + postsPerPage, posts.length)
  )

  if (renderPosts.length == 0) {
    return (
      <>
        <p>No blog posts in this page! Please return to the previous page.</p>
      </>
    )
  }

  const handlePageChange = addNumber => {
    const pageNumber = page + addNumber
    params.set("page", pageNumber)
    if (typeof window !== "undefined") {
      window.history.pushState(
        { page: pageNumber },
        document.title,
        `${window.location.pathname}?${params}`
      )
    }
    setPage(prevState => prevState + addNumber)
  }

  return (
    <>
      <ol className="mt-10" style={{ listStyle: `none` }}>
        {renderPosts.map(post => {
          return <BlogCard key={post.fields.slug} post={post} />
        })}
      </ol>
      <div className="mt-20 flex justify-center">
        <PostsPagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
        />
      </div>
    </>
  )
}

export default BlogPosts
