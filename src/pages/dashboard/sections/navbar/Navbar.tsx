import React from "react";
import styled from "styled-components";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import SearchBar1 from "../../../../components/search/SearchBar1";
import { Avatar, Badge, IconButton } from "@mui/material";
import { colors } from "../../../../components/theme/colors";

const Navbar = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <MainContainer>
        <SearchBar1 />
        <ButtonsContainer>
          <IconButton>
            <img src="/need-help.svg" alt={"Need Help"} />
          </IconButton>
          <IconButton>
            <StyledBadge badgeContent={3} color="primary">
              <img src="/notification-bing.svg" alt={"Need Help"} />
            </StyledBadge>
          </IconButton>
          <IconButton>
            <Avatar alt="Avatar 1" src="/avatar-1.png" />
          </IconButton>
        </ButtonsContainer>
      </MainContainer>
    </LayoutRoot>
  );
};

export default Navbar;

const LayoutRoot = styled(HorizontalFlex)`
  width: 100%;
  justify-content: flex-end;
  background: ${colors.white};
`;

const MainContainer = styled(HorizontalFlex)`
  gap: 50px;
  padding: 12px 30px;
  align-items: center;
  justify-self: end;
`;

const StyledBadge = styled(Badge)`
  && > .MuiBadge-badge {
    background: ${colors.red_1};
    width: 16px;
    min-width: 16px;
    height: 16px;
    font-size: 10px;
    margin: 2px;
  }
`;

const ButtonsContainer = styled(HorizontalFlex)`
  gap: 4px;
  align-items: center;
  height: fit-content;
`;
