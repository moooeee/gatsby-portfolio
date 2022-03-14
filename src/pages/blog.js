import React from "react"
import usePosts from "../hooks/usePosts"
import BlogLayout from "../layouts/blogLayout"
import GlobalStyles from "../styles/GlobalStyles"
import Post from "../components/post"

function Blog() {
  return (
    <BlogLayout>
      <GlobalStyles />
      {usePosts().map(post => {
        return (
          <Post
            title={post.title}
            subTitle={post.subTitle}
            time={post.time}
            description={post.description}
            slug={post.slug}
            readingTime={post.readingTime}
          >
            {/* <div>{post.title}</div>
            <div>{post.author}</div>
            <div>{post.excerpt}</div> */}
            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
            <br />
          </Post>
        )
      })}
    </BlogLayout>
  )
}

export default Blog
