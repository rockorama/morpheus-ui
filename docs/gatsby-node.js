exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'SitePage') {
    createNodeField({
      node,
      name: `slug`,
      value: node.path,
    })
  }
}
