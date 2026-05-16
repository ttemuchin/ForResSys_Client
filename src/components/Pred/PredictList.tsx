import React, { useState, useEffect } from 'react';
import styles from './PredictList.module.css';
import cn from 'classnames';

type Prediction = {
  id: string;
  name: string;
}

type PredictListProps = {
  onSelectPrediction: (predictionId: string) => void;
  selectedPredictionId: string | null;
}

const PredictList: React.FC<PredictListProps> = ({
  onSelectPrediction,
  selectedPredictionId
}) => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const mockPredictions: Prediction[] = [
    { id: '1', name: 'loss_dynamics_cnn_n15_res209' },
    { id: '2', name: 'accuracy_analysis_v2_final' },
    { id: '3', name: 'confusion_matrix_results' },
    { id: '4', name: 'learning_curve_100epochs' },
    { id: '5', name: 'prediction_output_batch_15' },
    { id: '6', name: 'training_logs_experiment_42' },
    { id: '7', name: 'validation_results_epoch_50' },
    { id: '8', name: 'test_predictions_normalized' },
    { id: '9', name: 'feature_importance_analysis' },
    { id: '10', name: 'roc_auc_curves_experiment' },
  ];

  useEffect(() => {
    const fetchPredictions = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setPredictions(mockPredictions);
      } catch (error) {
        console.error('Failed to fetch predictions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchPredictions();
  }, []);

  const handlePredictionClick = (predictionId: string) => {
    onSelectPrediction(predictionId);
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Predictions</h2>
      <div className={styles.list}>
        {predictions.map((prediction) => (
          <div
            key={prediction.id}
            className={cn(styles.listItem, {
              [styles.active]: selectedPredictionId === prediction.id
            })}
            onClick={() => { handlePredictionClick(prediction.id); }}
          >
            <div className={styles.itemText}>
              {prediction.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictList;