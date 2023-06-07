import React from "react";
import styled from "styled-components";
import { H1 } from "../../../../components/typography/H1";
import Gap8VerticalFlex from "../../../../components/flex_layouts/Gap8VerticalFlex";
import { H2 } from "../../../../components/typography/H2";
import Gap8HorizontalFlex from "../../../../components/flex_layouts/Gap8HorizontalFlex";
import { colors } from "../../../../components/theme/colors";
import { H4 } from "../../../../components/typography/H4";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import Gap16VerticalFlex from "../../../../components/flex_layouts/Gap16VerticalFlex";
import CandidateListContainer from "./CandidateListContainer";
import FilterButton from "../../../../components/filter/FilterButton";

const Candidates = ({ ...props }) => {
  return (
    <LayoutRoot {...props}>
      <TitleContainer>
        <H1>Candidates</H1>
        <FilterButton />
      </TitleContainer>
      <SubtitleContainer>
        <Subtitle>Total Candidates</Subtitle>
        <CandidatesCountValue>
          <H4>20</H4>
        </CandidatesCountValue>
      </SubtitleContainer>
      <CandidateListContainer />
    </LayoutRoot>
  );
};

export default Candidates;

const LayoutRoot = styled(Gap16VerticalFlex)`
  padding: 24px 30px;
  gap: 14px;
`;

const TitleContainer = styled(Gap8HorizontalFlex)`
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 6px;
  align-items: center;
`;

const SubtitleContainer = styled(Gap8HorizontalFlex)`
  align-items: center;
`;

const Subtitle = styled(H2)`
  color: ${colors.gray_3};
`;

const CandidatesCountValue = styled(HorizontalFlex)`
  background: ${colors.light_green};
  align-items: center;
  padding: 6px;
  border-radius: 6px;
`;
