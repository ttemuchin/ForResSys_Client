import React, { useState, useEffect } from 'react';
import styles from './Recents.module.css';

type RecentItem = {
  id: string;
  name: string;
  type: 'base' | 'prediction';
}

const Recents: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<RecentItem[]>([]);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const mockRecents: RecentItem[] = [
    { id: '1', name: 'loss_dynamics_cnn_n15_res209', type: 'prediction' },
    { id: '2', name: 'base crystalinity 100 samples noised edited Marks', type: 'base' },
    { id: '3', name: 'accuracy_analysis_v2_final', type: 'prediction' },
    { id: '4', name: 'training_logs_experiment_42', type: 'prediction' },
    { id: '5', name: 'base chemical compounds dataset v3', type: 'base' },
    { id: '6', name: 'confusion_matrix_results', type: 'prediction' },
    { id: '7', name: 'base spectroscopy raw data', type: 'base' },
    { id: '8', name: 'learning_curve_100epochs', type: 'prediction' },
    { id: '9', name: 'base materials properties 2024', type: 'base' },
    { id: '10', name: 'prediction_output_batch_15', type: 'prediction' },
  ];

  useEffect(() => {
    // Функция для расчета количества элементов, помещающихся в высоту
      const calculateVisibleItems = () => {
      const container = document.querySelector(`.${styles.container}`);
      if (container) {
        const height = container.clientHeight;
        // Высота одного элемента с учетом line-height и margin-bottom
        // line-height: 1.4 от font-size 20px = 28px, margin-bottom: 14px (1.5x от line-height)
        const itemHeight = 28 + 14; // ~42px
        const maxItems = Math.floor(height / itemHeight);
        // Показываем от 5 до 7 элементов, но не больше доступных
        const itemsToShow = Math.min(Math.max(maxItems, 5), 7, mockRecents.length);
        setVisibleItems(mockRecents.slice(0, itemsToShow));
        setContainerHeight(height);
        console.log(containerHeight)
      }
    };

    calculateVisibleItems();

    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleItems();
    });

    const container = document.querySelector(`.${styles.container}`);
    if (container) {
      resizeObserver.observe(container);
    }

    return () => {
      if (container) {
        resizeObserver.unobserve(container);
      }
    };
  }, []);

  const handleItemClick = (item: RecentItem) => {
    console.log(item);
    // навигация к соответствующей базе или предикту
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recents</h3>
      <div className={styles.recentsList}>
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className={styles.recentItem}
            onClick={() => { handleItemClick(item); }}
          >
            <span className={styles.itemText}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;