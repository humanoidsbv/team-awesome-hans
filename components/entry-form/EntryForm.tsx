import React, { useRef, useState } from "react";

import * as Styled from "./EntryForm.styled";

interface EntryFormProps {
  onClose: () => void;
  onSubmit: (newTimeEntry: object) => void;
  isOpen: boolean;
}

const defaultForm = {
  activity: "Design",
  date: "2021-09-28",
  employer: "Humanoids",
  from: "09:00",
  to: "17:00",
};

export const EntryForm = ({ onClose, onSubmit, isOpen }: EntryFormProps) => {
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
    <>
      <Styled.Title>New time entry</Styled.Title>
      <Styled.EntryFormContainer isOpen={isOpen}>
        <Styled.EntryForm
          onSubmit={handleSubmit}
          ref={formRef}
          isValid={isFormValid}
          isOpen={isOpen}
        >
          <label htmlFor="employer">
            <div>
              employer
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
            activity
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
            date
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
              from
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
              to
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
          <div className="add-time-entry">
            <input type="submit" value="Add" />
          </div>
        </Styled.EntryForm>
      </Styled.EntryFormContainer>
    </>
  );
};
