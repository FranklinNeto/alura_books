import styled from "styled-components";

export const ContainerOptions = styled.ul`
  display: flex;
  justify-content: space-evenly;

  li {
    min-width: 120px;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    height: 100%;
    padding: 0 5px;

    cursor: pointer;

    min-width: 120px;
  }
`;
