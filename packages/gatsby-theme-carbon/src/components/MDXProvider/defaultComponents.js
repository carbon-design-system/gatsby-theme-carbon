/* eslint-disable react/display-name */
import React from 'react';

import { P, H1, H2, H3, H4, H5, Ul, Ol, Li, Blockquote } from '../markdown';
import PageTable from '../PageTable';
import Code from '../Code';
import PageDescription from '../PageDescription';
import Video from '../Video';
import DoDontExample from '../DoDontExample';
import DoDont from '../DoDontRow/DoDont';
import DoDontRow from '../DoDontRow/DoDontRow';
import Caption from '../Caption';
import ResourceCard from '../ResourceCard';
import ArticleCard from '../ArticleCard';
import Aside from '../Aside';
import FeatureCard from '../FeatureCard';
import ImageCard from '../ImageCard';
import ImageGallery from '../ImageGallery';
import ImageGalleryImage from '../ImageGallery/ImageGalleryImage';
import InlineNotification from '../InlineNotification';
import { Row, Column, Grid } from '../Grid';
import { AnchorLink, AnchorLinks } from '../AnchorLinks';
import { Tab, Tabs } from '../Tabs';
import Link from '../Link';
import { Accordion, AccordionItem } from '../Accordion';
import GifPlayer from '../GifPlayer';
import ArtDirection from '../ArtDirection';
import MediumPosts from '../MediumPosts';
import Title from '../Title';

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
  li: Li,
  'li.ul': props => <Ul nested {...props} />,
  'li.ol': props => <Ol nested {...props} />,
  blockquote: Blockquote,
  code: Code,
  table: PageTable,
  a: Link,
  ArtDirection,
  PageDescription,
  Accordion,
  AccordionItem,
  Video,
  DoDontExample,
  DoDont,
  DoDontRow,
  Row,
  Column,
  GifPlayer,
  Grid,
  Caption,
  ResourceCard,
  ArticleCard,
  Aside,
  FeatureCard,
  ImageCard,
  ImageGallery,
  ImageGalleryImage,
  AnchorLink,
  AnchorLinks,
  Tab,
  Tabs,
  InlineNotification,
  MediumPosts,
  Title,
};

export default components;
