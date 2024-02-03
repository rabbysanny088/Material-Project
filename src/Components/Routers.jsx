import { Route, Routes } from "react-router-dom";
import Analyticss from "../pages/Analyticss";
import Data from "../pages/Data";
import Default from "../pages/Default";
import Price from "../pages/Price";
import PriceTwo from "../pages/PriceTwo";
import Singup from "../pages/Singup";
import Staticed from "../pages/Staticed";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/default" element={<Default />} />
        <Route path="/analytics" element={<Analyticss />} />
        <Route path="/statistics" element={<Staticed />} />
        <Route path="/data" element={<Data />} />
        <Route path="/price" element={<Price />} />
        <Route path="/price2" element={<PriceTwo />} />
      </Routes>
    </div>
  );
};

export default Routers;
