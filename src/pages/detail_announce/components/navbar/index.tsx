import { StyledNavbar } from "./style"
import logo from '../../../../assets/motos-shop-logo.png'
import barsIcon from '../../../../assets/bars.png'


export const Navbar = () =>{
    return(
        <StyledNavbar>
            <nav>
                <img src={logo} alt="Logo da Motors Shop" />
                <img className="menu-burger" src={barsIcon} alt="Icone de Menu no tipo hamburger" />
                <div className="profile-info">
                    <h2 className="profile-initials">SL</h2>
                    <p>Samuel Leão</p>

                </div>
            </nav>
        </StyledNavbar>
    )
}