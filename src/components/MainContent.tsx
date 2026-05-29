import React from 'react';
import MainHelp from './Main/MainHelp';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Resonance Systems | NMR Analysis</h1>
          <p className={styles.subtitle}>Laboratory practice with AI</p>
        </div>
      </div>

      <MainHelp />
    </div>
  );
};

export default MainContent;