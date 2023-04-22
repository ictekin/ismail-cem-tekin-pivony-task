import {
  Box,
  Typography,
  IconButton,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import SearchableSelect from "../select/searchableSelect";
import ExtendedRow from "./ExtendedRow";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../slices/filterSlice";

const FilterRow = ({ index, deleteSelectedIndex }) => {
  const dispatch = useDispatch();

  const [selectedFilterValue, setSelectedFilterValue] = useState("");
  const filters = useSelector((state) => state.filters);
  const [condition, setCondition] = useState("and");

  useEffect(() => {
    if (selectedFilterValue)
      dispatch(updateFilter({ id: index, name: selectedFilterValue }));
  }, [selectedFilterValue]);

  const handleChange = (event) => {
    setCondition(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Box
          sx={{
            margin: "5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            justifyItems: "center",
            gap: 3,
          }}
        >
          {filters && filters[0].id != index ? (
            <FormControl sx={{ width: 50, padding: 0, margin: 0 }}>
              <Select
                sx={{ padding: 0, fontSize: 10, margin: 0 }}
                size="small"
                value={condition}
                onChange={handleChange}
              >
                <MenuItem value={"and"}>And</MenuItem>
                <MenuItem value={"or"}>Or</MenuItem>
              </Select>
            </FormControl>
          ) : (
            <Typography> Where</Typography>
          )}
          <SearchableSelect setSelectedFilterValue={setSelectedFilterValue} />
          <ExtendedRow selectedFilterName={selectedFilterValue} />
        </Box>
        <Box>
          <IconButton
            aria-label="delete"
            onClick={() => {
              deleteSelectedIndex(index);
            }}
          >
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default FilterRow;
