import { Route,  Routes } from "react-router-dom";
import { Contacto, Home } from "./pages/";

export const MariposasRouter = () => {
  return (
    <Routes>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  );
};
