import React from "react";
import styled from "styled-components";
import { TableItem } from "./TableItem";
import CandidateCheckbox from "./CandidateCheckbox";
import { H4 } from "../../../../components/typography/H4";
import HorizontalFlex from "../../../../components/flex_layouts/HorizontalFlex";
import VerticalFlex from "../../../../components/flex_layouts/VerticalFlex";
import { colors } from "../../../../components/theme/colors";
import { TableColumn } from "./TableColumn";
import CandidateName from "./CandidateName";
import { Candidate } from "./Candidate";

type Props = {
  candidate: Candidate;
  onChecked: Function;
  isChecked: boolean;
};

const CandidateItem = ({ candidate, onChecked, isChecked }: Props) => {
  const { name, avatarImageId, rating, stages, date, owner } = candidate;
  return (
    <LayoutRoot>
      <CandidateCheckbox isChecked={isChecked} onChange={onChecked} />
      <CandidateName name={name} avatarImageId={avatarImageId} />
      <RatingContainer>
        <img src="/magic-star-1.svg" alt="Rating Icon" />
        <H4>{rating.toFixed(1)}</H4>
      </RatingContainer>
      <StagesContainer>
        <H4>{stages.name}</H4>
        <StagesRectangleList>
          {Array(6)
            .fill("")
            .map((_, index) => (
              <StageRectangle
                background={index < stages.level ? stages.color : colors.gray_4}
              />
            ))}
        </StagesRectangleList>
      </StagesContainer>
      <TableColumn>
        <H4>{date}</H4>
      </TableColumn>
      <CandidateName name={owner.name} avatarImageId={owner.avatarImageId} />
    </LayoutRoot>
  );
};

export default CandidateItem;

const LayoutRoot = styled(TableItem)`
  padding-top: 11px;
  padding-bottom: 11px;
`;

const RatingContainer = styled(TableColumn)`
  border: 1px solid ${colors.gray_4};
  border-radius: 10px;
  padding: 4px 8px;
  width: fit-content;
`;

const StagesContainer = styled(VerticalFlex)`
  gap: 3px;
`;

const StagesRectangleList = styled(HorizontalFlex)`
  gap: 2px;
`;

const StageRectangle = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  width: 10px;
  height: 6px;
`;
