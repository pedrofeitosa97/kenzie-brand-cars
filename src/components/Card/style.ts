import styled from "styled-components";

export const CardStyle = styled.div<{color: string}>`
  width: 312px;
  margin: 0px 12px 0px 12px;

  .div--img {
    width: 312px;
    height: 152px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    background-color: ${({ color }) => color};
  }
  .div--img img {
    width: 80%;
    height: 80%;
  }
  .h2--car-name {
    margin: 16px 0px 16px 0px;
  }
  .div--name-logo {
    display: flex;
  }
  .div--name-logo div {
    margin-right: 15px;
  }
`;
