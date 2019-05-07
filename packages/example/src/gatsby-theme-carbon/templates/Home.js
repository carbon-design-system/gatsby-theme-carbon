import React from 'react';
import { Banner, Callout } from 'gatsby-theme-carbon';

// Component to be shadowed
import Home from 'gatsby-theme-carbon/src/templates/Home';

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

const customProps = {
  Banner: (
    <Banner
      renderText={() => (
        <h1>
          Carbon
          <br />
          Design System
        </h1>
      )}
      image={Carbon}
    />
  ),
  FirstCallout: <Callout leftText={FirstLeftText} rightText={FirstRightText} />,
  SecondCallout: (
    <Callout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="activePrimary"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomeTemplate(props) {
  return <Home {...props} {...customProps} />;
}

export default ShadowedHomeTemplate;
