import React, { useState } from 'react';

import Button from 'components/Button';
import Dialog2 from 'components/Dialog2';

import styles from './Dialog2Container.module.scss';

const Dialog2Container = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className={styles.container}>
      <Button
        label="Abrir diálogo 2 (useTransition)"
        onClick={() => setDialogOpen(true)}
      />
      <Dialog2
        isOpen={dialogOpen}
        handleClose={() => setDialogOpen(false)}
      />
    </section>
  );
};

export default Dialog2Container;
