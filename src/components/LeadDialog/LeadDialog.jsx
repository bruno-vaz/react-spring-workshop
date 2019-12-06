import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useHotkeys } from 'react-hotkeys-hook';

import styles from './LeadDialog.module.scss';

const LeadDialog = ({ isOpen, handleClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'inherit';
    }
  }, [isOpen]);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: 'translate3d(0, 10px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)', pointerEvents: 'all' },
    leave: { opacity: 0, transform: 'translate3d(0, -10px, 0)', pointerEvents: 'none' },
  });

  useHotkeys('esc', () => handleClose());

  const cardRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
          ref={cardRef}
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
              <h3 className={styles.title}>Diálogo 1</h3>
            </div>
            <div className={styles.body}>
              <h2>Diálogo 1</h2>
            </div>
          </div>
        </animated.div>
      </animated.aside>
    ));
};

LeadDialog.defaultProps = {
  isOpen: false,
};

LeadDialog.propTypes = {
  isOpen: propTypes.bool,
};

export default LeadDialog;
