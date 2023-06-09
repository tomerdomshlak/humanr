import React from "react";
import styled from "styled-components";
import { H1 } from "../../../../components/typography/H1";
import { H2 } from "../../../../components/typography/H2";
import Gap8HorizontalFlex from "../../../../components/flex_layouts/Gap8HorizontalFlex";
import { colors } from "../../../../components/theme/colors";
import { H4 } from "../../../../components/typography/H4";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import Gap16VerticalFlex from "../../../../components/flex_layouts/Gap16VerticalFlex";
import CandidateListContainer from "./CandidateListContainer";
import FilterButton from "../../../../components/filter/FilterButton";
import { Candidate } from "./Candidate";

const Candidates = ({ ...props }) => {
  const candidates: Candidate[] = [
    {
      name: "Cameron Williamson",
      avatarImageId: 12,
      rating: 4.9,
      stages: { name: "Shortlist", level: 2, color: colors.blue_3 },
      date: "01 March, 2022",
      owner: {
        name: "Annette Black",
        avatarImageId: 2,
      },
    },
    {
      name: "Savannah Nguyen",
      avatarImageId: 13,
      rating: 4.7,
      stages: { name: "Interview", level: 2, color: colors.red_1 },
      date: "01 March, 2022",
      owner: {
        name: "Courtney Henry",
        avatarImageId: 3,
      },
    },
    {
      name: "Darlene Robertson",
      avatarImageId: 14,
      rating: 0.0,
      stages: { name: "New Applied", level: 3, color: colors.orange_1 },
      date: "01 March, 2022",
      owner: {
        name: "Arlene McCoy",
        avatarImageId: 4,
      },
    },
    {
      name: "Leslie Alexander",
      avatarImageId: 15,
      rating: 4.9,
      stages: { name: "Test", level: 4, color: colors.blue_1 },
      date: "01 March, 2022",
      owner: {
        name: "Jane Cooper",
        avatarImageId: 5,
      },
    },
    {
      name: "Albert Flores",
      avatarImageId: 16,
      rating: 5.0,
      stages: { name: "Design Challange", level: 5, color: colors.green_2 },
      date: "01 March, 2022",
      owner: {
        name: "Bessie Cooper",
        avatarImageId: 6,
      },
    },
    {
      name: "Dianne Russell",
      avatarImageId: 17,
      rating: 0.0,
      stages: { name: "Shortlist", level: 2, color: colors.blue_3 },
      date: "01 March, 2022",
      owner: {
        name: "Leslie Alexander",
        avatarImageId: 7,
      },
    },
    {
      name: "Robert Fox",
      avatarImageId: 18,
      rating: 4.9,
      stages: { name: "Interview", level: 3, color: colors.red_1 },
      date: "01 March, 2022",
      owner: {
        name: "Kathryn Murphy",
        avatarImageId: 8,
      },
    },
    {
      name: "Yoni Alexander",
      avatarImageId: 19,
      rating: 2.4,
      stages: { name: "Shortlist", level: 4, color: colors.blue_3 },
      date: "01 March, 2022",
      owner: {
        name: "Jenny Wilson",
        avatarImageId: 9,
      },
    },
    {
      name: "Darrell Steward",
      avatarImageId: 20,
      rating: 3.9,
      stages: { name: "Design Challange", level: 6, color: colors.green_2 },
      date: "01 March, 2022",
      owner: {
        name: "Ronald Richards",
        avatarImageId: 10,
      },
    },
    {
      name: "Arlene McCoy",
      avatarImageId: 21,
      rating: 0.0,
      stages: { name: "Shortlist", level: 2, color: colors.red_1 },
      date: "01 March, 2022",
      owner: {
        name: "Devon Lane",
        avatarImageId: 11,
      },
    },
  ];

  return (
    <LayoutRoot {...props}>
      <TitleContainer>
        <H1>Candidates</H1>
        <FilterButton />
      </TitleContainer>
      <SubtitleContainer>
        <Subtitle>Total Candidates</Subtitle>
        <CandidatesCountValue>
          <H4>{candidates.length}</H4>
        </CandidatesCountValue>
      </SubtitleContainer>
      <CandidateListContainer candidates={candidates} />
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
