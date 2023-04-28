import styled from 'styled-components'

export const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.burguer_icon {
    width: 25px;
    height: 25px;
    margin-right: 30px;
}

.header_name {
    padding-block: 26px;
    padding-inline: 30px;
}

button {
    display: none;
}

@media (min-width: 800px) {
    .burguer_icon {
        display: none;
    }

    .header_buttons {
        display: flex;
        gap: 40px;
        padding-right: 30px;
    }

    button {
        display: flex;
        padding: 15px 30px;
        background: transparent;
        cursor: pointer;
    }

    .login_button {
        border: none;
    }

    .login_register {
        border: 2px solid #DEE2E6;
        border-radius: 4px;
    }
}
`

