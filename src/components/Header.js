import { useNavigate } from "react-router-dom";
import {goToHomePage, goToProfilePage, goToLoginPage} from '../routes/coordinator'
function Header() {
  const navigate = useNavigate()
  
  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, "Arthur")} >
        Ir para página de perfil
      </button>
      <button onClick={() => goToLoginPage(navigate)} >
        Ir para páginda de login
      </button>
    </header>
  );
}

export default Header;
