import React from 'react';
import { WebsiteBackToTopBtn } from '@carbon/addons-website';
import Layout from '../components/Layout';
import { HomepageBanner, HomepageCallout } from '../components/Homepage';
import Light from '../images/blossom.jpg';
import Main from '../components/Main';

// import NextPrevious from '../components/NextPrevious';

const Homepage = ({
  children,
  Banner,
  FirstCallout,
  SecondCallout,
  ...rest
}) => (
  <Layout homepage>
    {Banner}
    {FirstCallout}
    <Main>{children}</Main>
    {SecondCallout}
    {/* <NextPrevious {...rest} /> */}
    <WebsiteBackToTopBtn />
  </Layout>
);

Homepage.defaultProps = {
  Banner: (
    <HomepageBanner
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
  FirstCallout: <HomepageCallout />,
  SecondCallout: (
    <HomepageCallout color="inverse01" backgroundColor="#061f80" />
  ),
};

export default Homepage;
