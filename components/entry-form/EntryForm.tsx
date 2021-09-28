import React, { useRef, useState } from "react";

import * as Styled from "./EntryForm.styled";

interface EntryFormProps {
  onClose: () => void;
  onSubmit: (newTimeEntry: object) => void;
}

const defaultForm = {
  activity: "Design",
  date: "2021-09-28",
  employer: "Humanoids",
  from: "09:00",
  to: "17:00",
};

export const EntryForm = ({ onClose, onSubmit }: EntryFormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState(defaultForm);
  const [isFormValid, setIsFormValid] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    setIsFormValid(formRef.current?.checkValidity());
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setNewTimeEntry(defaultForm);
    onSubmit(newTimeEntry);
  };

  return (
    <Styled.EntryFormContainer>
      <Styled.EntryForm onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="employer">
          <div>
            EMPLOYER
            <button type="button" onClick={onClose}>
              <img src="/images/close.svg" alt="close" />
            </button>
          </div>
          <input
            id="employer"
            name="employer"
            onChange={handleChange}
            type="text"
            value={newTimeEntry.employer}
            required
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
            required
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
            required
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
              required
            />
          </label>
          <label htmlFor="to">
            TO
            <br />
            <input
              id="to"
              name="to"
              onChange={handleChange}
              type="time"
              value={newTimeEntry.to}
              required
            />
          </label>
        </div>
        {!isFormValid && <input type="submit" value="Add" disabled />}
        {isFormValid && <input type="submit" value="Add" />}
      </Styled.EntryForm>
    </Styled.EntryFormContainer>
  );
};
