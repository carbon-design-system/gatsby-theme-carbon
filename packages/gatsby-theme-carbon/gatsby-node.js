const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const startCase = require('lodash.startcase');

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, 'src/images'),
    path.join(program.directory, 'src/data'),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

// We need to provide the actual file that created a specific page to append links for EditLink.
// We can't do page queries from MDX templates, so we'll add the page's relative path to context after it's created.
// The context object **is** supplied to MDX templates through the pageContext prop.
exports.onCreatePage = (
  { page, actions, getNodesByType, ...rest },
  pluginOptions
) => {
  // Don't override if it's already been provided
  if (!page.context.MdxNode) {
    // Find the MdxNode that created our page
    const MdxNode = getNodesByType('Mdx').find(
      ({ fileAbsolutePath }) => fileAbsolutePath === page.component
    );
    let frontmatter = {
      ...page.context.frontmatter,
    };

    const { titleType = 'page' } = pluginOptions;
    const { createPage, deletePage } = actions;
    const [relativePagePath] = page.componentPath
      .split('src/pages')
      .splice('-1');

    // Inject titles and descriptions for pages that don't include them
    if (!frontmatter.title) {
      const title = page.path
        .split('/')
        .filter((part) => part)
        .map((part) => startCase(part))
        .join(' / ');

      frontmatter = {
        description: title,
        ...frontmatter,
        title,
      };
    }

    if (MdxNode) {
      Object.assign(MdxNode, { frontmatter });
    }

    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        relativePagePath,
        titleType,
        frontmatter,
        MdxNode,
      },
    });
  }
};

// In the case where none of the nav items have child pages, an error occurs in the left nav
// that prevents the site from working because of the missing "title" field. Previous solutions
// were providing at least 1 nested page, but that resulted in the bottom navigation to that page
// reading "Resources: Resources" (as an example). By overriding the type definitions for
// NavItemsYaml we can allow the title to be nullable, which fixes this issue.

// Create medium feed schema incase the plugin isn't used or you're on an ✈️
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `
  type NavItemsYamlPage {
    title: String
    path: String!
  }
  type NavItemsYaml implements Node {
    title: String!
    pages: [NavItemsYamlPage]!
    hasDivider: Boolean
  }`,
    schema.buildObjectType({
      name: 'MediumFeed',
      interfaces: ['Node'],
      fields: {
        author: 'String',
        slug: 'String',
        thumbnail: 'String',
        title: 'String',
        link: 'String',
        date: {
          type: 'Date',
          extensions: {
            dateformat: {},
          },
        },
      },
    }),
  ];

  createTypes(typeDefs);
};
