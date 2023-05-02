import { Nav, Background } from "./style";
import { NavButtonStyle } from "../../styles/buttons";

export default function NavBar() {
  return (
    <Background>
      <Nav>
        <div className="nav_div_1">
          <h2>Motors</h2>
          <p>shop</p>
        </div>
        <div className="icon_menu_mobile_div"></div>
        <div className="nav_div_2">
          <p>Fazer Login</p>
          <NavButtonStyle>Cadastrar</NavButtonStyle>
        </div>
      </Nav>
    </Background>
  );
}
