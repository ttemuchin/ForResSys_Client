import Layout from "../components/Layout/Layout";
import LimsContent from "../components/LimsContent"
import Recents from "../components/Recents";

const LimsPage = () => {
  return (
    <Layout
      // leftSlot={<BaseList />}
      centerSlot={<LimsContent />}
      rightSlot={<Recents />}
    />
  );
}

export default LimsPage;