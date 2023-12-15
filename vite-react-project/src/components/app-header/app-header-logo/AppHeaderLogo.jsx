import { Link } from "react-router-dom";
import './AppHeaderLogo.css';

const  AppHeaderLogo = () => {
    return (
      <span className="logo">
        <Link to="/"> RecipeHub</Link>
      </span>
    );
  }

export default AppHeaderLogo;