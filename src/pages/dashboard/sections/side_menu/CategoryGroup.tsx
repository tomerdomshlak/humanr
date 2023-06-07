import React from "react";
import styled from "styled-components";
import Gap16VerticalFlex from "../../../../components/flex_layouts/Gap16VerticalFlex";
import { H5 } from "../../../../components/typography/H5";
import VerticalFlex from "../../../../components/flex_layouts/VerticalFlex";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import { colors } from "../../../../components/theme/colors";
import MenuItem from "./MenuItem";

type Props = {
  title: string;
  items: string[];
  selectedItemKey: string;
};

const CategoryGroup = ({ title, items, selectedItemKey }: Props) => {
  return (
    <LayoutRoot>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((text) => (
          <MenuItem
            key={text}
            text={text}
            isSelected={selectedItemKey === text}
          />
        ))}
      </ItemsContainer>
    </LayoutRoot>
  );
};

export default CategoryGroup;

const LayoutRoot = styled(Gap16VerticalFlex)``;

const Title = styled(H5)`
  text-transform: uppercase;
  margin: 0 36px;
`;

const ItemsContainer = styled(VerticalFlex)`
  gap: 6px;
`;

const ItemContainer = styled(HorizontalFlex)`
  gap: 12px;
  padding: 12px 24px;
  margin: 0 12px;
  background: ${colors.blue_1};
  border-radius: 10px;
  align-items: center;
`;

const ItemText = styled(H5)`
  color: ${colors.gray_1};
`;
