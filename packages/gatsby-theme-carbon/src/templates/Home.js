import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import Layout from '../components/Layout';

const HomePage = ({ children }) => (
  <Layout homepage>
    <div className="container--homepage">
      <main className="page-content bx--grid" id="maincontent">
        {children}
      </main>
    </div>
    <WebsiteBackToTopBtn />
  </Layout>
);

export default HomePage;
