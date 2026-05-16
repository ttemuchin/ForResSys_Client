import React from 'react';
import styles from './MainHelp.module.css';

const MainHelp: React.FC = () => {
  const helpItems = [
    'Load Base',
    'Start Learning',
    'Make prediction'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {helpItems.map((item, index) => (
          <div key={index} className={styles.listItem}>
            <div className={styles.bullet} />
            <span className={styles.itemText}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHelp;