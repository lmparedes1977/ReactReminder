import styled from "styled-components";

export const Container = styled.button`
  display: flex;

  padding: 0.7rem 1.5rem;

  background-color: var(--blue-300);
  color: var(--font-black);

  border: none;
  border-radius: 0.2rem;

  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.37);
  transition: 0.3s ease-in-out;

  :hover {
    cursor: pointer;
    opacity: 0.85;
  }
`;
