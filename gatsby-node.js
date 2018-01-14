/* eslint no-useless-escape: 0 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark` && /src\/pages\/blog\//gi.test(node.fileAbsolutePath)) {
    const slug = createFilePath({ node, getNode, basePath: `pages/blog` })
    console.log(slug)
    createNodeField({
      node,
      name: `slug`,
      value: `blog` + slug
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src\/pages\/blog/" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node.fields.slug)
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
}
