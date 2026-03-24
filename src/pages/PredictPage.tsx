import PredictAction from "../components/Pred/PredictAction";
import PredictList from "../components/Pred/PredictList";
import PredictContent from "../components/Pred/PredictContent"
import Layout from "../components/Layout/Layout";

const PredictPage = () => {
  return (
    <Layout
      leftSlot={<PredictList />}
      centerSlot={<PredictContent />}
      rightSlot={<PredictAction />}
    />
  );
}

export default PredictPage;