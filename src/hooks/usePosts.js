import { graphql, useStaticQuery } from "gatsby"

export default function usePosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___time], order: DESC }) {
        nodes {
          excerpt
          frontmatter {
            slug
            author
            title
            time
            description
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  `)

  return data.allMdx.nodes.map(node => ({
    excerpt: node.excerpt,
    author: node.frontmatter.author,
    slug: node.frontmatter.slug,
    title: node.frontmatter.title,
    description: node.frontmatter.description,
    time: node.frontmatter.time,
    readingTime: node.fields.readingTime.text,
  }))
}
