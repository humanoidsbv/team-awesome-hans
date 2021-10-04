import styled from "styled-components";

export const Title = styled.span`
  color: #354052;
  display: none;
  font-size: 24px;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const EntryFormContainer = styled.div<{ isOpen: boolean }>`
  background-color: #f5f8fa;
  border: solid 1px #e6eaee;
  border-radius: 4px;
  color: #68768c;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  font-size: 12px;
  justify-content: flex-start;
  margin-top: 24px;
  padding: 16px;
  position: relative;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  width: 100%;
`;

export const TextLabel = styled.label`
  width: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    max-width: 200px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 245px;
  }
`;

export const DateLabel = styled.label`
  text-transform: uppercase;
  
  @media screen and (min-width: 1024px) {
    width: 150px;
  }
`;

export const Input = styled.input<{ isInputValid: boolean }>`
  box-shadow: 0 0 3px ${(props) => (props.isInputValid ? "#ced0da;" : "#fb6375")};
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

  @media screen and (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const EntryForm = styled.form<{ isOpen: boolean }>`
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

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    gap: 14px;
    justify-content: space-between;

    button {
      background: none;
      display: flex;

      @keyframes rotating {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      img {
        height: 8px;
        width: 8px;
      }

      img:hover {
        animation: rotating 0.5s linear infinite;
      }

      @media screen and (min-width: 1024px) {
        display: none;
      }
    }

    @media screen and (min-width: 1024px) {
      gap: 14px;
    }
  }

  .add-time-entry {
    @media screen and (min-width: 1024px) {
      justify-content: flex-end;
      position: absolute;
      right: 0;
    }
  }
`;

export const SubmitInput = styled.input`
  align-items: center;
  background: #35ac45;
  border: solid 1px #249533;
  border-radius: 4px;
  color: white;
  display: flex;
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
    props.disabled &&
    `
      background: #cccccc;
      border: 1px solid #999999;
      color: #666666;
    `}
`;
