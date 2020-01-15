import React, { useEffect, useState } from 'react';
import {
  ToastNotification,
  NotificationActionButton,
} from 'carbon-components-react';

import styles from './ReloadNotification.module.scss';

const ReloadNotification = () => {
  const [updateReady, setUpdateReady] = useState(false);

  useEffect(() => {
    const onUpdateReady = () => {
      setUpdateReady(true);
    };
    window.addEventListener('serviceWorkerUpdateReady', onUpdateReady);
    return () =>
      window.removeEventListener('serviceWorkerUpdateReady', onUpdateReady);
  }, []);

  return (
    <ToastNotification
      hidden={!updateReady}
      type="inline"
      className={styles.toast}
      subtitle="reload to get the latest version"
      title="This site has been updated"
      caption=""
      kind="info"
    >
      <div className={styles.actionContainer}>
        <NotificationActionButton
          className={styles.reload}
          onClick={() => window.location.reload()}
        >
          reload
        </NotificationActionButton>
      </div>
    </ToastNotification>
  );
};

export default ReloadNotification;
