import { Box } from "@mui/material";

import { useState } from "react";

import PrioritySelectRow from "../select/prioritySelectRow";
import StatusSelectRow from "../select/statusSelectRow";
import TagSelectRow from "../select/tagSelectRow";

const ExtendedRow = ({ selectedFilterName }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        justifyItems: "center",
        gap: 3,
      }}
    >
      {selectedFilterName === "Priority" ? (
        <PrioritySelectRow />
      ) : selectedFilterName === "Status" ? (
        <StatusSelectRow />
      ) : selectedFilterName === "Tags" ? (
        <TagSelectRow />
      ) : null}
    </Box>
  );
};

export default ExtendedRow;
