import PredictAction from "../components/Pred/PredictAction";
import PredictList from "../components/Pred/PredictList";
import PredictContent from "../components/Pred/PredictContent"

const PredictPage = () => {
  return (
    <>
      <PredictList />
      <PredictContent />
      <PredictAction />
    </>
  );
}

export default PredictPage;