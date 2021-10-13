import React, { useRef, useState } from "react";

import { Button } from "../button/Button";
import * as Styled from "./TeamMembers.styled";

interface AddTeamMemberProps {
  handleClick: () => void;
  handleTeamMemberSubmit: (teamMember: object) => void;
}

interface FormValidityInterface {
  [name: string]: boolean;
}

interface FormStateInterface {
  [name: string]: string;
}

export const TeamMemberForm = ({ handleClick, handleTeamMemberSubmit }: AddTeamMemberProps) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState<FormValidityInterface>({});
  const [newTeamMember, setNewTeamMember] = useState<FormStateInterface>({});

  const handleBlur = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setIsInputValid({ ...isInputValid, [event.target.name]: event.target.checkValidity() });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewTeamMember({ ...newTeamMember, [event.target.name]: event.target.value });
    setIsFormValid(formRef.current?.checkValidity());
  };

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    const formattedTeamMember = {
      address: newTeamMember.address,
      bio: newTeamMember.bio,
      city: newTeamMember.city,
      emailAddress: newTeamMember.emailAddress,
      employer: "Humanoids",
      icon: "https://source.unsplash.com/random/50x50?sig=",
      name: `${newTeamMember.firstName} ${newTeamMember.lastName}`,
      number: "HUM_",
      postalCode: newTeamMember.postalCode,
      role: "Front-end Developer/UX Designer",
      startTime: new Date().toISOString(),
    };
    handleTeamMemberSubmit(formattedTeamMember);
    event.target.reset();
    setIsFormValid(false);
    setIsInputValid({});
    setNewTeamMember({});
  };

  return (
    <>
      <Styled.TeamMemberHeader>
        <Styled.TeamMembersTitle>Add new team member</Styled.TeamMembersTitle>
        <Styled.ButtonWrapper>
          <Button onClick={handleClick} secondary type="button">
            Cancel
          </Button>
          <Button disabled={!isFormValid} form="team-member-form" tertiary type="submit">
            Save
          </Button>
        </Styled.ButtonWrapper>
      </Styled.TeamMemberHeader>
      <Styled.FormContainer>
        <Styled.FormTitle>Personal details</Styled.FormTitle>
        <Styled.Form id="team-member-form" onSubmit={handleSubmit} ref={formRef}>
          <Styled.AvatarWrapper>
            <Styled.TeamMemberIcon src="https://source.unsplash.com/random/100x100" />
            <Styled.EditAvatar>Edit Avatar</Styled.EditAvatar>
          </Styled.AvatarWrapper>
          <Styled.FormLeftWrapper>
            <Styled.NameWrapper>
              <Styled.Label htmlFor="first-name">
                First Name
                <Styled.Input
                  autoComplete="off"
                  id="first-name"
                  isInputValid={isInputValid.firstName !== false}
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="text"
                />
              </Styled.Label>
              <Styled.Label htmlFor="first-name">
                Last Name
                <Styled.Input
                  autoComplete="off"
                  id="last-name"
                  isInputValid={isInputValid.lastName !== false}
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="text"
                />
              </Styled.Label>
            </Styled.NameWrapper>
            <Styled.Label htmlFor="emailAddress">
              Email Address
              <Styled.Input
                autoComplete="off"
                id="emailAddress"
                isInputValid={isInputValid.emailAddress !== false}
                name="emailAddress"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type="text"
              />
            </Styled.Label>
            <Styled.Label htmlFor="bio">
              Bio
              <Styled.TextArea
                autoComplete="off"
                id="bio"
                isInputValid={isInputValid.bio !== false}
                name="bio"
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
            </Styled.Label>
          </Styled.FormLeftWrapper>
          <Styled.Divider />
          <Styled.FormRightWrapper>
            <Styled.AddressWrapper>
              <Styled.Label htmlFor="postalCode">
                Postal Code
                <Styled.Input
                  autoComplete="off"
                  id="postalCode"
                  isInputValid={isInputValid.postalCode !== false}
                  name="postalCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="text"
                />
              </Styled.Label>
              <Styled.Label htmlFor="city">
                City
                <Styled.Input
                  autoComplete="off"
                  id="city"
                  isInputValid={isInputValid.city !== false}
                  name="city"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="text"
                />
              </Styled.Label>
            </Styled.AddressWrapper>
            <Styled.Label htmlFor="address">
              Address
              <Styled.Input
                autoComplete="off"
                id="address"
                isInputValid={isInputValid.address !== false}
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                required
                type="text"
              />
            </Styled.Label>
          </Styled.FormRightWrapper>
        </Styled.Form>
      </Styled.FormContainer>
    </>
  );
};
