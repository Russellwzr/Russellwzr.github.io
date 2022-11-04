import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/common"
import { TagButtonList, BlogPosts } from "../components/blogs"

const BlogIndex = () => {
  return (
    <Layout>
      <div className="mt-16">
        <TagButtonList checkedName="All" />
      </div>
      <BlogPosts tagName="All" />
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />
