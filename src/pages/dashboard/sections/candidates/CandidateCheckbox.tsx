import React from "react";
import { Checkbox } from "@mui/material";

const CandidateCheckbox = ({ ...props }) => {
  return (
    <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }} />
  );
};

export default CandidateCheckbox;
