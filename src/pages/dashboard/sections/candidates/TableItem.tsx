import React from "react";
import styled from "styled-components";
import { colors } from "../../../../components/theme/colors";

export const TableItem = styled.div`
  display: grid;
  grid-template-columns: auto repeat(5, 1fr);
  align-items: center;
  gap: 10px;
  background: ${colors.background_1};
  padding-left: 8px;
  padding-right: 16px;
`;
