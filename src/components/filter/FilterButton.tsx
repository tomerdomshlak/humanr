import React from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../flex_layouts/Gap8VerticalFlex";
import { colors } from "../theme/colors";
import { H3 } from "../typography/H3";
import Gap8HorizontalFlex from "../flex_layouts/Gap8HorizontalFlex";
import HorizontalFlex from "../flex_layouts/HorizontalFlex";

const FilterButton = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <img src="/filter.svg" alt="Filter" />
      <H3>Filter</H3>
    </LayoutRoot>
  );
};

export default FilterButton;

const LayoutRoot = styled(HorizontalFlex)`
  cursor: pointer;
  align-items: center;
  padding: 9px 14px;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid ${colors.gray_1};
`;
