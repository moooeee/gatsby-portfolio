import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"
import ToggleNightMode from "../components/nightModeToggle"

function BlogLayout({ children }) {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Helmet>
      <Nav>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2>Mohamed Al-Omari</h2>
        </Link>
        <ToggleNightMode />
      </Nav>
      <Container>
        <Title>Blog</Title>
        {children}
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h2 {
    user-select: none;
    border-left: 10px solid;
    display: inline-block;
    padding: 0 7px;
    font-size: 16px;
    line-height: 1;
    color: var(--color-primary);
    /* color: #5468ff; */
  }
`

const Container = styled.div`
  max-width: 700px;
  padding: 10px;
  margin: auto;
`

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  color: var(--post-text-primary);
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

export default BlogLayout
