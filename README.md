# Gatsby Starter Theme

Gatsby starter for creating a theme

```shell
gatsby new my-theme https://github.com/ChristopherBiscardi/gatsby-starter-theme
cd my-theme
yarn workspace gatsby-theme-minimal-example develop
```

## Layout

```shell
➜ tree . -L 2 -I node_modules
.
├── README.md
├── gatsby-theme-minimal
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock

3 directories, 10 files
```

### gatsby-theme-minimal

This directory is the theme package itself. You should rename this at
some point to be `gatsby-theme-my-theme-name`. Also change the
`package.json` name field and the corresponding dependency in the
example directory's `package.json`/`gatsby-config.js`.

- `gatsby-theme-minimal/`
  - gatsby-config.js
    An empty gatsby-config that you can use as a starting point for
    building functionality into your theme.
  - index.js
    Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - package.json
    The dependencies that your theme will pull in when people install
    it. `gatsby` should be a `peerDependency`.

### example

This is an example usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - gatsby-config.js
    Specifies which theme to use and any other one-off config a site
    might need.
  - src/
    source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```sh
yarn workspace example start
```
