import * as React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/common"
import { TagButtonList, BlogPosts } from "../components/blogs"

const BlogIndex = ({ pageContext }) => {
  return (
    <Layout>
      <div className="mt-16">
        <TagButtonList checkedName={pageContext.tagName} />
      </div>
      <BlogPosts tagName={pageContext.tagName} />
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="Tag Posts" />
