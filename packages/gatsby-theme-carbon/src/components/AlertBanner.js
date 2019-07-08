import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ArrowRight20, Information20 } from '@carbon/icons-react';

const AlertBanner = ({ alertText, buttonText }) => (
  <aside aria-label="alert banner" className="website-alert">
    <Information20 className="website-alert__icon" />
    <p className="website-alert__text">{alertText}</p>
    <Link
      className="website-alert__button"
      tabIndex="-1"
      to="/updates/v10-migration/overview"
    >
      <button className="bx--btn bx--btn--secondary bx--btn--sm" type="button">
        {buttonText}
        <ArrowRight20 />
      </button>
    </Link>
  </aside>
);

AlertBanner.propTypes = {
  alertText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AlertBanner;
