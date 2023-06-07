import React from 'react';
import styled from 'styled-components';
import VerticalFlex from './VerticalFlex';

function Gap16VerticalFlex({ children, ...props }) {
  return <LayoutRoot {...props}>{children}</LayoutRoot>;
}

export default Gap16VerticalFlex;

const LayoutRoot = styled(VerticalFlex)`
  gap: 16px;
`;
