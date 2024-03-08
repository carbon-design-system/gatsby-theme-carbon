import React from 'react';
import { OrderedList } from '@carbon/react';
import { LiConsumer } from './Li.js';
import { ordered } from './Markdown.module.scss';

const Ol = ({ children, className, ...rest }) =>
  React.createElement(LiConsumer, null, (value) => {
    if (value.hasListItemParent) {
      return React.createElement(
        OrderedList,
        {
          isExpressive: true,
          nested: true,
          native: true,
          ...rest,
        },
        children
      );
    }
    return React.createElement(
      OrderedList,
      {
        isExpressive: true,
        nested: false,
        native: true,
        className: ordered,
        ...rest,
      },
      children
    );
  });

export default Ol;
