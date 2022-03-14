import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"

function Post({ title, subTitle, time, description, slug, readingTime }) {
  return (
    <ReadLink to={`/blog/${slug}`}>
      <GlobalStyles />
      <Article>
        <Title>{title}</Title>
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <Time>
          {new Date(time).toLocaleDateString("en-EG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {readingTime} ☕
        </Time>
        <Description>{description}</Description>
      </Article>
    </ReadLink>
  )
}

const ReadLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Article = styled.article`
  padding: 20px;
  border-radius: 25px;
  transition: all 0.3s ease;
  margin-bottom: 15px;

  > * {
    margin: 0;
  }

  &:hover {
    /* background: #eeeeee7a; */
    background: var(--color-primary-2);
  }
`

const Title = styled.h3`
  font-size: 26px;
  margin-bottom: 5px;
  color: var(--post-text-primary);
`

const SubTitle = styled.h4`
  font-size: 16px;
  color: var(--post-text-primary);
  opacity: 0.8;
`

const Time = styled.div`
  font-size: 14px;
  opacity: 0.8;
  color: var(--post-text-primary);
  opacity: 0.6;
`

const Description = styled.div`
  font-size: 16px;
  color: var(--post-text-primary);
  opacity: 0.8;
`

export default Post
