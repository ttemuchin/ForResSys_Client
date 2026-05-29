import AuthForm from "../components/AuthForm";
import Layout from "../components/Layout/Layout";
import MainContent from "../components/MainContent";

const Auth = () => {
  return (
    <Layout
      leftSlot={null}
      centerSlot={<MainContent />}
      rightSlot={<AuthForm />}
    />
  );
}

export default Auth;