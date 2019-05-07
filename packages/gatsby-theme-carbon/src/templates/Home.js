import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import Layout from '../components/Layout';
import Banner from '../components/Homepage/Banner';
import Callout from '../components/Homepage/Callout';
import Light from '../images/blossom.jpg';
import Main from '../components/Main';

const Homepage = ({
  children,
  Banner: UserBanner,
  FirstCallout,
  SecondCallout,
  ...rest
}) => (
  <Layout homepage>
    {UserBanner}
    {FirstCallout}
    <Main>{children}</Main>
    {SecondCallout}
    <WebsiteBackToTopBtn />
  </Layout>
);

Homepage.defaultProps = {
  Banner: (
    <Banner
      renderText={() => (
        <h1>
          Carbon
          <br />
          Design System
        </h1>
      )}
      image={Light}
    />
  ),
  FirstCallout: <Callout />,
  SecondCallout: <Callout color="white" backgroundColor="activePrimary" />,
};

export default Homepage;
