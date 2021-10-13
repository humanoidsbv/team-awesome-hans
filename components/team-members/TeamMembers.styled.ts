import styled from "styled-components";

export const TeamMemberContainer = styled.div`
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  margin-top: 20px;

  &:hover {
    box-shadow: 0 0 4px #4f88ef;
    cursor: pointer;
  }
`;

export const TeamMemberHeader = styled.div`
  display: none;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const TeamMembersTitle = styled.h1`
  color: #354052;
  font-size: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Sort = styled.select`
  border: solid 1px #ced0da;
  border-radius: 4px;
  color: #7f8fa4;
  height: 36px;
  margin-left: 16px;
  padding: 0 14px;
  width: 120px;
`;

export const FormContainer = styled.div`
  border-bottom: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  border-right: solid 1px #e6eaee;
  border-top-left-radius: 0;
  border-top: solid 1px #e6eaee;
  margin-top: 60px;
  padding: 30px;
  position: relative;
`;

export const FormTitle = styled.div`
  align-items: center;
  background: #fff;
  border-left: solid 4px #4f88ef;
  border-right: solid 1px #e6eaee;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top: solid 1px #e6eaee;
  display: flex;
  height: 60px;
  justify-content: center;
  left: -4px;
  position: absolute;
  top: -60px;
  width: 180px;
  z-index: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Label = styled.label`
  color: #7f8fa4;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
`;

export const Input = styled.input<{ isInputValid: boolean }>`
  background-color: #fff;
  border: solid 1px #dfe3e9;
  border-radius: 4px;
  box-shadow: 0 0 3px ${(props) => (props.isInputValid ? "#ced0da" : "#fb6375")};
  color: #354052;
  height: 36px;
  margin-bottom: 20px;
  margin-top: 8px;
  padding: 0 12px;
  width: 100%;
`;

export const TextArea = styled.textarea<{ isInputValid: boolean }>`
  background-color: #fff;
  border: solid 1px #dfe3e9;
  border-radius: 4px;
  box-shadow: 0 0 3px ${(props) => (props.isInputValid ? "#ced0da" : "#fb6375")};
  margin-top: 8px;
  padding: 12px;
`;

export const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  width: 100px;
`;

export const TeamMemberIcon = styled.img`
  border-radius: 90px;
  margin-bottom: 10px;
`;

export const EditAvatar = styled.span`
  color: #354052;
  font-size: 16px;
`;

export const Divider = styled.div`
  background-color: #dfe3e9;
  height: 260px;
  margin: 0 32px;
  width: 1px;
`;

export const FormLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;

export const AdressWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;
