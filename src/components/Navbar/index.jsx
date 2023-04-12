import { Nav, Background } from "./style";

export default function NavBar() {
  return (
    <Background>
      <Nav>
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
