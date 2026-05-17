import PredictAction from "../components/Pred/PredictAction";
import PredictList from "../components/Pred/PredictList";
import PredictContent from "../components/Pred/PredictContent"
import Layout from "../components/Layout/Layout";
import { useState } from "react";

const PredictPage = () => {
  const [selectedPredictionId, setSelectedPredictionId] = useState<string | null>(null);
  const handlePredict = (file: File | null, base: string, model: string) => {
    console.log('Prediction requested:', { file, base, model });
    // отправка на сервер
  };
  return (
    <Layout
      leftSlot={<PredictList onSelectPrediction={setSelectedPredictionId} selectedPredictionId={selectedPredictionId} />}
      centerSlot={<PredictContent selectedPredictionId={selectedPredictionId} />}
      rightSlot={<PredictAction onPredict={handlePredict}/>}
    />
  );
}

export default PredictPage;