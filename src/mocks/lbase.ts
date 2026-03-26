import { BaseData } from '../types/lbase';

export const mockBasesData: Record<string, BaseData> = {
  '1': {
    id: '1',
    config: {
      name: 'BaseJSON',
      N: 100,
      nY: 2,
      labelsY: ['labelY1', 'labelY2'],
      accuracy: [0.001, 0.005],
      nX: 2,
      labelsX: ['labelX1', 'labelX2'],
      dimension: [400, 60]
    },
    dataText: 'Sample text data for Base 1\nLine 2\nLine 3\nMore data here...'
  },
  '2': {
    id: '2',
    config: {
      name: 'BaseJSON 2',
      N: 200,
      nY: 2,
      labelsY: ['target1', 'target2'],
      accuracy: [0.002, 0.003],
      nX: 3,
      labelsX: ['feature1', 'feature2', 'feature3'],
      dimension: [500, 80, 120]
    },
    dataText: 'Data for Base 2\nDifferent content here...'
  }
};