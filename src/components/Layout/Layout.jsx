import React from 'react';
import propTypes from 'prop-types';

import './Layout.css';
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <section className={styles.layout}>
    <main className={styles.main}>{children}</main>
  </section>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
