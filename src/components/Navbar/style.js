import styled from "styled-components";

export const Background = styled.div`
  background-color: black;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--margin-nav-1) 0 var(--margin-nav-1);
  align-items: center;
  height: 80px;
  border-style: none none solid none;
  border-color: var(--collor-grey-6);
  border-radius: 8px 8px 0px 0px;
  background-color: white;

  .nav_div_1 {
    display: flex;
    gap: 5px;
    align-items: end;
  }
  .nav_div_1 p {
    line-height: 1;
    font-size: 15px;
    color: #4529e6;
    font-weight: 800;
  }
  .nav_div_1 h2 {
    font-size: 25px;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-image: linear-gradient(to right, #0b0d0d, #4529e6);
    background-clip: text;
    color: transparent;
    line-height: 1;
  }

  .nav_div_2 {
    display: flex;
    justify-content: space-between;
    width: 25%;
    border-style: none none none solid;
    border-color: var(--collor-grey-6);
    height: 80px;
    align-items: center;
    padding-left: var(--margin-nav-1);
  }

  .nav_div_2 p {
    color: var(--collor-grey-2);
    font-size: 16px;
    font-style: Semi Bold;
  }
`;
