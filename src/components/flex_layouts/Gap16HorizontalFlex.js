import React from 'react';
import styled from 'styled-components';
import HorizontalFlex from './HorizontalFlex';

function Gap16HorizontalFlex({ children, ...props }) {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
}

export default Gap16HorizontalFlex;

const LayoutRoot = styled(HorizontalFlex)`
  gap: 16px;
`;
