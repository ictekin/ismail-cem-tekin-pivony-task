import { useEffect, useState } from "react";

import { Box, Chip } from "@mui/material";

//Custom Components
import GroupFilterRow from "./GroupFilterRow";

//Icons
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { removeFilter, addGroupFilter } from "../../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterCard = ({ index, groupFilters }) => {
  const dispatch = useDispatch();

  //   const addNewGroup = () => {
  //     dispatch(addGroupFilter({ id: index, name: "" }));
  //   };

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

        {/* <Chip
          size="small"
          label="Add filter"
          icon={<AddOutlinedIcon />}
          onClick={addNewGroup}
          sx={{
            margin: "5px",
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default FilterCard;
