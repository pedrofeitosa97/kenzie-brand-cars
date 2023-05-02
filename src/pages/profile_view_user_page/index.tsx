import { useParams } from "react-router-dom"
import { Container } from "../../components/container"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { StyledProfileViewUserPage } from "./style"
import { CircleInitials } from "../../components/circle_initials"
import { CardAnnounce } from "./components/card_announce/card-announce"



export const ProfileViewUserPage = () => {
    const { currentUser } = useContext(AuthContext)
    const { id } = useParams()
    return (
        <Container>
            <StyledProfileViewUserPage>
                <div className="bg-brand-color">
                    <div className="card">
                        <CircleInitials size={4} first={currentUser?.name[0].toUpperCase() as string} second={currentUser?.name[1].toUpperCase() as string} />
                        <p>{currentUser?.name} <span className="account-type">{currentUser?.type === "buyer" ? "Comprador" : "Anunciante"}</span></p>
                        <p className="profile-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque esse, error ad facere tenetur vel tempora fuga, labore officiis id tempore eius culpa. Veniam fuga pariatur voluptate iste, eum nihil.</p>
                        <button className="btn-create-announce">Criar Anuncio</button>
                    </div>
                </div>
                <div className="announcements">
                    <h2>Anuncios</h2>
                    <div className="car-announcements-carrousel">
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                    </div>
                </div>
                <div className="pagination">
                    <p>1 de 2</p>
                    <p className="forwad">Seguinte</p>
                </div>
            </StyledProfileViewUserPage>
        </Container>
    )
}