import React from 'react';
import styled from 'styled-components';
import HorizontalFlex from './HorizontalFlex';

function Gap8HorizontalFlex({ children, ...props }) {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
}

export default Gap8HorizontalFlex;

const LayoutRoot = styled(HorizontalFlex)`
  gap: 8px;
`;
