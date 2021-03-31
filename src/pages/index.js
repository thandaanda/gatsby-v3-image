import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const gatsbyImageData = data.allImageSharp.edges[0].node.gatsbyImageData
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/c88c3933-d5b4-466a-9714-826b1ecbeed4.jpg"
        layout={"fullWidth"}
        placeholder={"tracedSVG"}
        formats={["AUTO", "WEBP"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />

      <GatsbyImage alt="Feature Image" image={gatsbyImageData} />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export const indexPageQuery = graphql`
  query MyQuery {
    allImageSharp(
      filter: {
        original: {
          src: {
            eq: "/static/c88c3933-d5b4-466a-9714-826b1ecbeed4-741a819b427f47c63b344c64e9d760c1.jpg"
          }
        }
      }
    ) {
      edges {
        node {
          id
          gatsbyImageData(
            formats: [AUTO, WEBP]
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
          )
        }
      }
    }
  }
`

export default IndexPage
