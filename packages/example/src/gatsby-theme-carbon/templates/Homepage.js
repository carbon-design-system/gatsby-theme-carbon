import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';

// Component to be shadowed
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

import Carbon from '../../images/carbon.jpg';

const FirstLeftText = () => <p>Callout #1</p>;

const FirstRightText = () => (
  <p>
    This is a callout component. You can edit the contents by updating the
    pre-shadowed homepage template. You can provide a color and backgroundColor
    props to suit your theme.
    <br />
    <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const SecondLeftText = () => <p>Callout #2</p>;

const SecondRightText = () => (
  <p>
    You can also not use these components at all by not providing the callout
    props to the template or writing your own template.
    <br />
    <a href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/master/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
      Homepage source →
    </a>
  </p>
);

const BannerText = () => <h1>Banner component</h1>;

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
