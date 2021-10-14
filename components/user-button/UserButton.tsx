import React from "react";
import * as Styled from "./UserButton.styled";

export const UserButton = () => {
  return (
    <Styled.UserButton>
      <Styled.Logo src="/images/humanoids-logo.svg" />
      <Styled.UserIcon
        src={`https://source.unsplash.com/random/32x32?sig=${Math.floor(Math.random() * 1001)}`}
      />
    </Styled.UserButton>
  );
};
