import styled from "styled-components";



export const StyledNavbar = styled.header`
position: fixed;
z-index: 20;
background-color: #fff;
padding: 0 1rem;
width: 100%;
height: 5rem ;
nav{
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.menu-burger{
        @media(min-width: 1024px){
            display: none;
        }
    }
.profile-info{
    display: none;
    height: 100%;
    border-left: 1px solid #DEE2E6;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    p{
        color: #495057;
    }
    @media (min-width: 1024px){
        display: flex;
    }
}
.profile-initials {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    background-color: #4529e6;
    border-radius: 50%;
    font-weight: 500;
    color: #fff;
    font-size: 1rem;
  }
`