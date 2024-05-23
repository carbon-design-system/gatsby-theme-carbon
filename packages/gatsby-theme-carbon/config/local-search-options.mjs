const defaultLocalSearchOptions = {
  // A unique name for the search index. This should be descriptive of
  // what the index contains. This is required.
  name: 'pages',

  // Set the search engine to create the index. This is required.
  // The following engines are supported: flexsearch, lunr
  engine: 'lunr',

  // Provide options to the engine. This is optional and only recommended
  // for advanced users.
  //
  // Note: Only the flexsearch engine supports options.
  engineOptions: 'default',

  // GraphQL query used to fetch all data for the search index. This is
  // required.
  query: `
          {
            allMdx {
              nodes {
                id
                frontmatter {
                  description
                  title
                }
                body
                internal {
                  contentFilePath
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
  store: ['id', 'description', 'title', 'path'],

  // Function used to map the result from the GraphQL query. This should
  // return an array of items to index in the form of flat objects
  // containing properties to index. The objects must contain the `ref`
  // field above (default: 'id'). This is required.
  normalizer: ({ data }) =>
    data.allMdx.nodes.map((node) => ({
      id: node.id,
      description: node.frontmatter.description,
      title: node.frontmatter.title,
      body: node.body,
      path: node.internal.contentFilePath,
    })),
};
export default defaultLocalSearchOptions;
