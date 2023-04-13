import styled from "styled-components";

export const StyledDetailAnnouncementPage = styled.div`
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    .mobile {
      width: 100%;
      height: 100%;
    }
    .desktop {
      display: none;
      width: 100%;
      height: 100%;
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .custom{
    min-height: 15.5rem;
    div{
      height: 100%;
    }
    /* height: 20% !important; */
    margin-top: 6rem;
  }
`;
