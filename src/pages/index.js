import React from "react"
import { Layout } from "../components/layout"
import { Seo } from "../components/common"
import { Hero } from "../components/home"

const BlogIndex = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="Home" />
