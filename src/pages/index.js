import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome</h1>
    <p>You can do anything</p>
    <p>
      <Link to="/gallery/">Gallery</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
