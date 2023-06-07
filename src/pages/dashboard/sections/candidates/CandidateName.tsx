import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { H4 } from "../../../../components/typography/H4";
import { TableColumn } from "./TableColumn";

type Props = {
  name: string;
  avatarImageId: number;
};

const CandidateName = ({ name, avatarImageId }: Props) => {
  return (
    <TableColumn>
      <Avatar
        alt="Avatar 2"
        src={`/avatar-${avatarImageId}.png`}
        sx={{ width: 32, height: 32 }}
      />
      <H4>{name}</H4>
    </TableColumn>
  );
};

export default CandidateName;
