import React from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../../../../components/flex_layouts/Gap8VerticalFlex";
import { H4 } from "../../../../components/typography/H4";
import { colors } from "../../../../components/theme/colors";
import { IconButton } from "@mui/material";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import VerticalFlex from "../../../../components/flex_layouts/VerticalFlex";
import CandidateItem from "./CandidateItem";
import { TableItem } from "./TableItem";
import CandidateCheckbox from "./CandidateCheckbox";

const CandidateListContainer = () => {
  const columns = [
    "Candidate Name",
    "Rating",
    "Stages",
    "Applied date",
    "Owner",
  ];

  const candidates = [
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
      name: "Leslie Alexander",
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
    <Gap8VerticalFlex>
      <TableHeader>
        <CandidateCheckbox />
        {columns.map((column) => (
          <TableHeaderTitle>
            <TableHeaderText>{column}</TableHeaderText>
            <IconButton>
              <img src="/arrow.svg" alt="Sort Arrows" height={12} />
            </IconButton>
          </TableHeaderTitle>
        ))}
      </TableHeader>
      <TableList>
        {candidates.map(
          ({ name, avatarImageId, rating, stages, date, owner }) => (
            <CandidateItem
              key={name}
              name={name}
              avatarImageId={avatarImageId}
              rating={rating}
              stages={stages}
              date={date}
              owner={owner}
            />
          )
        )}
      </TableList>
    </Gap8VerticalFlex>
  );
};

export default CandidateListContainer;

const TableHeader = styled(TableItem)`
  border-radius: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const TableHeaderTitle = styled(HorizontalFlex)`
  gap: 0;
  align-items: center;
`;

const TableHeaderText = styled(H4)`
  color: ${colors.gray_3};
`;

const TableList = styled(VerticalFlex)`
  border-radius: 10px;
  overflow: hidden;
`;
