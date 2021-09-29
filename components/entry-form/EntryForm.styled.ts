import styled from "styled-components";

interface TimeEntryFormProps {
  isValid: boolean;
  isOpen: boolean;
}

interface TimeEntryFormContainerProps {
  isOpen: boolean;
}

export const Title = styled.span`
  color: #354052;
  display: none;
  font-family: "Proxima Nova";
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const EntryFormContainer = styled.div<TimeEntryFormContainerProps>`
  background-color: #f5f8fa;
  border-radius: 4px;
  border: solid 1px #e6eaee;
  color: #68768c;
  display: none;
  font-family: "Proxima Nova";
  font-size: 12px;
  justify-content: flex-start;
  margin-top: 24px;
  padding: 16px;

  ${(props) =>
    props.isOpen &&
    `
    display: flex;
  `}

  @media screen and (min-width:1024px) {
    display: flex;
  }
`;

export const EntryForm = styled.form<TimeEntryFormProps>`
  display: none;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.isOpen &&
    `
    display: flex;
  `}

  @media screen and (min-width: 1024px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 18px;
  }

  label {
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
      width: 245px;
    }
  }
  label[for="date"] {
    @media screen and (min-width: 1024px) {
      width: 150px;
    }
  }

  button {
    background: none;
    display: flex;

    @media screen and (min-width: 1024px) {
      display: none;
    }
  }

  img {
    height: 8px;
    width: 8px;
  }

  input {
    background-image: linear-gradient(to top, #f2f4f7, #fff);
    border-radius: 4px;
    border: solid 1px #ced0da;
    box-sizing: border-box;
    color: #354052;
    height: 36px;
    margin-bottom: 16px;
    margin-top: 12px;
    padding: 0 12px;
    width: 100%;

    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    gap: 14px;
    justify-content: space-between;

    @media screen and (min-width: 1024px) {
      gap: 14px;
    }

    label {
      width: 100%;
    }
  }

  .add-time-entry {
    @media screen and (min-width: 1024px) {
      justify-content: flex-end;
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

    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
      margin-right: 26px;
      margin-top: 0;
      width: 90px;
    }

    ${(props) =>
      !props.isValid &&
      `
      background: #cccccc;
      border: 1px solid #999999;
      color: #666666;
    `}
  }
`;
