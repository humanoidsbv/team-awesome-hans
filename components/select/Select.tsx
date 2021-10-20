import React from "react";

import * as Styled from "./Select.styled";

interface SelectProps {
  children: React.ReactNode;
  handleFilter: (filter: string) => void;
}

export const Select = ({ children, handleFilter }: SelectProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleFilter(event.target.value);
  };
  return (
    <Styled.SelectWrapper>
      <Styled.Select onChange={handleChange}>
        <option value="">Show all</option>
        {children}
      </Styled.Select>
    </Styled.SelectWrapper>
  );
};
