import { StyledNavbar } from "./style"
import logo from '../../assets/motos-shop-logo.png'
import barsIcon from '../../assets/bars.png'
import { useState } from "react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

interface INavbar {
    userAuthenticated: boolean
}

export const Navbar = ({ userAuthenticated }: INavbar) => {
    const [showNavbarMobile, setShowNavbarMobile] = useState<boolean>(false)
    return (
        <StyledNavbar>
            <nav>
                <img src={logo} alt="Logo da Motors Shop" />
                <button className="menu-burger" onClick={() => setShowNavbarMobile(!showNavbarMobile)}>
                    {showNavbarMobile ? (
                        <GrClose size={20} />
                    ) : (
                        <GiHamburgerMenu size={20} />
                    )}
                </button>
                {userAuthenticated ? (
                    <div className="profile-info">
                        <h2 className="profile-initials">SL</h2>
                        <p>Samuel Leão</p>
                    </div>
                ) : (
                    <div className="profile-info">
                        <button className="btn btn-login">Fazer Login</button>
                        <button className="btn btn-register">Cadastrar</button>
                    </div>
                )}
            </nav>
            <ul className={showNavbarMobile ? "show" : "hidden"}>
                <li>Carros</li>
                <li>Motos</li>
                <li>Leilão</li>
                <hr />
                <li>Fazer Login</li>
                <li><button>Cadastrar</button></li>
            </ul>
        </StyledNavbar>
    )
}