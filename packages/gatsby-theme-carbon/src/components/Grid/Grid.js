import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { column } from './Grid.module.scss';
// import usePrefix from '../../util/hooks/usePrefix';

// const prefix = usePrefix();

export const Grid = ({ children, className, ...rest }) => (
  <div className={cx(`cds--grid`, className)} {...rest}>
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node,

  /**
   * Specify a class name for row
   */
  className: PropTypes.string,
};

export const Row = ({ children, className, ...rest }) => (
  <div className={cx(`cds--row`, className)} {...rest}>
    {children}
  </div>
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
  gutterLg,
  className,
  ...rest
}) => {
  const colClasses = cx(column, {
    [`cds--no-gutter-sm`]: noGutterSm,
    [`cds--no-gutter-md`]: noGutterMd,
    [`cds--no-gutter-lg`]: noGutterLg,
    [`cds--no-gutter-xl`]: noGutterXl,
    [`cds--no-gutter-max`]: noGutterMax,
    [`cds--no-gutter-sm--left`]: noGutterSmLeft,
    [`cds--no-gutter-md--left`]: noGutterMdLeft,
    [`cds--no-gutter-lg--left`]: noGutterLgLeft,
    [`cds--no-gutter-xl--left`]: noGutterXlLeft,
    [`cds--no-gutter-max--left`]: noGutterMaxLeft,
    [`cds--offset-sm-${offsetSm}`]: offsetSm,
    [`cds--offset-md-${offsetMd}`]: offsetMd,
    [`cds--offset-lg-${offsetLg}`]: offsetLg,
    [`cds--offset-xl-${offsetXl}`]: offsetXl,
    [`cds--offset-max-${offsetMax}`]: offsetMax,
    [`cds--col-sm-${colSm}`]: colSm,
    [`cds--col-md-${colMd}`]: colMd,
    [`cds--col-lg-${colLg}`]: colLg,
    [`cds--col-xl-${colXl}`]: colXl,
    [`cds--col-max-${colMax}`]: colMax,
    [`cds--gutter-lg`]: gutterLg,
    [className]: className,
  });

  return (
    <div className={colClasses} {...rest}>
      {children}
    </div>
  );
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
