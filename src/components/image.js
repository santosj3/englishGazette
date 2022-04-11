import React from "react"

const Image = ({style, src, alt}) => (
  <img loading="lazy" style={style} src={src} alt={alt} />
)
export default Image
