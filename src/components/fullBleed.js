import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from "./img"

export const FullBleed = ({ src }) => {
  // console.log(props)
  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "meerkat.jpg" }) {
  //       # placeholderImage: file(relativePath: { eq: props.src }) {
  //       childImageSharp {
  //         fluid(maxWidth: 2000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div style={{ width: "100%", gridColumn: "1 / -1", marginBottom: "30px" }}>
      <Image
        alt="some image"
        src={src}
        style={{ maxHeight: "60vh", objectFit: "cover" }}
        imgStyle={{ maxHeight: "60vh", objectFit: "cover" }}
      />
      {/* <Img
        style={{ maxHeight: "60vh", objectFit: "cover" }}
        imgStyle={{ maxHeight: "60vh", objectFit: "cover" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      /> */}
      {/* <img
        src="./meerkat.jpg"
        alt="Golden Bridge"
        style={{ width: "100%", height: "auto" }}
      /> */}
    </div>
  )
}
