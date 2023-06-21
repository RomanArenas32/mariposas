import { MariposasRouter } from "./MariposasRouter";
import { Portada } from "./pages/Portada";
import { BrowserRouter } from "react-router-dom";

export const Mariposas = () => {
  return (
    <>
      <BrowserRouter>
        <Portada />
        <MariposasRouter />
      </BrowserRouter>
    </>
  );
};
