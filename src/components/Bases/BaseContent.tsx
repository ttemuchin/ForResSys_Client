import React, { useState, useEffect } from 'react';
import BaseConfig from './BaseConfig';
import BaseData from './BaseData';
import { BaseConfigData } from '../../types/lbase';
import { mockBasesData } from '../../mocks/lbase';
import styles from './BaseContent.module.css';

type BaseContentProps = {
  selectedBaseId: string | null;
  isEditMode: boolean;
  onEditModeChange: (mode: boolean) => void;
}

const BaseContent: React.FC<BaseContentProps> = ({ 
  selectedBaseId, 
  isEditMode,
  onEditModeChange 
}) => {
  const [config, setConfig] = useState<BaseConfigData | null>(null);
  const [dataText, setDataText] = useState<string>('');
  const [originalConfig, setOriginalConfig] = useState<BaseConfigData | null>(null);
  const [originalDataText, setOriginalDataText] = useState<string>('');

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (selectedBaseId && mockBasesData[selectedBaseId]) {
      const baseData = mockBasesData[selectedBaseId];
      setConfig(baseData.config);
      setDataText(baseData.dataText);
      setOriginalConfig(baseData.config);
      setOriginalDataText(baseData.dataText);
    }
  }, [selectedBaseId]);

  const handleSaveChanges = () => {
    // валидация данных
    console.log('Saving changes:', { config, dataText });
    
    // отправка на сервер
    // await saveBaseData(selectedBaseId, { config, dataText });
    
    // Обновляем то что было
    if (config) setOriginalConfig(config);
    setOriginalDataText(dataText);
    
    onEditModeChange(false);
  };

  const handleCancelEdit = () => {
    if (originalConfig) setConfig(originalConfig);
    setDataText(originalDataText);
    onEditModeChange(false);
  };

  if (!selectedBaseId || !config) {
    return <div className={styles.empty}>Select a base to view details</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.configSection}>
        <BaseConfig
          config={config}
          isEditing={isEditMode}
          onConfigChange={setConfig}
        />
      </div>
      
      <div className={styles.dataSection}>
        <BaseData
          dataText={dataText}
          isEditing={isEditMode}
          onDataChange={setDataText}
        />
      </div>
      
      {isEditMode && (
        <div className={styles.actions}>
          <button className={styles.cancelButton} onClick={handleCancelEdit}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSaveChanges}>
            Save changes
          </button>
        </div>
      )}
    </div>
  );
};

export default BaseContent;