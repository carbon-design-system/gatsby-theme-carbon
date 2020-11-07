import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FaceWink20, FaceWinkFilled20 } from '@carbon/icons-react';

import LaunchButton from './LaunchButton';
import Form from './Form';

const FeedbackDialog = ({ onSubmit }) => {
  const [visible, setVisible] = useState(false);

  const handleLaunch = () => {
    setVisible(!visible);
  };

  return onSubmit ? (
    <>
      <Form onSubmit={onSubmit} setVisible={setVisible} visible={visible} />
      <LaunchButton
        visible={visible}
        icon={FaceWink20}
        onClick={handleLaunch}
      />
    </>
  ) : null;
};

FeedbackDialog.propTypes = {
  onSubmit: PropTypes.func,
};

export default FeedbackDialog;
