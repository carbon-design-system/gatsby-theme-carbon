import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import {
  HomepageHeader,
  HomepageFooter,
} from '../components/Homepage/Homepage';
import Layout from '../components/PageLayout';

const HomePage = () => (
  <Layout homepage>
    <div className="container--homepage">
      <HomepageHeader />
      <main className="page-content ibm--grid" id="maincontent" />
      <HomepageFooter />
    </div>
    <WebsiteBackToTopBtn />
  </Layout>
);

export default HomePage;
