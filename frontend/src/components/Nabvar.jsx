import '../styles/components.css';
import { Link } from "react-router-dom";


export const Nabvar = () => {
  return (

    <div className="nabvar">
      <ul>
        <li>
          <Link to="/contacto">OPCION 1</Link>
        </li>
      </ul>
    </div>
  );
};