import { useEffect, useState } from "react";

import { Box, Chip } from "@mui/material";

//Custom Components
import GroupFilterRow from "./GroupFilterRow";

//Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  removeFilter,
  addFilterIntoGroupFilter,
} from "../../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterCard = ({ index, groupFilters, deleteSelectedIndex }) => {
  const dispatch = useDispatch();
  console.log(index);
  const addNewGroup = () => {
    dispatch(
      addFilterIntoGroupFilter({
        id: groupFilters[0].id,
        groupId: groupFilters[0].groupId,
        name: "",
      })
    );
  };

  const removeSelectedFilter = (index) => {
    dispatch(removeFilter(index));
  };

  return (
    <Box>
      <Box sx={{ overflowY: "scroll" }}>
        {groupFilters.map((element) => {
          return (
            <GroupFilterRow
              key={element.id}
              index={element.id}
              deleteSelectedIndex={removeSelectedFilter}
            />
          );
        })}
        <Chip
          size="small"
          label="Add filter"
          icon={<AddOutlinedIcon />}
          onClick={addNewGroup}
          sx={{
            margin: "5px 110px",
          }}
        />
      </Box>
    </Box>
  );
};

export default FilterCard;
