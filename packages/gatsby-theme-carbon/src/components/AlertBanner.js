import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ArrowRight, Information } from '@carbon/react/icons';

const AlertBanner = ({ alertText, buttonText }) => (
  <aside aria-label="alert banner" className="website-alert">
    <Information size={20} className="website-alert__icon" />
    <p className="website-alert__text">{alertText}</p>
    <Link
      className="website-alert__button"
      tabIndex="-1"
      to="/updates/v10-migration/overview">
      <button
        className="cds--btn cds--btn--secondary cds--btn--sm"
        type="button">
        {buttonText}
        <ArrowRight size={20} />
      </button>
    </Link>
  </aside>
);
AlertBanner.propTypes = {
  alertText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AlertBanner;
