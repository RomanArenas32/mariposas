import "../styles/components.css";
import { Link } from "react-router-dom";

export const Nabvar = ({setToggleNavbar}) => {
  
  return (
    <div className="nabvar">
      <ul className="nabvar-lista">
        <Link to="/contacto">
          <li className="nabvar-enlace">Ultimas Noticas</li>
        </Link>

        <Link to="/contacto">
          <li className="nabvar-enlace">Clasificados</li>
        </Link>
        <Link to="/contacto">
          <li className="nabvar-enlace">Contacto</li>
        </Link>
        <Link to="/contacto">
          <li className="nabvar-enlace">Redes sociales</li>
        </Link>
      </ul>
    </div>
  );
};
