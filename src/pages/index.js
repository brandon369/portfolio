import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ContentHome from "../components/organisms/ContentHome/ContentHome"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentHome />

  </Layout>
)

export default IndexPage
