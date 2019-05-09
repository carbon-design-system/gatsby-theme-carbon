import React from 'react';
import GHSlugger from 'github-slugger';
import Link from '@carbon/icons-react/lib/link/20';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const slugger = new GHSlugger();

const Anchor = styled.a`
  opacity: 0;
  transition: opacity 0.07s ease;
  position: absolute;
  left: -0.75rem;
  top: 0px;
  &:hover,
  &:active {
    opacity: 1;
  }
  svg {
    fill: ${props => props.theme.colors.link01};
  }
`;

const Header = ({ is: Component, ...props }) => {
  const string = React.Children.map(
    props.children,
    child => (child.props ? child.props.children : child) // handle bold/italic words
  ).join('');

  const id = slugger.slug(string);

  return (
    <Component
      css={css`
        position: relative;
        &:hover {
          ${Anchor} {
            opacity: 1;
          }
        }
      `}
      id={id}
      {...props}
    >
      <Anchor
        className="anchor"
        href={`#${id}`}
        aria-label={`${string} permalink`}
      >
        <Link />
      </Anchor>
      {props.children}
    </Component>
  );
};

Header.defaultProps = { is: 'h2' };

export default Header;
