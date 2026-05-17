export type PredictionData = {
  id: string;
  name: string;
  inputFile: string;
  model: string;
  trainingBase: string;
  mae: number;
  r2Score: number;
  predictions: {
    sample: number;
    pred_0: number;
    pred_1: number;
  }[];
}

export const mockPredictionsData: Record<string, PredictionData> = {
  '1': {
    id: '1',
    name: 'loss_dynamics_cnn_n15_res209',
    inputFile: 'C:/Users/ttemuchin4/Desktop/ResSysApp/testErrors/2samples.txt',
    model: 'convolutional',
    trainingBase: 'BaseJSON',
    mae: 0.000817,
    r2Score: 0.918759,
    predictions: [
      { sample: 1, pred_0: 0.076169, pred_1: 0.082207 },
      { sample: 2, pred_0: 0.367672, pred_1: 0.148976 },
      { sample: 3, pred_0: 0.245891, pred_1: 0.213445 },
      { sample: 4, pred_0: 0.567123, pred_1: 0.432789 },
      { sample: 5, pred_0: 0.123456, pred_1: 0.098765 },
      { sample: 6, pred_0: 0.789012, pred_1: 0.654321 },
      { sample: 7, pred_0: 0.345678, pred_1: 0.287654 },
      { sample: 8, pred_0: 0.901234, pred_1: 0.876543 },
      { sample: 9, pred_0: 0.456789, pred_1: 0.398765 },
      { sample: 10, pred_0: 0.234567, pred_1: 0.187654 },
    ]
  },
  '2': {
    id: '2',
    name: 'accuracy_analysis_v2_final',
    inputFile: 'C:/Users/ttemuchin4/Desktop/ResSysApp/testErrors/accuracy_test.txt',
    model: 'transformer',
    trainingBase: 'BaseJSON 2',
    mae: 0.000523,
    r2Score: 0.945672,
    predictions: [
      { sample: 1, pred_0: 0.892345, pred_1: 0.107655 },
      { sample: 2, pred_0: 0.765432, pred_1: 0.234568 },
      { sample: 3, pred_0: 0.678901, pred_1: 0.321099 },
      { sample: 4, pred_0: 0.943210, pred_1: 0.056790 },
      { sample: 5, pred_0: 0.834567, pred_1: 0.165433 },
    ]
  },
  '3': {
    id: '3',
    name: 'confusion_matrix_results',
    inputFile: 'C:/Users/ttemuchin4/Desktop/ResSysApp/testErrors/confusion_data.txt',
    model: 'resnet',
    trainingBase: 'BaseJSON',
    mae: 0.001234,
    r2Score: 0.887654,
    predictions: [
      { sample: 1, pred_0: 0.123456, pred_1: 0.876544 },
      { sample: 2, pred_0: 0.234567, pred_1: 0.765433 },
      { sample: 3, pred_0: 0.345678, pred_1: 0.654322 },
      { sample: 4, pred_0: 0.456789, pred_1: 0.543211 },
      { sample: 5, pred_0: 0.567890, pred_1: 0.432110 },
      { sample: 6, pred_0: 0.678901, pred_1: 0.321099 },
      { sample: 7, pred_0: 0.789012, pred_1: 0.210988 },
    ]
  }
};