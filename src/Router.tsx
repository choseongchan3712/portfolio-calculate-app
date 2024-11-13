import { HashRouter, Route, Routes } from "react-router-dom";
import Calculate from "./pages/Calculate";
import Header from "./components/Header";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Calculate />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
