import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';
import { P, H1, H2, H3, H4, H5, Ul, Ol, Blockquote } from './markdown';
import PageTable from './PageTable';
import Code from './Code';
import PageDescription from './PageDescription';
import Video from './Video';
import DoDontExample from './DoDontExample';
import Caption from './Caption';
import ResourceCard from './ResourceCard';
import ArticleCard from './ArticleCard';
import Aside from './Aside';
import FeatureCard from './FeatureCard';
import ImageCard from './ImageCard';
import { Row, Column, Grid } from './Grid';
import { AnchorLink, AnchorLinks } from './AnchorLinks';
import { Tab, Tabs } from './Tabs';
import Link from './Link';

const components = {
  wrapper: function Wrapper({ children, ...props }) {
    return <div {...props}>{children}</div>;
  },
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  p: P,
  ol: Ol,
  ul: Ul,
  blockquote: Blockquote,
  pre: Code,
  table: PageTable,
  a: Link,
  PageDescription,
  Video,
  DoDontExample,
  Row,
  Column,
  Grid,
  Caption,
  ResourceCard,
  ArticleCard,
  Aside,
  FeatureCard,
  ImageCard,
  AnchorLink,
  AnchorLinks,
  Tab,
  Tabs,
};

const MDXProvider = ({ children }) => (
  <Provider components={components}>{children}</Provider>
);

export default MDXProvider;
