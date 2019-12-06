import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import styles from './Dialog1.module.scss';

const Dialog1 = ({ isOpen, handleClose }) => {
  const [dialogProps, setDialogProps] = useSpring(() => ({
    from: {
      pointerEvents: 'none',
      opacity: 0,
    },
  }));

  useEffect(() => {
    setDialogProps({
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'all' : 'none',
    });
  }, [isOpen]);

  return (
    <animated.aside
      className={styles.backdrop}
      style={dialogProps}
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
    </animated.aside>
  );
};

Dialog1.defaultProps = {
  isOpen: false,
};

Dialog1.propTypes = {
  isOpen: propTypes.bool,
  handleClose: propTypes.func.isRequired,
};

export default Dialog1;
