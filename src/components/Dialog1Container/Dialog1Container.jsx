import React, { useState } from 'react';

import Button from 'components/Button';
import Dialog1 from 'components/Dialog1';

import styles from './Dialog1Container.module.scss';

const Dialog1Container = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className={styles.container}>
      <Button
        label="Abrir diálogo 1 (useSpring)"
        onClick={() => setDialogOpen(true)}
      />
      <Dialog1
        isOpen={dialogOpen}
        handleClose={() => setDialogOpen(false)}
      />
    </section>
  );
};

export default Dialog1Container;
