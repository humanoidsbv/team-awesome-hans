import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
	justify-content: flex-end
`;

export const Select = styled.select`
	width:100%;
  border-radius: 4px;
  border: solid 1px #ced0da;
  color: #7f8fa4;
  display: flex;
  height: 36px;
  margin-top: 36px;
  padding: 0 14px;
  text-align: center;

  @media (${({ theme }) => theme.desktop}) {
    width: 160px;
  }
`;