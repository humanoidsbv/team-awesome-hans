import React, { useRef } from "react";

import * as Styled from "./EntryForm.styled";

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  console.log("handle submitted :)");
}

interface EntryFormProps {
  onClick: () => void;
}
export const EntryForm = ({ onClick }: EntryFormProps) => {
  return (
    <Styled.EntryFormContainer>
      <Styled.EntryForm onSubmit={handleSubmit}>
        <label>
          <div>
            EMPLOYER
            <button onClick={onClick}>
              <img src="/img/close.svg" alt="close" />
            </button>
          </div>
          <input name="employer" type="text" />
        </label>
        <label>
          ACTIVITY
          <br />
          <input name="activity" type="text" />
        </label>
        <label>
          DATE
          <br />
          <input name="date" type="text" />
        </label>
        <div>
          <label>
            FROM
            <br />
            <input name="from" type="text" />
          </label>
          <label>
            TO
            <br />
            <input name="to" type="text" />
          </label>
        </div>
        <input type="submit" value="Add" />
      </Styled.EntryForm>
    </Styled.EntryFormContainer>
  );
};
