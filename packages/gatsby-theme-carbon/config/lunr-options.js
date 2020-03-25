module.exports = {
  languages: [
    {
      name: 'en',
      filterNodes: (node) =>
        // Lunr let's you filter non-mdx nodes. We only want to filter MDX nodes that aren't hiddenFromSearch
        node.context &&
        node.context.MdxNode &&
        !node.context.frontmatter.hiddenFromSearch,
    },
  ],
  fields: [
    { name: 'title', store: true, attributes: { boost: 30 } },
    { name: 'keywords' },
    { name: 'path', store: true },
    { name: 'description', store: true },
    { name: 'content' },
  ],
  resolvers: {
    SitePage: {
      path: (node) => node.path,
      title: (node) => node.context.frontmatter.title,
      description: (node) => node.context.frontmatter.description,
      keywords: (node) => node.context.frontmatter.keywords,
      content: (node) => node.context.MdxNode.internal.content,
    },
  },
};
