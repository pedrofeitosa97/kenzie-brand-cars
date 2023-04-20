import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 20;
  background-color: #fff;
  padding: 0 1rem;
  width: 100%;
  height: 5rem;
  nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  }
  .menu-burger {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 2rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
    @media (min-width: 1024px) {
      display: none;
    }
  }
  .profile-info {
    display: none;
    height: 100%;
    border-left: 1px solid #dee2e6;
    align-items: center;
    padding: 0 1rem;
    gap: 1rem;
    p {
      color: #495057;
    }
    @media (min-width: 1024px) {
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
  .btn{
    background-color: transparent;
    font-weight: bold;
  }
  .btn-login {
    color: #4529e6;
    border: none;
  }
  .btn-register {
    border-radius: 4px;
    padding: .5rem 1rem;
    border: 1px solid #DEE2E6;
  }
  ul{
    width: 100%;
    left: 0;
    position: absolute;
    z-index: -50;
    background-color: #fff;
    height: min-content;
    transition: .5s;
  }
  .show{
    transform: translateY(0%);
  }
  .hidden{
    transform: translateY(-150%);

  }
  li{
    display: flex;
    padding: 1rem;
    color: #495057;
    width: 100%;
    text-align: start;
    list-style: none;
    &:last-child{
      justify-content: center;
      button{
        width: 100%;
        padding: 1rem;
        border: 1px solid #DEE2E6;
        border-radius: 4px;
        background-color: transparent;
      }
    }
  }

`;
