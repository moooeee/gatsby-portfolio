import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import nightOwlDark from "prism-react-renderer/themes/nightOwl"

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, "")

  // let highlight = metastring.split(",").map(i => {
  //   let j = i.trim()
  //   if (j[0] === "{") j = j[1]
  //   if (j[j.length - 1] === "}") j = j[0]
  //   return Number(j)
  // })

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={nightOwlDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            borderRadius: "20px",
            margin: "20px 0",
            position: "relative",
          }}
        >
          {tokens.map((line, i) => {
            if (line[0].empty && i === tokens.length - 1) return
            // const lineProps = getLineProps({ line, key: i })
            // if (highlight.includes(i)) {
            //   lineProps.className = `${lineProps.className} highlight-line`
            // }
            return (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
          <LanguageTag language={language} />
        </pre>
      )}
    </Highlight>
  )
}

function LanguageTag({ language }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: "20px",
        padding: "0 5px",
        color: "black",
        background: "rgb(127, 219, 202)",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
      }}
    >
      {language}
    </div>
  )
}
