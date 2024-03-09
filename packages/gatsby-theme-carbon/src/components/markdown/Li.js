import React from 'react';
import { ListItem } from '@carbon/react';

const { Provider, Consumer: LiConsumer } = React.createContext({
  hasListItemParent: false,
});

const Li = ({ children, ...rest }) =>
  React.createElement(
    ListItem,
    { ...rest },
    React.createElement(
      Provider,
      { value: { hasListItemParent: true } },
      children
    )
  );

// eslint-disable-next-line no-restricted-exports
export { Li as default, LiConsumer };
