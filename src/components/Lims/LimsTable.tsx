import React from 'react';
import styles from './LimsTable.module.css';

type Lab = {
  id: string;
  name: string;
}

const LimsTable: React.FC = () => {
  const labs: Lab[] = [
    { id: '1', name: 'Lab 1' },
    { id: '2', name: 'Lab 2' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        {labs.map((lab) => (
          <div key={lab.id} className={styles.tableRow}>
            <div className={styles.tableCell}>{lab.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LimsTable;