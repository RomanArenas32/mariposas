import { FiMenu } from "react-icons/fi";
import "../styles/pages.css";

export const Portada = () => {
  return (
    <>
      <div className="portada">
        <h1 className="portada-titulo">Mariposas</h1>
        <div className="portada-menu">
          <FiMenu />
        </div>
      </div>
    </>
  );
};
