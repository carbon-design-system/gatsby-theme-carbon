import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { FlexGrid, Column as CarbonColumn } from '@carbon/react';
import { column } from './Grid.module.scss';

export const Grid = ({ children, className, ...rest }) => (
  <FlexGrid className={className} {...rest}>
    {children}
  </FlexGrid>
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

const colDefaults = {
  colLg: 12,
};

export const Column = ({
  children,
  colSm,
  colMd,
  colLg = colDefaults.colLg,
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
    [`cds--no-gutter-xlg`]: noGutterXl,
    [`cds--no-gutter-max`]: noGutterMax,
    [`cds--no-gutter-sm--left`]: noGutterSmLeft,
    [`cds--no-gutter-md--left`]: noGutterMdLeft,
    [`cds--no-gutter-lg--left`]: noGutterLgLeft,
    [`cds--no-gutter-xlg--left`]: noGutterXlLeft,
    [`cds--no-gutter-max--left`]: noGutterMaxLeft,
    [`cds--offset-sm-${offsetSm}`]: offsetSm,
    [`cds--offset-md-${offsetMd}`]: offsetMd,
    [`cds--offset-lg-${offsetLg}`]: offsetLg,
    [`cds--offset-xlg-${offsetXl}`]: offsetXl,
    [`cds--offset-max-${offsetMax}`]: offsetMax,
    [`cds--gutter-lg`]: gutterLg,
    [className]: className,
  });

  return (
    <CarbonColumn
      sm={colSm}
      md={colMd}
      lg={colLg}
      xlg={colXl}
      max={colMax}
      className={colClasses}
      {...rest}>
      {children}
    </CarbonColumn>
  );
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
