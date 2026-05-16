import React from 'react';
import LimsTable from './LimsTable';
import styles from './LimsContent.module.css';

const LimsContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Labs & Connections</h1>
          <p className={styles.subtitle}>
            Get started with your Laboratory information management system
          </p>
        </div>
        <div className={styles.linksSection}>
          <a href="#" className={styles.link}>API KEY</a>
          <a href="#" className={styles.link}>API Docs</a>
        </div>
      </div>

      <div className={styles.connectedSection}>
        <p className={styles.connectedLabel}>Connected with:</p>
      </div>

      <LimsTable />
    </div>
  );
};

export default LimsContent;