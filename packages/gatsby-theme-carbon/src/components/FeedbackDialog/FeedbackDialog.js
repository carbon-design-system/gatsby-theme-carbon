import React, { useState, useRef } from 'react';
import LaunchButton from './LaunchButton';
import Form from './Form';

const FeedbackDialog = () => {
  const [visible, setVisible] = useState(false);
  const launchButtonRef = useRef();

  return (
    <>
      <Form
        launchButtonRef={launchButtonRef}
        setVisible={setVisible}
        visible={visible}
      />
      <LaunchButton
        ref={launchButtonRef}
        onClick={() => setVisible(!visible)}
      />
    </>
  );
};

export default FeedbackDialog;
