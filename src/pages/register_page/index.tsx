import { Container } from "../../components/container"
import { Navbar } from "../../components/navbar"
import { StyledRegisterPage } from "./style"




export const RegisterPage = () => {
    return (
        <Container>
            <StyledRegisterPage>
                {/* <Navbar/> */}
                <h2>Cadastro</h2>
                <p>Informações pessoais</p>
                <form className="">
                    <label>
                        <p>Nome:</p>
                        <input type="text" placeholder="Ex: Samuel Leão" />
                    </label>
                    <label>
                        <p>Email:</p>
                        <input type="text" placeholder="Ex: samuel@kenzie.com" />
                    </label>
                    <label>
                        <p>CPF:</p>
                        <input type="text" placeholder="Ex: 000.000.000-00" />
                    </label>
                    <label>
                        <p>Celular:</p>
                        <input type="text" placeholder="Ex: (DDD) 90000-0000" />
                    </label>
                    <label>
                        <p>Data de nascimento:</p>
                        <input type="text" placeholder="00/00/00" />
                    </label>
                    <label>
                        <p>Descrição:</p>
                        <input type="text" placeholder="Digitar descrição" />
                    </label>
                    <p>Informações de endereço</p>
                    <label>
                        <p>CEP:</p>
                        <input type="text" placeholder="00000.000" />
                    </label>
                    <div className="double-input">
                        <label>
                            <p>Estado</p>
                            <input type="text" placeholder="Digitar Estado" />
                        </label>
                        <label>
                            <p>Cidade</p>
                            <input type="text" placeholder="Digitar Cidade" />
                        </label>
                    </div>
                    <label>
                        <p>Rua</p>
                        <input type="text" placeholder="Digitar o nome da sua rua" />
                    </label>
                    <p>Tipo de conta</p>
                    <div className="container-btn-account">
                        <button className="active">Comprador</button>
                        <button>Anuciante</button>
                    </div>
                    <label>
                        <p>Senha</p>
                        <input type="password" placeholder="Digitar Senha" />
                    </label>
                    <label>
                        <p>Confirmar Senha</p>
                        <input type="password" placeholder="Digitar Senha" />
                    </label>
                    <button type="submit" className="btn-submit">Finalizar Cadastro</button>
                </form>
            </StyledRegisterPage>
        </Container>
    )
}