import React from 'react';
import { UnorderedList } from '@carbon/react';
import { LiConsumer } from './Li.js';
import { unordered } from './Markdown.module.scss';

// eslint-disable-next-line no-unused-vars
const Ul = ({ children, className, ...rest }) =>
  React.createElement(LiConsumer, null, (value) => {
    if (value.hasListItemParent) {
      return React.createElement(
        UnorderedList,
        {
          isExpressive: true,
          nested: true,
          ...rest,
        },
        children
      );
    }
    return React.createElement(
      UnorderedList,
      {
        isExpressive: true,
        nested: false,
        className: unordered,
        ...rest,
      },
      children
    );
  });

export default Ul;
