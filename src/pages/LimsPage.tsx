import Layout from "../components/Layout/Layout";
import LimsContent from "../components/Lims/LimsContent"
import Recents from "../components/Recents";

const LimsPage = () => {
  return (
    <Layout
      // leftSlot={<BaseList />}
      leftSlot={null}
      centerSlot={<LimsContent />}
      rightSlot={<Recents />}
    />
  );
}

export default LimsPage;