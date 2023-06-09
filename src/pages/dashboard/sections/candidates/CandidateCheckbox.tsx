import React from "react";
import { Checkbox } from "@mui/material";

type Props = {
  isChecked: boolean;
  onChange: Function;
};

const CandidateCheckbox = ({ isChecked, onChange }: Props) => {
  return (
    <Checkbox
      checked={isChecked}
      sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
      onChange={() => onChange()}
    />
  );
};

export default CandidateCheckbox;
