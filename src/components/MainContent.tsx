import React from 'react';
import MainHelp from './Main/MainHelp';
import styles from './MainContent.module.css';

const MainContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Resonance Systems | Analysis with ML</h1>
          <p className={styles.subtitle}>Laboratory practice with AI</p>
        </div>
      </div>

      {/* Компонент помощи */}
      <MainHelp />
    </div>
  );
};

export default MainContent;