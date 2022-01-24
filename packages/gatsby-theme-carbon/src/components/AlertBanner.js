import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { ArrowRight, Information } from '@carbon/react/icons';
import usePrefix from '../util/hooks/usePrefix';

const AlertBanner = ({ alertText, buttonText }) => {
  const prefix = usePrefix();

  return (
    <aside aria-label="alert banner" className="website-alert">
      <Information size={20} className="website-alert__icon" />
      <p className="website-alert__text">{alertText}</p>
      <Link
        className="website-alert__button"
        tabIndex="-1"
        to="/updates/v10-migration/overview">
        <button
          className={`${prefix}--btn ${prefix}--btn--secondary ${prefix}--btn--sm`}
          type="button">
          {buttonText}
          <ArrowRight size={20} />
        </button>
      </Link>
    </aside>
  );
};

AlertBanner.propTypes = {
  alertText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AlertBanner;
