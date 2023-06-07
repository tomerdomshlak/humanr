import React from "react";
import styled from "styled-components";

function HorizontalFlex({ children, ...props }) {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
}

export default HorizontalFlex;

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: row;
`;
