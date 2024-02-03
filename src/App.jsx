import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import SideMenu from "./Components/SideMenu";
import Logins from "./pages/Logins";
import Singup from "./pages/Singup";

function App() {
  const location = useLocation();

  const paths = ["/", "/login"];

  const exactLocation = paths.includes(location.pathname);
  return (
    <>
      {!exactLocation && <SideMenu />}

      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/login" element={<Logins />} />
      </Routes>
    </>
  );
}

export default App;
