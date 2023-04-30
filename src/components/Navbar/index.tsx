import { Nav, Background } from "./style";
import { NavButtonStyle } from "../../styles/buttons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
  const [displayMenu, setDisplayMenu] = useState("none");
  const mobileResoluction = useMediaQuery({ minWidth: 761 });
  function handleDropMenu() {
    displayMenu === "none" ? setDisplayMenu("flex") : setDisplayMenu("none");
  }
  function resetMobile() {
    if (mobileResoluction) {
      setDisplayMenu("none");
    }
  }
  useEffect(() => {
    resetMobile();
  }, [mobileResoluction]);
  return (
    <Background>
      <Nav>
        <div className="nav_div_1">
          <h2>Motors</h2>
          <p>shop</p>
        </div>
        <div className="drop_menu_div">
          <div
            className="icon_menu_mobile_div"
            onClick={() => handleDropMenu()}
          ></div>
          <div className="menu_bar_div" style={{ display: displayMenu }}>
            <div className="dropMenuItem">Fazer Login</div>
            <div className="dropMenuItem">Cadastrar</div>
          </div>
        </div>
        <div className="nav_div_2">
          <p>Fazer Login</p>
          <NavButtonStyle>Cadastrar</NavButtonStyle>
        </div>
      </Nav>
    </Background>
  );
}
