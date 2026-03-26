import React from 'react';
import styles from './BaseData.module.css';

type BaseDataProps = {
  dataText: string;
  isEditing: boolean;
  onDataChange: (text: string) => void;
}

const BaseData: React.FC<BaseDataProps> = ({ 
  dataText, 
  isEditing, 
  onDataChange 
}) => {
  return (
    <div className={styles.container}>
      {isEditing ? (
        <textarea
          value={dataText}
          onChange={(e) => { onDataChange(e.target.value); }}
          className={styles.textarea}
        />
      ) : (
        <pre className={styles.pre}>{dataText}</pre>
      )}
    </div>
  );
};

export default BaseData;