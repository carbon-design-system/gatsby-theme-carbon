const defaultLocalSearchOptions = {
  name: 'pages',
  engine: 'flexsearch',

  // Provide options to the engine. This is optional and only recommended
  // for advanced users.
  //
  // Note: Only the flexsearch engine supports options.
  engineOptions: 'speed',

  // GraphQL query used to fetch all data for the search index. This is
  // required.
  query: `
    {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  `,

  // Field used as the reference value for each document.
  // Default: 'id'.
  ref: 'id',

  // List of keys to index. The values of the keys are taken from the
  // normalizer function below.
  // Default: all fields
  index: ['title', 'body'],

  // List of keys to store and make available in your UI. The values of
  // the keys are taken from the normalizer function below.
  // Default: all fields
  store: ['id', 'path', 'title'],

  // Function used to map the result from the GraphQL query. This should
  // return an array of items to index in the form of flat objects
  // containing properties to index. The objects must contain the `ref`
  // field above (default: 'id'). This is required.
  normalizer: ({ data }) =>
    data.allMdx.nodes.map((node) => ({
      id: node.id,
      path: node.frontmatter.path,
      title: node.frontmatter.title,
      body: node.body,
    })),
};
export default defaultLocalSearchOptions;
