import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';

const links = [
  { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
  {
    href: 'https://www.ibm.com/design/language/',
    linkText: 'IBM Design Language',
  },
  {
    href: 'https://www.carbondesignsystem.com',
    linkText: 'IBM Product Design',
  },
  {
    href: 'https://www.ibm.com/standards/web/',
    linkText: 'IBM Digital Design',
  },
  {
    href: 'https://www.ibm.com/design/research/',
    linkText: 'IBM Design Research',
  },
  {
    href: 'https://www.ibm.com/design/thinking/',
    linkText: 'Enterprise Design Thinking',
  },
  {
    href: 'https://www.ibm.com/services/ibmix/',
    linkText: 'IBM iX',
  },
];

const CustomSwitcher = () => <Switcher links={links} />;

export default CustomSwitcher;
