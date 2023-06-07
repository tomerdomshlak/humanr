import React from 'react';
import styled from 'styled-components';
import VerticalFlex from './VerticalFlex';

function Gap8VerticalFlex({ children, ...props }) {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
}

export default Gap8VerticalFlex;

const LayoutRoot = styled(VerticalFlex)`
  gap: 8px;
`;
