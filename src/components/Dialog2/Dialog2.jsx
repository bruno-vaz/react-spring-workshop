import React from 'react';
import propTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

import styles from './Dialog2.module.scss';

const Dialog2 = ({ isOpen, handleClose }) => {
  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)', pointerEvents: 'all' },
    leave: { opacity: 0, transform: 'translate3d(0, -10px, 0)', pointerEvents: 'none' },
  });

  return transitions.map(({ item, key, props }) => item
    && (
      <animated.aside
        key={key}
        className={styles.backdrop}
        style={{
          opacity: props.opacity,
          pointerEvents: props.pointerEvents,
        }}
      >
        <animated.div
          className={styles.card}
          style={props}
        >
          <button
            type="button"
            className={styles.close}
            onClick={handleClose}
          >
            &times;
          </button>
          <div>
            <div className={styles.header}>
              <h3 className={styles.title}>Diálogo 2</h3>
            </div>
            <div className={styles.body}>
              <h2>Diálogo 2</h2>
            </div>
          </div>
        </animated.div>
      </animated.aside>
    ));
};

Dialog2.defaultProps = {
  isOpen: false,
};

Dialog2.propTypes = {
  isOpen: propTypes.bool,
};

export default Dialog2;
