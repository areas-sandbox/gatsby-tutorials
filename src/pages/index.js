// import
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// define component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I’m making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/christian.jpeg"
        alt="Christian Areas"
      />
    </Layout>
  )
}

// export component
export default IndexPage
