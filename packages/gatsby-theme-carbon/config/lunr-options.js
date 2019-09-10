const getFrontmatter = (node, item) => {
  if (node.context && node.context.frontmatter) {
    return node.context.frontmatter[item];
  }
  return '';
};

module.exports = {
  languages: [{ name: 'en' }],
  fields: [
    { name: 'title', store: true, attributes: { boost: 20 } },
    { name: 'keywords', attributes: { boost: 5 } },
    { name: 'path', store: true },
    { name: 'description', store: true },
    { name: 'content' },
  ],
  resolvers: {
    SitePage: {
      title: node => getFrontmatter(node, 'title'),
      path: node => node.path,
      description: node => getFrontmatter(node, 'description'),
      keywords: node => getFrontmatter(node, 'keywords'),
      content: node =>
        node.context && node.context.MdxNode
          ? node.context.MdxNode.internal.content
          : '',
    },
  },
};
