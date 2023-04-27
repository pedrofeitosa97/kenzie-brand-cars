import styled from "styled-components";

export const CardListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 60px;
  width: 1150px;
  @media (max-width: 375px) {
    width: 375px;
    flex-direction: row;
    flex-wrap: nowrap;
    width: initial;
    height: 380px;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 12px;
    margin-left: 25px;
    margin-top: 0px;
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
      border-radius: 10px;
      margin-right: 20px;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.72, rgb(73, 125, 189)),
        color-stop(0.86, rgb(28, 58, 148))
      );
    }
  }
`;

export const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .mobile_filter_button {
    display: none;
  }

  @media (max-width: 375px) {
    width: 375px;
    flex-direction: column;
    margin-top: 73px;

    .mobile_filter_button {
      width: 375px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 70px;
    }
  }
`;
