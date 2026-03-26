import React, { useState, useEffect } from 'react';
import styles from './BaseList.module.css';
import cn from 'classnames';
import { Base } from '../../types/lbase';

type BaseListProps = {
  onSelectBase: (baseId: string) => void;
  selectedBaseId: string | null;
}

const BaseList: React.FC<BaseListProps> = ({
  onSelectBase,
  selectedBaseId
}) => {
  const [bases, setBases] = useState<Base[]>([]);
  // const [activeBaseId, setActiveBaseId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const mockBases: Base[] = [
    { id: '1', name: 'Base 1' },
    { id: '2', name: 'Base 2' },
    { id: '3', name: 'Base 3' },
    { id: '4', name: 'Base 4' },
    { id: '5', name: 'Base 5' },
    { id: '6', name: 'Base 1' },
    { id: '7', name: 'Base 2' },
    { id: '8', name: 'Base 3' },
    { id: '9', name: 'Base 4' },
    { id: '10', name: 'Base 5' },
    { id: '11', name: 'Base 1 yY0 123456789012345' },
    { id: '12', name: 'Base 2' },
    { id: '13', name: 'Base 3' },
    { id: '14', name: 'Base 4' },
    { id: '15', name: 'Base 5' },
  ];

  useEffect(() => {
    // место для API вызова
    const fetchBases = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setBases(mockBases);
        // Активный элемент по умолчанию - сделать не первый, а последний из использованных. 
        // if (mockBases.length > 0 && !selectedBaseId) {
        //   onSelectBase(mockBases[0].id);
        // }
      } catch (error) {
        console.error('Failed to fetch bases:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchBases();
  }, []);


  const handleBaseClick = (baseId: string) => {
    // логика загрузки данных выбранной базы В КОМПОНЕНТ КОНТЕНТА
    onSelectBase(baseId);
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bases</h2>
      <div className={styles.list}>
        {bases.map((base) => (
          <div
            key={base.id}
            className={cn(styles.listItem, {
              [styles.active]: selectedBaseId === base.id
            })}
            onClick={() => { handleBaseClick(base.id); }}
          >
            <div className={styles.itemText}>
              {base.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseList;