import styled from "styled-components";

export const StyledCircleInitials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size ? `${props.size}rem` : "2rem")};
  min-height: ${(props) => (props.size ? `${props.size}rem` : "2rem")};
  background-color: #4529e6;
  border-radius: 50%;
  font-weight: 500;
  color: #fff;
  font-size: ${(props) => (props.size ? `${props.size / 2}rem` : "1rem")};
`;
