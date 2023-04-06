import styled from "styled-components";

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 10vh;
  padding: 0 4rem;

  background-color: var(--blue-900);

  p {
    color: var(--font-white);
  }

  > img {
    height: 2rem;
  }
`;
