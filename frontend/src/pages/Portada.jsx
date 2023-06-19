import { FiMenu, FiX } from "react-icons/fi";
import "../styles/pages.css";
import { useState } from "react";
import { Nabvar } from "../components/Nabvar";

export const Portada = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const showNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };

  console.log(toggleNavbar);

  return (
    <div>
      <div className="portada">
        <h1 className="portada-titulo">Mariposas</h1>
        <div className="portada-menu" onClick={showNavbar}>
          {toggleNavbar ? <FiX /> : <FiMenu />}
        </div>
      </div>
      <div>{toggleNavbar == true && <Nabvar />}</div>
    </div>
  );
};
