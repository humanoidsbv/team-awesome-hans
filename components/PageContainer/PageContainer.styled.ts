import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 16px;

  @media (${({ theme }) => theme.desktop}) {
    padding: 24px;

    button {
      display: none;
    }
  }

  @media (${({ theme }) => theme.desktop}) {
    padding: 24px 50px;
  }

  @media (${({ theme }) => theme.desktopL}) {
    padding: 24px 100px;
  }

  @media (${({ theme }) => theme.desktopXL}) {
    padding: 24px 200px;
  }
`;
