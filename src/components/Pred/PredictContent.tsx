import React, { useState, useEffect } from 'react';
import { PredictionData, mockPredictionsData } from '../../mocks/preds';
import styles from './PredictContent.module.css';

type PredictContentProps = {
  selectedPredictionId: string | null;
}

const PredictContent: React.FC<PredictContentProps> = ({ 
  selectedPredictionId 
}) => {
  const [prediction, setPrediction] = useState<PredictionData | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (selectedPredictionId && mockPredictionsData[selectedPredictionId]) {
      setPrediction(mockPredictionsData[selectedPredictionId]);
    } else {
      setPrediction(null);
    }
  }, [selectedPredictionId]);

  const handleSaveAs = () => {
    console.log('Save As clicked for prediction:', prediction?.name);
    // сохранение
  };

  const handleDownload = () => {
    console.log('Download clicked for prediction:', prediction?.name);
    // скачивание
  };

  if (!selectedPredictionId || !prediction) {
    return <div className={styles.empty}>Select a prediction to view results</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{prediction.name}</h1>
        <p className={styles.subtitle}>Prediction Results</p>
      </div>

      <div className={styles.metricsSection}>
        <div className={styles.metricsGrid}>
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>Input file:</span>
            <span className={styles.metricValue}>{prediction.inputFile}</span>
          </div>
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>Model:</span>
            <span className={styles.metricValue}>{prediction.model}</span>
          </div>
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>Training base:</span>
            <span className={styles.metricValue}>{prediction.trainingBase}</span>
          </div>
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>MAE:</span>
            <span className={styles.metricValue}>{prediction.mae.toFixed(6)}</span>
          </div>
          <div className={styles.metricRow}>
            <span className={styles.metricLabel}>R2 Score:</span>
            <span className={styles.metricValue}>{prediction.r2Score.toFixed(6)}</span>
          </div>
        </div>
      </div>

      <div className={styles.predictionsSection}>
        <h3 className={styles.predictionsTitle}>PREDICTIONS:</h3>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sample</th>
                <th>Pred_0</th>
                <th>Pred_1</th>
              </tr>
            </thead>
            <tbody>
              {prediction.predictions.map((pred) => (
                <tr key={pred.sample}>
                  <td>{pred.sample}</td>
                  <td>{pred.pred_0.toFixed(6)}</td>
                  <td>{pred.pred_1.toFixed(6)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.saveAsButton} onClick={handleSaveAs}>
          Save As
        </button>
        <button className={styles.downloadButton} onClick={handleDownload}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 1V13M10 13L13 10M10 13L7 10" 
              stroke="#F9F9F9" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M3 15V16C3 17.1046 3.89543 18 5 18H15C16.1046 18 17 17.1046 17 16V15" 
              stroke="#F9F9F9" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
            <path 
              d="M10 13V13" 
              stroke="#F9F9F9" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PredictContent;