import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>Content</code> component receives a <code>buildTime</code> prop
      that to display your site's build time: {buildTime}
    </p>
    <p>
      By importing the <strong>Footer</strong> component from
      gatsby-theme-carbon, we can supply our own props.
    </p>
    <p>
      The default export from a shadowed component will replace that component
      in the theme.
    </p>
    <p>
      <a href="https://www.gatsbyjs.org/docs/themes/api-reference/#component-shadowing">
        More about component shadowing
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
  secondCol: [
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
