import React, { useRef, useState } from "react";

import * as Styled from "./EntryForm.styled";

interface EntryFormProps {
  onClose: () => void;
  onSubmit: (newTimeEntry: object) => void;
  isOpen: boolean;
}

const defaultForm = {
  activity: null,
  date: new Date().toISOString().split("T").shift(),
  employer: null,
  from: "09:00",
  to: "17:00",
};

export const EntryForm = ({ onClose, onSubmit, isOpen }: EntryFormProps) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState<any>({});
  const [newTimeEntry, setNewTimeEntry] = useState(defaultForm);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsInputValid({ ...isInputValid, [event.target.name]: event.target.checkValidity() });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [event.target.name]: event.target.value });
    setIsFormValid(formRef.current?.checkValidity());
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setNewTimeEntry(defaultForm);
        const formattedTimeEntry = {
          client: newTimeEntry.employer,
          id: Math.random(),
          startTimestamp: new Date(`${newTimeEntry.date}T${newTimeEntry.from}`).toISOString(),
          stopTimestamp: new Date(`${newTimeEntry.date}T${newTimeEntry.to}`).toISOString(),
        };
    onSubmit(formattedTimeEntry);
  };

  return (
    <>
      <Styled.Title>New time entry</Styled.Title>
      <Styled.EntryFormContainer isOpen={isOpen}>
        <Styled.EntryForm isOpen={isOpen} onSubmit={handleSubmit} ref={formRef}>
          <Styled.TextLabel className="employer" htmlFor="employer">
            <div>
              employer
              <button onClick={onClose} type="button">
                <img alt="close" src="/images/close.svg" />
              </button>
            </div>
            <Styled.Input
              id="employer"
              isInputValid={isInputValid.employer !== false}
              name="employer"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Employer"
              required
              type="text"
            />
          </Styled.TextLabel>
          <Styled.TextLabel htmlFor="activity">
            activity
            <Styled.Input
              id="activity"
              isInputValid={isInputValid.activity !== false}
              name="activity"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Activity"
              required
              type="text"
            />
          </Styled.TextLabel>
          <Styled.DateLabel htmlFor="date">
            date
            <Styled.Input
              id="date"
              isInputValid={isInputValid.date !== false}
              name="date"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="date"
              value={newTimeEntry.date}
            />
          </Styled.DateLabel>
          <div>
            <Styled.Label htmlFor="from">
              from
              <Styled.Input
                id="from"
                isInputValid={isInputValid.from !== false}
                name="from"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type="time"
                value={newTimeEntry.from}
              />
            </Styled.Label>
            <Styled.Label htmlFor="to">
              to
              <Styled.Input
                id="to"
                isInputValid={isInputValid.to !== false}
                name="to"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type="time"
                value={newTimeEntry.to}
              />
            </Styled.Label>
          </div>
          <div className="add-time-entry">
            <Styled.SubmitInput disabled={!isFormValid} type="submit" value="Add" />
          </div>
        </Styled.EntryForm>
      </Styled.EntryFormContainer>
    </>
  );
};
