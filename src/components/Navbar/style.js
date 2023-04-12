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
  border-color: grey;
  border-radius: 8px 8px 0px 0px;
  background-color: white;

  .nav_div_2 {
    display: flex;
    justify-content: space-between;
    width: 25%;
    border-style: none none none solid;
    border-color: grey;
    height: 80px;
    align-items: center;
    padding-left: var(--margin-nav-1);
  }
`;
