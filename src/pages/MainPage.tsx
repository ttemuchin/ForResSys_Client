import Layout from "../components/Layout/Layout";
import MainContent from "../components/MainContent";
import Recents from "../components/Recents";

const MainPage = () => {
  return (
    <Layout
      // leftSlot={<BaseList />}
      centerSlot={<MainContent />}
      rightSlot={<Recents />}
    />
  );
}

export default MainPage;