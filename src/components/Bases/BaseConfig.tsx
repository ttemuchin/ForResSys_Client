import React from 'react';
import styles from './BaseConfig.module.css';
import { BaseConfigData } from '../../types/lbase';

type BaseConfigProps = {
  config: BaseConfigData;
  isEditing: boolean;
  onConfigChange: (config: BaseConfigData) => void;
}

const BaseConfig: React.FC<BaseConfigProps> = ({ 
  config, 
  isEditing, 
  onConfigChange 
}) => {
  const handleFieldChange = (field: string, value: unknown) => {
    onConfigChange({ ...config, [field]: value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.configRow}>
        <span className={styles.configLabel}>Config</span>
        {isEditing ? (
          <input
            type="text"
            value={config.name}
            onChange={(e) => { handleFieldChange('name', e.target.value); }}
            className={styles.input}
          />
        ) : (
          <span className={styles.configValue}>{config.name}</span>
        )}
      </div>

      <div className={styles.configRow}>
        <span className={styles.configLabel}>Number of samples:</span>
        {isEditing ? (
          <input
            type="number"
            value={config.N}
            onChange={(e) => { handleFieldChange('N', parseInt(e.target.value)); }}
            className={styles.input}
          />
        ) : (
          <span className={styles.configValue}>{config.N}</span>
        )}
      </div>

      <div className={styles.configRow}>
        <span className={styles.configLabel}>X values:</span>
        <div className={styles.configValue}>
          {config.labelsX.map((label, idx) => (
            <div key={idx} className={styles.xValueRow}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={label}
                    onChange={(e) => {
                      const newLabels = [...config.labelsX];
                      newLabels[idx] = e.target.value;
                      handleFieldChange('labelsX', newLabels); //string[] ?
                    }}
                    className={styles.smallInput}
                  />
                  <input
                    type="number"
                    value={config.dimension[idx]}
                    onChange={(e) => {
                      const newDimensions = [...config.dimension];
                      newDimensions[idx] = parseInt(e.target.value);
                      handleFieldChange('dimension', newDimensions); //number[]?
                    }}
                    className={styles.smallInput}
                  />
                </>
              ) : (
                <span>{label}[ {config.dimension[idx]} ]</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.configRow}>
        <span className={styles.configLabel}>Target values:</span>
        <div className={styles.configValue}>
          {config.labelsY.map((label, idx) => (
            <div key={idx} className={styles.targetRow}>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={label}
                    onChange={(e) => {
                      const newLabels = [...config.labelsY];
                      newLabels[idx] = e.target.value;
                      handleFieldChange('labelsY', newLabels);
                    }}
                    className={styles.smallInput}
                  />
                  <input
                    type="number"
                    step="0.001"
                    value={config.accuracy[idx]}
                    onChange={(e) => {
                      const newAccuracy = [...config.accuracy];
                      newAccuracy[idx] = parseFloat(e.target.value);
                      handleFieldChange('accuracy', newAccuracy);
                    }}
                    className={styles.smallInput}
                  />
                </>
              ) : (
                <span>{label} | {config.accuracy[idx]}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseConfig;