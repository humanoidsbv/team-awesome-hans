import styled from "styled-components";

export const EntryFormContainer = styled.div`
  display: flex;
  padding: 16px;
  margin-top: 24px;
  justify-content: flex-start;
  font-family: "Proxima Nova";
  font-size: 12px;
  color: #68768c;
  border-radius: 4px;
  border: solid 1px #e6eaee;
  background-color: #f5f8fa;
`;

export const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

	button{
		display:flex;
		background: none;
	}
	
	img{
		width: 8px;
		height: 8px;
	}

  input {
    box-sizing: border-box;
    border-radius: 4px;
    border: solid 1px #ced0da;
    background-image: linear-gradient(to top, #f2f4f7, #fff);
    margin-top: 12px;
    margin-bottom: 16px;
    width: 100%;
    color: #354052;
    height: 36px;
    padding-left: 12px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: no-wrap;
    gap: 14px;

    label {
      width: 100%;
    }
  }

  input[type="submit"] {
    align-items: center;
    background: #35ac45;
    border-radius: 4px;
    border: solid 1px #249533;
    color: white;
    display: flex;
    font-family: "Proxima Nova";
    font-size: 14px;
    justify-content: center;
    padding: 10px;
    width: 100%;
    margin-bottom: 18px;
    margin-top: 26px;
  }
`;
