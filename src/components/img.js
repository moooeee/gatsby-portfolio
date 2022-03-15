import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.src)
      })
      if (!image) {
        return null
      }

      return (
        <Img
          alt={props.alt}
          fluid={image.node.childImageSharp.fluid}
          style={props.style}
          imgStyle={props.imgStyle}
        />
      )
    }}
  />
)

export default Image
