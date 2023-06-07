import React from 'react';
import styled from 'styled-components';

function VerticalFlex({ children, ...props }) {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
}

export default VerticalFlex;

const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
