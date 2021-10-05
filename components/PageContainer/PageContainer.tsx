import React from "react";

import * as Styled from "./PageContainer.styled";

interface PageContainerInterface {
  children: React.ReactNode | React.ReactNode[];
}

export const PageContainer = ({ children }: PageContainerInterface) => {
  return (
    <Styled.PageContainer>
      {children}
    </Styled.PageContainer>
  );
};
