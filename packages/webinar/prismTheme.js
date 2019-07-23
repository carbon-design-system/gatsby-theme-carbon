const theme /* : PrismTheme */ = {
  plain: {
    backgroundColor: '#171717',
    color: '#fff',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#bebebe',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['tag', 'operator'],
      style: {
        color: '#6ea6ff',
      },
    },
    {
      types: ['property', 'function', 'attr-name'],
      style: {
        color: '#92eeee',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#ffffff',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#fa75a6',
      },
    },
    {
      types: ['entity'],
      style: {
        cursor: 'help',
      },
    },
    {
      types: [
        'boolean',
        'entity',
        'url',
        'attr-value',
        'control',
        'directive',
        'unit',
        'statement',
        'regex',
        'at-rule',
        'selector',
        'keyword',
        'placeholder',
      ],
      style: {
        color: '#bb8eff',
      },
    },
    {
      types: ['deleted'],
      style: {
        textDecorationLine: 'line-through',
      },
    },
    {
      types: ['inserted'],
      style: {
        borderBottom: '1px dotted #c22dd5',
        textDecorationLine: 'underline',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold',
      },
    },
    {
      types: ['important'],
      style: {
        color: '#c94922',
      },
    },
  ],
};

export default theme;
