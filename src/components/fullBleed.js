import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Image from "./img"

export const FullBleed = ({ src }) => {
  return (
    <div style={{ width: "100%", gridColumn: "1 / -1", marginBottom: "30px" }}>
      <Image
        alt="some image"
        src={src}
        style={{ maxHeight: "60vh", objectFit: "cover" }}
        imgStyle={{ maxHeight: "60vh", objectFit: "cover" }}
      />
    </div>
  )
}
