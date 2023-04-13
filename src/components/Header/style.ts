import styled from "styled-components";
import Photo from "../../statics/Photo.png";

export const HeaderStyle = styled.header<{grey2: string, whiteFixed: string}>`
  height: 530px;
  width: var(--page-width);
  background-image: url(${Photo});
  background-color: ${({ grey2 }) => grey2};
  background-size: 1000px 450px;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  justify-content: center;
  background-position: center;
  color: ${({ whiteFixed }) => whiteFixed};

  h1 {
    font-size: 46px;
  }

  p {
    font-size: 36px;
  }

  .header_fade {
    width: 100%;
    height: 100%;
    background: rgb(246, 246, 246);
    background: linear-gradient(
      180deg,
      rgba(246, 246, 246, 0) 0%,
      rgba(7, 7, 7, 1) 83%,
      rgba(0, 0, 0, 1) 96%
    );
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;
