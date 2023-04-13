import { StyledNavbar } from "./style"
import logo from '../../../../assets/motos-shop-logo.png'
import barsIcon from '../../../../assets/bars.png'


export const Navbar = () =>{
    return(
        <StyledNavbar>
            <nav>
                <img src={logo} alt="Logo da Motors Shop" />
                <img src={barsIcon} alt="Icone de Menu no tipo hamburger" />
            </nav>
        </StyledNavbar>
    )
}