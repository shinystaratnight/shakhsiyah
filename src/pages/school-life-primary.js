import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import BlogDetailsPageMain from "../components/schoolLifePrimary"

const BlogDetailsPage = () => (
  <Layout>
    <BlogDetailsPageMain />
  </Layout>
)

export default BlogDetailsPage

export const Head = () => (
  <Seo />
)