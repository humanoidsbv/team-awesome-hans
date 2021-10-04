import React from "react";
import * as Styled from "./UserButton.styled";

export const UserButton = () => {
  return (
    <Styled.UserButton>
      <Styled.Logo src="/images/humanoids-logo.svg" />
      <Styled.UserIcon src="/images/ruben.jpg" />
    </Styled.UserButton>
  );
};
