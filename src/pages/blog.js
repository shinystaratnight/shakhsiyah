import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPageMain from "../components/blog"
import Seo from "../components/layout/seo"

export const query = graphql`
  query {
    allFile(
      filter: {sourceInstanceName: {eq: "seo-images"}, name: {in: "blog"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`

const BlogPage = ({ data }) => {
  const seoImageUrl = data.allFile.edges[0]?.node?.publicURL
  return (
    <Layout>
      <Seo
        image={seoImageUrl?.length > 1 ? `https://shakhsiyah.netlify.app${seoImageUrl}` : null}
        description="Shakhsiyah Schools are governed by the Principles of Shakhsiyah Education, which have been developed through extensive research in order to generate a 21st century Islamic educational model that is true to the Qur’an and sunnah."
        title="Shakhsiyah Schools"
      />
      <BlogPageMain />
    </Layout>
  )
}

export default BlogPage
