exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'SitePage') {
    createNodeField({
      node,
      name: `slug`,
      value: node.path,
    })
  }
}
