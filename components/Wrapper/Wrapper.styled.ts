import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px;

  @media screen and (min-width: 1024px) {
    padding: 24px;

    button {
      display: none;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 24px 50px;
  }

  @media screen and (min-width: 1400px) {
    padding: 24px 100px;
  }

  @media screen and (min-width: 1600px) {
    padding: 24px 200px;
  }
`;
