import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

function mapToHeading(h, text) {
  if (h === "h1") {
    return (
      <h1 style={{ margin: 0, color: "var(--post-text-primary)" }}>{text}</h1>
    )
  } else if (h === "h2") {
    return (
      <h2 style={{ margin: 0, color: "var(--post-text-primary)" }}>{text}</h2>
    )
  } else if (h === "h3") {
    return (
      <h3 style={{ margin: 0, color: "var(--post-text-primary)" }}>{text}</h3>
    )
  } else if (h === "h4") {
    return (
      <h4 style={{ margin: 0, color: "var(--post-text-primary)" }}>{text}</h4>
    )
  } else {
    return (
      <h1 style={{ margin: 0, color: "var(--post-text-primary)" }}>{text}</h1>
    )
  }
}

export function H({ as, children }) {
  console.log(children)

  return (
    <Heading>
      <a
        style={{ float: "left", paddingRight: "4px", marginLeft: "-20px" }}
        className="anchor"
        id={children.split(" ").join("-")}
        href={`#${children.split(" ").join("-")}`}
      >
        <svg
          aria-hidden="true"
          height="16"
          version="1.1"
          viewBox="0 0 16 16"
          width="16"
          stroke="var(--color-primary)"
        >
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
          ></path>
        </svg>
      </a>
      {mapToHeading(as, children)}
    </Heading>
  )
}

export const anchor = styled(Link)`
  text-decoration: none;
  color: var(--color-secondary);
  opacity: 0.85;
  position: relative;

  &:hover :before {
    transform: scaleX(0);
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    transform: scaleX(1);
    transform-origin: center;
    transition: transform 0.35s ease;
    background: var(--color-secondary);
    opacity: 0.5;
  }
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  margin-top: 60px;

  a {
    visibility: hidden;
  }

  svg {
    @media screen and (max-width: 805px) {
      opacity: 0;
      pointer-events: none;
    }
  }

  &:hover {
    a {
      visibility: visible;
    }
  }
`

export const h1 = styled.h1`
  line-height: 1;
  margin: 0;
  margin-bottom: 28px;
`
export const h2 = styled.h2`
  margin: 0;
  margin-bottom: 28px;
  line-height: 1.15;
`
export const h3 = styled.h3`
  line-height: 1;
  margin: 0;
  margin-bottom: 28px;
`
export const h4 = styled.h4`
  line-height: 1;
  margin: 0;
  margin-bottom: 28px;
`

export const span = styled.span`
  margin: 0;
  margin-bottom: 28px;
`

export const pre = styled.pre``

export const p = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 28px;
  color: var(--post-text-primary);

  code {
    padding: 0.15em 0.2em 0.05em;
    /* background: var(--post-thumbnail-bg); */
    background: rgba(115, 124, 153, 0.2);
    border-radius: 5px;
  }
`

export const blockquote = styled.blockquote`
  margin-left: -1.75rem;
  margin-right: 1.75rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 1.42188rem;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.75rem;
  font-size: 1.20112rem;
  line-height: 1.75rem;
  color: inherit;
  /* border-left: 0.32813rem solid hsla(0, 0%, 0%, 0.9); */
  border-left: 0.32813rem solid hsla(0, 0%, 0%, 0.9);
  border-left-color: var(--post-text-primary);
  opacity: 0.8;

  p {
    font-size: 19px;
    margin: 0;
  }

  @media only screen and (max-width: 760px) {
    margin-left: -0.6rem;
    margin-right: 0;
    padding-left: 0.98438rem;
  }
`

export const code = styled.code`
  padding: 5px;
  border-radius: 10px;
  background: #e3e3e3;
`
