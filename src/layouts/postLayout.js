import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import * as Styled from "../components/mdxComponents/mdx-styles"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Helmet from "react-helmet"
import { H } from "../components/mdxComponents/mdx-styles"
import CodeBlock from "../components/mdxComponents/codeBlock"
import { FullBleed } from "../components/fullBleed"
import ToggleNightMode from "../components/nightModeToggle"

function PostLayout({ children }) {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Nav>
        <Link to="/">
          <h2 style={{ color: "var(--color-primary" }}>Mohamed Al-Omari</h2>
        </Link>
        <Link
          style={{
            padding: "10px",
            color: "var(--post-text-primary)",
            marginLeft: "auto",
            marginRight: "20px",
          }}
          to="/blog"
        >
          Blog
        </Link>
        <ToggleNightMode />
      </Nav>
      <GlobalStyles />
      <Container>
        <MDXProvider
          components={{
            h1: props => <H as="h1" {...props} />,
            h2: props => <H as="h2" {...props} />,
            h3: props => <H as="h3" {...props} />,
            h4: props => <H as="h4" {...props} />,
            p: Styled.p,
            a: Styled.anchor,
            span: Styled.span,
            image: Styled.image,
            blockquote: Styled.blockquote,
            em: Styled.em,
            code: CodeBlock,
            FullBleed: props => <FullBleed {...props} />,
          }}
        >
          {children}
        </MDXProvider>
      </Container>
      <Footer>
        <h2>Designed & Built by Mohamed Al-Omari</h2>
        <p>© 2020–2021 / Copyright Mohamed Al-Omari. All rights reserved.</p>
      </Footer>
    </div>
  )
}

const Nav = styled.nav`
  padding: 10px;
  max-width: 100vw;
  max-width: clamp(700px, 83vw, 1200px);
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    user-select: none;
    border-left: 10px solid;
    display: inline-block;
    padding: 0 7px;
    font-size: 16px;
    line-height: 1;
    color: var(--color-primary);
    color: #5468ff;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:nth-child(2) {
      color: #000;
      opacity: 0.8;
    }
  }
`

const Container = styled.div`
  /* max-width: 700px; */
  padding: 10px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;

  > * {
    grid-column: 2;
  }

  .full-bleed {
    width: 100%;
    grid-column: 1 / -1;
  }
`

const Footer = styled.footer`
  padding: 15px 10px;
  max-width: 100vw;
  margin-top: 30px;
  color: var(--color-primary);
  text-align: center;
  font-size: 10px;

  h2 {
    margin: 0;
  }

  p {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 12px;
    }
    p {
      font-size: 9px;
    }
  }
`

export default PostLayout
