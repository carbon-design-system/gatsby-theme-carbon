var theme /*: PrismTheme */ = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "rgb(23, 23, 23)",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: "none",
    overflow: "auto",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "hotpink"
      }
    },
    {
      types: ["punctuation"],
      style: {
        color: "#fefefe"
      }
    },
    {
      types: ["property", "tag", "constant", "symbol", "deleted"],
      style: {
        color: "#ffa07a"
      }
    },
    {
      types: ["number", "boolean"],
      style: {
        color: "#00e0e0"
      }
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "#abe338"
      }
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: "#00e0e0"
      }
    },

    {
      types: ["string"],
      languages: ["css"],
      style: {
        color: "#00e0e0"
      }
    },
    {
      types: ["atrule", "attr-value", "function"],
      style: {
        color: "#ffd700"
      }
    },
    {
      types: ["keyword"],
      style: {
        color: "#00e0e0"
      }
    },
    {
      types: ["regex", "important"],
      style: {
        color: "#ffd700"
      }
    },
    {
      types: ["bold", "important"],
      style: {
        fontWeight: "bold"
      }
    },
    {
      types: ["italic", "important"],
      style: {
        fontWeight: "italic"
      }
    },
    {
      types: ["entity"],
      style: {
        cursor: "help"
      }
    },
  ]
};

module.exports = theme;
