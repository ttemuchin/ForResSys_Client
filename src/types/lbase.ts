export type Base = { //пока так
  id: string;
  name: string;
}

export type BaseConfigData = {
  name: string;
  N: number;
  nY: number;
  labelsY: string[];
  accuracy: number[];
  nX: number;
  labelsX: string[];
  dimension: number[];
}

export type BaseData = {
  id: string;
  config: BaseConfigData;
  dataText: string;
}