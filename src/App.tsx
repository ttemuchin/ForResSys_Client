import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu/>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
