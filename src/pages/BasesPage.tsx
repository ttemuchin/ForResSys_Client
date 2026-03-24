import BaseAction from "../components/Bases/BaseAction";
import BaseContent from "../components/Bases/BaseContent";
import BaseList from "../components/Bases/BaseList";
import Layout from "../components/Layout/Layout";

const BasesPage = () => {
  return (
    <Layout
      leftSlot={<BaseList />}
      centerSlot={<BaseContent />}
      rightSlot={<BaseAction />}
    />
  );
}

export default BasesPage;