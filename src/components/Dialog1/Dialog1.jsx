import React from 'react';
import propTypes from 'prop-types';

import styles from './Dialog1.module.scss';

const Dialog1 = ({ handleClose }) => (
  <aside
    className={styles.backdrop}
  >
    <div className={styles.card}>
      <button
        type="button"
        className={styles.close}
        onClick={handleClose}
      >
          &times;
      </button>
      <div>
        <div className={styles.header}>
          <h3 className={styles.title}>Diálogo 1</h3>
        </div>
        <div className={styles.body}>
          <h2>Diálogo 1</h2>
        </div>
      </div>
    </div>
  </aside>
);

Dialog1.propTypes = {
  handleClose: propTypes.func.isRequired,
};

export default Dialog1;
