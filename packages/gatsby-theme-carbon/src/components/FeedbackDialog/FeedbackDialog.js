import React, { useState } from 'react';
import LaunchButton from './LaunchButton';
import Form from './Form';

const FeedbackDialog = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Form hidden={!visible} />
      <LaunchButton onClick={() => setVisible(!visible)} />
    </>
  );
};

export default FeedbackDialog;
