import { HashRouter, Route, Routes } from "react-router-dom";
import Calculate from "./pages/Calculate";
import Header from "./components/Header";
import Exchange from "./pages/Exchange";
import Date from "./pages/Date";
import Day from "./pages/date-pages/Day";
import Week from "./pages/date-pages/Week";
import Month from "./pages/date-pages/Month";
import DDay from "./pages/date-pages/DDay";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Calculate />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/date" element={<Date />}>
          <Route index element={<Day />}/>
          <Route path="week" element={<Week />} />
          <Route path="month" element={<Month />} />
          <Route path="d-day" element={<DDay />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
