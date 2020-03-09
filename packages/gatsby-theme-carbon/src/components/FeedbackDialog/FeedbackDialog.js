import React, { useState } from 'react';
import LaunchButton from './LaunchButton';
import Form from './Form';

const FeedbackDialog = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Form setVisible={setVisible} hidden={!visible} />
      <LaunchButton onClick={() => setVisible(!visible)} />
    </>
  );
};

export default FeedbackDialog;
