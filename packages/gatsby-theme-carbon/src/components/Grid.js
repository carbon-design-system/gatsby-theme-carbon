import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { settings } from 'carbon-components';

const { prefix } = settings;

export const Grid = ({ children, className }) => (
  <div className={classnames([`${prefix}--grid`], className)}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a class name for row
   */
  className: PropTypes.string,
};

export const Row = ({ children, className }) => (
  <div className={classnames([`${prefix}--row`], className)}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a class name for row
   */
  className: PropTypes.string,
};

export const Column = ({
  children,
  colSm,
  colMd,
  colLg,
  colXl,
  colMax,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  offsetMax,
  noGutterSm,
  noGutterMd,
  noGutterLg,
  noGutterXl,
  noGutterMax,
  noGutterSmLeft,
  noGutterMdLeft,
  noGutterLgLeft,
  noGutterXlLeft,
  noGutterMaxLeft,
  className,
}) => {
  const colClasses = classnames({
    [`${prefix}--no-gutter-sm`]: noGutterSm,
    [`${prefix}--no-gutter-md`]: noGutterMd,
    [`${prefix}--no-gutter-lg`]: noGutterLg,
    [`${prefix}--no-gutter-xl`]: noGutterXl,
    [`${prefix}--no-gutter-max`]: noGutterMax,
    [`${prefix}--no-gutter-sm--left`]: noGutterSmLeft,
    [`${prefix}--no-gutter-md--left`]: noGutterMdLeft,
    [`${prefix}--no-gutter-lg--left`]: noGutterLgLeft,
    [`${prefix}--no-gutter-xl--left`]: noGutterXlLeft,
    [`${prefix}--no-gutter-max--left`]: noGutterMaxLeft,
    [`${prefix}--offset-sm-${offsetSm}`]: offsetSm,
    [`${prefix}--offset-md-${offsetMd}`]: offsetMd,
    [`${prefix}--offset-lg-${offsetLg}`]: offsetLg,
    [`${prefix}--offset-xl-${offsetXl}`]: offsetXl,
    [`${prefix}--offset-max-${offsetMax}`]: offsetMax,
    [`${prefix}--col-sm-${colSm}`]: colSm,
    [`${prefix}--col-md-${colMd}`]: colMd,
    [`${prefix}--col-lg-${colLg}`]: colLg,
    [`${prefix}--col-xl-${colXl}`]: colXl,
    [`${prefix}--col-lg-${colMax}`]: colMax,
    [className]: className,
  });

  return <div className={colClasses}>{children}</div>;
};

Column.defaultProps = {
  colLg: 12,
};

Column.propTypes = {
  children: PropTypes.node,
  /**
   * Specify the col width at small breakpoint
   */
  colSm: PropTypes.number,
  /**
   * Specify the col width at medium breakpoint
   */
  colMd: PropTypes.number,
  /**
   * Specify the col width at large breakpoint
   */
  colLg: PropTypes.number,
  /**
   * Specify the col offset at large breakpoint
   */
  offsetLg: PropTypes.number,
  /**
   * Specify the col offset at medium breakpoint
   */
  offsetMd: PropTypes.number,
  /**
   * Specify the col offset at small breakpoint
   */
  offsetSm: PropTypes.number,
  /**
   * Specify a no-gutter class
   */
  noGutterSm: PropTypes.bool,
  /**
   * Specify a no-gutter class
   */
  noGutterMd: PropTypes.bool,
  /**
   * Specify a no-gutter class
   */
  noGutterLg: PropTypes.bool,
  /**
   * Specify a no-gutter class at small breakpoint
   */
  noGutterSmLeft: PropTypes.bool,
  /**
   * Specify a no-gutter class at medium breakpoint
   */
  noGutterMdLeft: PropTypes.bool,
  /**
   * Specify a no-gutter class at large breakpoint
   */
  noGutterLgLeft: PropTypes.bool,
  /**
   * Specify a class name for column
   */
  className: PropTypes.string,
};
