import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostLayout from "../layouts/postLayout"
import GlobalStyles from "../styles/GlobalStyles"
import styled from "styled-components"

export default function Post({ data: { mdx: post }, pageContext }) {
  return (
    <PostLayout>
      <GlobalStyles />
      <PostMain>
        <Title>{post.frontmatter.title}</Title>
        <SubTitle>{post.frontmatter.subTitle}</SubTitle>
        <Time>
          {new Date(post.frontmatter.time).toLocaleDateString("en-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {post.fields.readingTime.text} ☕
        </Time>
      </PostMain>
      <MDXRenderer>{post.body}</MDXRenderer>
      <div
        style={{
          marginBottom: "10px",
          marginTop: "70px",
          clear: "both",
          overflow: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {pageContext.previous && (
          <PostLink
            style={{
              maxWidth: "200px",
              height: "100%",
              marginRight: "20px",
              textAlign: "center",
            }}
            to={`/blog/${pageContext.previous.frontmatter.slug}`}
          >
            &larr; {pageContext.previous.frontmatter.title}
          </PostLink>
        )}
        {pageContext.next && (
          <PostLink
            style={{
              float: "right",
              marginLeft: "20px",
              maxWidth: "200px",
              height: "100%",
              textAlign: "center",
            }}
            to={`/blog/${pageContext.next.frontmatter.slug}`}
          >
            {pageContext.next.frontmatter.title} &rarr;
          </PostLink>
        )}
      </div>
    </PostLayout>
  )
}

const PostMain = styled.div`
  text-align: center;
  margin-bottom: 50px;

  > * {
    margin: 0;
  }
`

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
  line-height: 1;
  color: var(--post-text-primary);
`

const SubTitle = styled.h3`
  color: var(--post-text-primary);
  opacity: 0.8;
`

const Time = styled.p`
  font-size: 14px;
  color: var(--post-text-primary);
  opacity: 0.7;
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: #000;
  opacity: 0.85;
  position: relative;
  color: var(--post-text-primary);

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
    /* background: #000; */
    background: var(--post-text-primary);
    opacity: 0.5;
  }
`

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        subTitle
        time
      }
      body
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
