import React, { useState } from "react";
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
import { Candidate } from "./Candidate";

type Props = {
  candidates: Candidate[];
};

const CandidateListContainer = ({ candidates }: Props) => {
  const [selectedCandidateIds, setSelectedCandidateIds] = useState<string[]>(
    []
  );

  const columns = [
    "Candidate Name",
    "Rating",
    "Stages",
    "Applied date",
    "Owner",
  ];

  const allNames = candidates.map(({ name }) => name);
  const isAllChecked = allNames.every((v) => selectedCandidateIds.includes(v));

  function handleCandidateChecked(name: string) {
    if (selectedCandidateIds.includes(name)) {
      setSelectedCandidateIds([
        ...selectedCandidateIds.filter((id) => id !== name),
      ]);
    } else {
      setSelectedCandidateIds([...selectedCandidateIds, name]);
    }
  }

  const handleMainCheckboxChanged = () => {
    if (isAllChecked) {
      setSelectedCandidateIds([]);
    } else {
      setSelectedCandidateIds([...allNames]);
    }
  };

  return (
    <Gap8VerticalFlex>
      <TableHeader>
        <CandidateCheckbox
          isChecked={isAllChecked}
          onChange={handleMainCheckboxChanged}
        />
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
        {candidates.map((candidate) => (
          <CandidateItem
            key={candidate.name}
            candidate={candidate}
            isChecked={selectedCandidateIds.includes(candidate.name)}
            onChecked={() => handleCandidateChecked(candidate.name)}
          />
        ))}
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
