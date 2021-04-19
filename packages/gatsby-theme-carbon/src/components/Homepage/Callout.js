import React from 'react';
import { Grid, Column, Row } from '../Grid';

import { grid, row, firstColumn, secondColumn } from './Callout.module.scss';
import theme from '../../util/theme';

const getBackgroundColor = (backgroundColor) =>
  theme.colors[backgroundColor] ||
  backgroundColor ||
  theme.colors.interactive02;

const getColor = (color) =>
  theme.colors[color] || color || theme.colors.inverse01;

const HomepageCallout = ({
  leftText,
  rightText,
  backgroundColor: backgroundColorProp,
  color: colorProp,
  ...rest
}) => {
  const backgroundColor = getBackgroundColor(backgroundColorProp);
  const color = getColor(colorProp);
  return (
    <Grid
      style={{ backgroundColor, color, width: '100%', maxWidth: '100%' }}
      className={grid}
      {...rest}>
      <Row className={row}>
        <Column colLg={4} colMd={4} className={firstColumn}>
          {leftText()}
        </Column>
        <Column colLg={8} colMd={4} className={secondColumn}>
          {rightText()}
        </Column>
      </Row>
    </Grid>
  );
};

HomepageCallout.defaultProps = {
  leftText: function renderLeftText() {
    return (
      <>
        Think → <strong>Guide</strong>
      </>
    );
  },
  rightText: function renderRightText() {
    return (
      <p>
        <strong>Build Bonds.</strong>
        <br />
        This is the guiding ethos behind IBM’s design philosophy and principles.
        This helps us distinguish every element and every experience Designed by
        IBM.
      </p>
    );
  },
};

export default HomepageCallout;
