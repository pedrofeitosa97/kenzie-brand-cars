import { Nav, Background } from "./style";
import { themes } from '../../styles/variables';

export default function NavBar() {
  return (
    <Background grey0={themes.colors.grey0}>
      <Nav whiteFixed={themes.colors.whiteFixed} grey2={themes.colors.grey2}>
        <div className="nav_div_1">
          <p>Motors shop</p>
        </div>
        <div className="nav_div_2">
          <p>Fazer Login</p>
          <button>Cadastrar</button>
        </div>
      </Nav>
    </Background>
  );
}
