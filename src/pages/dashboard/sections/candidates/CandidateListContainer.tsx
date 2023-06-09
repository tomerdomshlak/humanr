import React, { useState } from "react";
import styled from "styled-components";
import Gap8VerticalFlex from "../../../../components/flex_layouts/Gap8VerticalFlex";
import { H4 } from "../../../../components/typography/H4";
import { colors } from "../../../../components/theme/colors";
import { ToggleButton } from "@mui/material";
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
  const [selectedSortProperties, setSelectedSortProperties] = useState<
    string[]
  >([]);

  const columns = [
    {
      propertyName: "name",
      text: "Candidate Name",
    },
    {
      propertyName: "rating",
      text: "Rating",
    },
    {
      propertyName: "stages",
      text: "Stages",
    },
    {
      propertyName: "date",
      text: "Applied date",
    },
    {
      propertyName: "owner",
      text: "Owner",
    },
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

  const sortByProperties = (propertyList: string[]) => {
    return (a: Candidate, b: Candidate) => {
      for (let prop of propertyList) {
        // @ts-ignore
        if (a[prop] < b[prop]) return -1;
        // @ts-ignore
        if (a[prop] > b[prop]) return 1;
      }
      return 0;
    };
  };

  const handleColumnSortClick = (propertyName: string) => {
    if (selectedSortProperties.includes(propertyName)) {
      setSelectedSortProperties([
        ...selectedSortProperties.filter((id) => id !== propertyName),
      ]);
    } else {
      setSelectedSortProperties([...selectedSortProperties, propertyName]);
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
          <TableHeaderTitle key={column.propertyName}>
            <TableHeaderText>{column.text}</TableHeaderText>
            <StyledToggleButton
              value="check"
              selected={selectedSortProperties.includes(column.propertyName)}
              onClick={() => handleColumnSortClick(column.propertyName)}
            >
              <img src="/arrow.svg" alt="Sort Arrows" height={12} />
            </StyledToggleButton>
          </TableHeaderTitle>
        ))}
      </TableHeader>
      <TableList>
        {[...candidates]
          .sort(sortByProperties(selectedSortProperties))
          .map((candidate) => (
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

const StyledToggleButton = styled(ToggleButton)`
  && {
    border: 0;
    margin-left: 4px;
    padding: 8px;
  }
`;
