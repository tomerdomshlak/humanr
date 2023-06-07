import React, { useState } from "react";
import styled from "styled-components";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import { colors } from "../../../../components/theme/colors";
import { H5 } from "../../../../components/typography/H5";
import ElementIcon from "../../../../components/icons/ElementIcon";
import CalendarIcon from "../../../../components/icons/CalendarIcon";
import JobIcon from "../../../../components/icons/JobIcon";
import MessageTextIcon from "../../../../components/icons/MessageTextIcon";
import MonitorMobileIcon from "../../../../components/icons/MonitorMobileIcon";
import Profile2UserIcon from "../../../../components/icons/Profile2UserIcon";
import Convert3DCubeIcon from "../../../../components/icons/Convert3DCubeIcon";
import NoteIcon from "../../../../components/icons/NoteIcon";
import SettingIcon from "../../../../components/icons/SettingIcon";

type Props = {
  text: string;
  isSelected: boolean;
};

const MenuItem = ({ text, isSelected }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const isSelectedOrHovering = isSelected || isHovering;
  const getIcon = () => {
    const icons: any = {
      Dashboard: (
        <ElementIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      Message: (
        <MessageTextIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      Calendar: (
        <CalendarIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      Jobs: (
        <JobIcon fill={isSelectedOrHovering ? colors.white : colors.gray_1} />
      ),
      Candidates: (
        <Profile2UserIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      "My Referrals": (
        <Convert3DCubeIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      "Career Site": (
        <MonitorMobileIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      Employee: (
        <Profile2UserIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      Structure: (
        <Convert3DCubeIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
      Report: (
        <NoteIcon fill={isSelectedOrHovering ? colors.white : colors.gray_1} />
      ),
      Settings: (
        <SettingIcon
          fill={isSelectedOrHovering ? colors.white : colors.gray_1}
        />
      ),
    };

    return icons[text];
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <LayoutRoot
      isSelected={isSelected}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {getIcon()}
      <ItemText isSelectedOrHovering={isSelectedOrHovering}>{text}</ItemText>
    </LayoutRoot>
  );
};

export default MenuItem;

const LayoutRoot = styled(HorizontalFlex)<{ isSelected: boolean }>`
  cursor: pointer;
  gap: 12px;
  padding: 12px 24px;
  margin: 0 12px;
  background: ${({ isSelected }) =>
    isSelected ? colors.blue_1 : colors.transparent};
  border-radius: 10px;
  align-items: center;

  :hover {
    background: ${({ isSelected }) =>
      isSelected ? colors.blue_1 : colors.blue_2};
  }
`;

const ItemText = styled(H5)<{ isSelectedOrHovering: boolean }>`
  color: ${({ isSelectedOrHovering }) =>
    isSelectedOrHovering ? colors.white : colors.gray_1};
`;
