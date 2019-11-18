module.exports = {
  languages: [
    {
      name: 'en',
      filterNodes: node => node.context && node.context.MdxNode,
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
      path: node => node.path,
      title: node => node.context.frontmatter.title,
      description: node => node.context.frontmatter.description,
      keywords: node => node.context.frontmatter.keywords,
      content: node => node.context.MdxNode.internal.content,
    },
  },
};
