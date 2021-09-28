import styled from "styled-components";

export const EntryFormContainer = styled.div`
  background-color: #f5f8fa;
  border: solid 1px #e6eaee;
  border-radius: 4px;
  color: #68768c;
  display: flex;
  font-family: "Proxima Nova";
  font-size: 12px;
  justify-content: flex-start;
  margin-top: 24px;
  padding: 16px;
`;

export const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    background: none;
    display: flex;
  }

  img {
    height: 8px;
    width: 8px;
  }

  input {
    background-image: linear-gradient(to top, #f2f4f7, #fff);
    border: solid 1px #ced0da;
    border-radius: 4px;
    box-sizing: border-box;
    color: #354052;
    height: 36px;
    margin-bottom: 16px;
    margin-top: 12px;
    padding: 0 12px;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    gap: 14px;
    justify-content: space-between;

    label {
      width: 100%;
    }
  }

  input[type="submit"] {
    align-items: center;
    background: #35ac45;
    border: solid 1px #249533;
    border-radius: 4px;
    color: white;
    display: flex;
    font-family: "Proxima Nova";
    font-size: 14px;
    justify-content: center;
    margin-bottom: 18px;
    margin-top: 26px;
    padding: 10px;
    width: 100%;
  }

  input[disabled] {
    border: 1px solid #999999;
    background: #cccccc;
    color: #666666;
  }
`;
