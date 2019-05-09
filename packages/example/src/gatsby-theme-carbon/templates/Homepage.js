import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => (
  <p>
    Think → <strong>Guidance</strong>
  </p>
);

const FirstRightText = () => (
  <p>
    <strong>Build Bonds</strong>
    <br />
    This is the guiding ethos behind IBM’s design philosophy and principles.
    This helps us distinguish every element and every experience Designed by
    IBM.
  </p>
);

const SecondLeftText = () => <p>Wondering how to contribute?</p>;

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
    <br />
    <a
      css={({ typeStyles }) => typeStyles.bodyShort02}
      href="https://www.carbondesignsystem.com/contributing/governance"
    >
      Start Contributing →
    </a>
  </p>
);

const BannerText = () => (
  <h1>
    Carbon
    <br />
    Design System
  </h1>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout leftText={FirstLeftText} rightText={FirstRightText} />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
