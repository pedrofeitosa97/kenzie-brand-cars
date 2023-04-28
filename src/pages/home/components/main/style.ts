import styled from 'styled-components'

export const StyledDiv = styled.div`
    text-align: center;

    .filter_option {
        display: none;
    }

    .car_cards {
        display: flex;
        width: 100%;
        gap: 40px;
        margin-top: 40px;
        overflow-x: auto;
    }
    
    .filter_buttons button {
        width: 80%;
    }
    
    .filter_button_filter {
        display: block;
    }

@media (min-width: 800px) {
    display: flex;

    ul {
        list-style: none;
    }
    
    .filter_buttons {
        display: none;
    }

    .filter_option {
        display: block;
        width: 20%;
        list-style: none;
    }

    .car_cards {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        gap: 60px;
        margin-top: 40px;
    }

    .filter_option {
        padding-top: 20px;
        padding-left: 30px;
        list-style: none;
    }
}
`