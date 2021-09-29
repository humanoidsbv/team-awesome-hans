import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px;

  @media screen and (min-width: 1024px) {
    padding: 24px 200px;

    button {
      display: none;
    }
  }
`;
