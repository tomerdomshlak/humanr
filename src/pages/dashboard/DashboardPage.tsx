import React from "react";
import styled from "styled-components";
import SideMenu from "./sections/side_menu/SideMenu";
import Navbar from "./sections/navbar/Navbar";
import { colors } from "../../components/theme/colors";
import Candidates from "./sections/candidates/Candidates";

const DashboardPage = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <SideMenu />
      <ContentContainer>
        <Navbar />
        <Candidates />
      </ContentContainer>
    </LayoutRoot>
  );
};

export default DashboardPage;

const LayoutRoot = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
`;
