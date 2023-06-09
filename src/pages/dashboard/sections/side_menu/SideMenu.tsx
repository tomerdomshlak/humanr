import React, { useState } from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../../../../components/flex_layouts/Gap8VerticalFlex";
import VerticalFlex from "../../../../components/flex_layouts/VerticalFlex";
import CategoryGroup from "./CategoryGroup";
import ElementIcon from "../../../../components/icons/ElementIcon";
import MessageTextIcon from "../../../../components/icons/MessageTextIcon";
import CalendarIcon from "../../../../components/icons/CalendarIcon";
import JobIcon from "../../../../components/icons/JobIcon";
import Profile2UserIcon from "../../../../components/icons/Profile2UserIcon";
import Convert3DCubeIcon from "../../../../components/icons/Convert3DCubeIcon";
import MonitorMobileIcon from "../../../../components/icons/MonitorMobileIcon";
import NoteIcon from "../../../../components/icons/NoteIcon";
import SettingIcon from "../../../../components/icons/SettingIcon";
import { colors } from "../../../../components/theme/colors";

const SideMenu = ({ ...props }) => {
  const categoryGroups = [
    {
      title: "Menu",
      items: ["Dashboard", "Message", "Calendar"],
    },
    {
      title: "Recruitment",
      items: ["Jobs", "Candidates", "My Referrals", "Career Site"],
    },
    {
      title: "Organization",
      items: ["Employee", "Structure", "Report", "Settings"],
    },
  ];
  const [selectedItemKey, setSelectedItemKey] = useState(
    categoryGroups[0].items[0]
  );

  return (
    <LayoutRoot {...props}>
      <Image src="/logo.png" width={149} alt="Human R. Logo" />
      {categoryGroups.map(({ title, items }) => (
        <CategoryGroup
          key={title}
          title={title}
          items={items}
          selectedItemKey={selectedItemKey}
        />
      ))}
    </LayoutRoot>
  );
};

export default SideMenu;

const LayoutRoot = styled(VerticalFlex)`
  gap: 40px;
  width: 260px;
  height: 100%;
  padding: 27px 0;
  background: ${colors.background_1};
  box-shadow: inset -1px 0px 0px rgba(20, 27, 53, 0.12);
`;

const Image = styled.img`
  cursor: pointer;
  margin: 0 32px;
`;
