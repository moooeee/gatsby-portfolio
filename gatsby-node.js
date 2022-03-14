exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(
      "ooohhhhhhhh, there is an error, fixxxxxxx ittttttttt quickkkkly!!!!!"
    )
  }

  const posts = result.data.allMdx.nodes
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1]
    const next = index === 0 ? null : posts[index - 1]
    actions.createPage({
      path: "blog/" + post.frontmatter.slug,
      component: require.resolve("./src/templates/post.js"),
      context: {
        slug: post.frontmatter.slug, // this is gonna be a variable passed for the query that the post.js file exposes
        next,
        previous,
      },
    })
  })
}
