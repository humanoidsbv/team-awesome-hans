import React from "react";
import * as Styled from "./UserButton.styled";

export const UserButton = () => {
  return (
    <Styled.UserButton>
      <Styled.Logo src="/img/humanoids-logo.svg" />
      <Styled.UserIcon src="/img/ruben.jpg" />
    </Styled.UserButton>
  );
};
