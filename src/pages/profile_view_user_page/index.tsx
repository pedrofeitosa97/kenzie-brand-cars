import { useParams } from "react-router-dom"
import { Container } from "../../components/container"



export const ProfileViewUserPage = () =>{
    const {id} = useParams()
    return(
        <Container>
            <h1>{id}</h1>
        </Container>
    )
}