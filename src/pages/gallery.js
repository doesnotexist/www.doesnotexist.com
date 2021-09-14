import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Gallery = () => (
  <Layout>
    <Seo title="Gallery" />
    <h1>Gallery</h1>
    <Link to="/">DoesNotExist</Link>
  </Layout>
)

export default Gallery
