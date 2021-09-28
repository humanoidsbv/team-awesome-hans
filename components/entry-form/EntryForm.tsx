import React, { useState } from "react";

import * as Styled from "./EntryForm.styled";

interface EntryFormProps {
  onClose: () => void;
}

const defaultForm = {
  employer: "Humanoids",
  activity: "Design",
  date: "2021-09-28",
  from: "09:00",
  to: "17:00",
};

export const EntryForm = ({ onClose }: EntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState(defaultForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    setNewTimeEntry(defaultForm);
    event.preventDefault();
  };

  return (
    <Styled.EntryFormContainer>
      <Styled.EntryForm onSubmit={handleSubmit}>
        <label htmlFor="employer">
          <div>
            EMPLOYER
            <button type="button" onClick={onClose}>
              <img src="/img/close.svg" alt="close" />
            </button>
          </div>
          <input
            id="employ"
            name="employer"
            onChange={handleChange}
            type="text"
            value={newTimeEntry.employer}
          />
        </label>
        <label htmlFor="activity">
          ACTIVITY
          <br />
          <input
            id="activity"
            name="activity"
            onChange={handleChange}
            type="text"
            value={newTimeEntry.activity}
          />
        </label>
        <label htmlFor="date">
          DATE
          <br />
          <input
            id="date"
            name="date"
            onChange={handleChange}
            type="date"
            value={newTimeEntry.date}
          />
        </label>
        <div>
          <label htmlFor="from">
            FROM
            <br />
            <input
              id="from"
              name="from"
              onChange={handleChange}
              type="time"
              value={newTimeEntry.from}
            />
          </label>
          <label htmlFor="to">
            TO
            <br />
            <input id="to" name="to" onChange={handleChange} type="time" value={newTimeEntry.to} />
          </label>
        </div>
        <input type="submit" value="Add" />
      </Styled.EntryForm>
    </Styled.EntryFormContainer>
  );
};
