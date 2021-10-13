import styled from "styled-components";

export const TeamMember = styled.div`
  align-items: center;
  box-sizing: border-box;
  background-color: #fff;
  border: solid 1px #e6eaee;
  border-bottom-right-radius: 4px;
  border-left: 0;
  border-top-right-radius: 4px;
  color: #354052;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    flex-direction: row;
    padding: 24px 0;
  }
`;

export const TeamMemberContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 16px;
  width: 100%;
`;

export const Icon = styled.img`
  border-radius: 90px;
  margin-right: 25px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  margin-bottom: 2px;
  white-space: nowrap;
`;

export const Role = styled.span`
  color: #7f8fa4;
  white-space: nowrap;
`;

export const DetailButton = styled.button`
  background: none;
  margin-left: auto;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const Details = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 0 16px;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;

export const DetailsHeader = styled.div<{ isOpen: boolean }>`
  align-items: center;
  background: #f5f8fa;
  border-bottom: solid 1px #e6eaee;
  border-top: solid 1px #e6eaee;
  color: #7f8fa4;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  height: 36px;
  margin: 16px 0;
  padding: 0 30px;
  width: 100%;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 16px 0;
  white-space: nowrap;

  @media (${({ theme }) => theme.desktop}) {
    margin: 0 0 0 54px;
  }
`;

export const EmployerFooter = styled.span`
  color: #7f8fa4;
`;

export const StartingDateFooter = styled.span`
  color: #7f8fa4;
`;
