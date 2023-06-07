import React from "react";
import styled from "styled-components";
import Gap16HorizontalFlex from "../flex_layouts/Gap16HorizontalFlex";
import { colors } from "../theme/colors";
import SearchIcon from "../icons/SearchIcon";

const SearchBar1 = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <Field placeholder="Search by anything"></Field>
      <ImageContainer>
        <SearchIcon fill={"white"} />
      </ImageContainer>
    </LayoutRoot>
  );
};

export default SearchBar1;

const LayoutRoot = styled(Gap16HorizontalFlex)`
  width: 339px;
  justify-content: space-between;
  background: ${colors.background_3};
  border-radius: 10px;
  height: fit-content;
  overflow: hidden;
`;

const Field = styled.input`
  border: none;
  border-bottom: 0;
  background: transparent;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  outline: none;
  padding: 0 21px;
  width: 100%;

  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: ${colors.gray_2};
  }
`;

const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.blue_1};
  padding: 8px;
`;
