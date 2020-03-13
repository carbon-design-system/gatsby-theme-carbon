import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { FaceWink20, FaceWinkFilled20 } from '@carbon/icons-react';

import LaunchButton from './LaunchButton';
import Form from './Form';

const FeedbackDialog = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);
  const launchButtonRef = useRef();

  return onSubmit ? (
    <>
      <Form
        onSubmit={onSubmit}
        launchButtonRef={launchButtonRef}
        setVisible={setVisible}
        visible={visible}
      />
      <LaunchButton
        ref={launchButtonRef}
        visible={visible}
        icon={FaceWink20}
        filledIcon={FaceWinkFilled20}
        onClick={() => setVisible(!visible)}
      />
    </>
  ) : null;
};

FeedbackDialog.propTypes = {
  onSubmit: PropTypes.func,
};

export default FeedbackDialog;
