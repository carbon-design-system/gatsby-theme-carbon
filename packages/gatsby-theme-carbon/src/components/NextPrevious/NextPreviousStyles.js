import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { Row, Column, Grid } from '../Grid';

import {
  wrapper,
  link,
  direction,
  name,
  linkContainer,
  grid,
  isHomepage as isHomepageStyles,
} from './NextPrevious.module.scss';

const NextPreviousContainer = ({ previousItem, nextItem, isHomepage }) => (
  <div className={wrapper}>
    <Grid className={grid}>
      <Row className={linkContainer}>
        {previousItem.to && (
          <Column
            className={cx(link, { [isHomepageStyles]: isHomepage })}
            colLg={6}
            colMd={4}
            colSm={2}>
            <Link to={previousItem.to}>
              <div className={direction}>Previous</div>
              <div className={name}>{previousItem.name}</div>
            </Link>
          </Column>
        )}
        {nextItem.to && (
          <Column className={link} colLg={6} colMd={4} colSm={2}>
            <Link to={nextItem.to}>
              <div className={direction}>Next</div>
              <div className={name}>{nextItem.name}</div>
            </Link>
          </Column>
        )}
      </Row>
    </Grid>
  </div>
);

export default NextPreviousContainer;
