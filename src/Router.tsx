import { HashRouter, Route, Routes } from "react-router-dom";
import Calculate from "./pages/Calculate";
import Header from "./components/Header";
import Exchange from "./pages/Exchange";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Calculate />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
