import styled from "styled-components";

export const PaginationDivStyle = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 375px) {
    flex-direction: column;
    width: 375px;
    gap: 25px;
    margin-top: 65px;
  }

  span {
    margin: 0px 23px 0px 23px;
    font-size: 24px;
    font-weight: 600;
  }

  button {
    background-color: white;
    border: none;
    color: var(--collor-brand-2);
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
  }
`;
