import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';

import {
  wrapper,
  link,
  direction,
  name,
  firstLink,
  secondLink,
  linkContainer,
} from './NextPrevious.module.scss';

const NextPreviousContainer = ({ previousItem, nextItem }) => (
  <div className={wrapper}>
    <div className={linkContainer}>
      {previousItem.to && (
        <Link className={cx(link, firstLink)} to={previousItem.to}>
          <div className={direction}>Previous</div>
          <div className={name}>{previousItem.name}</div>
        </Link>
      )}
      {nextItem.to && (
        <Link className={cx(link, secondLink)} to={nextItem.to}>
          <div className={direction}>Next</div>
          <div className={name}>{nextItem.name}</div>
        </Link>
      )}
    </div>
  </div>
);

export default NextPreviousContainer;
