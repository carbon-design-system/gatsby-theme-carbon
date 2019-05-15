import React from 'react';
import { pageDescription } from './PageDescription.module.scss';

const PageDescription = ({ children }) => (
  <section className={pageDescription}>{children}</section>
);

export default PageDescription;
