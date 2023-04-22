import {
  Box,
  Typography,
  IconButton,
  Select,
  FormControl,
  MenuItem,
  Divider,
  TextField,
} from "@mui/material";

import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import SearchableSelect from "../select/searchableSelect";
import ExtendedRow from "./ExtendedRow";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../slices/filterSlice";

const GroupFilterRow = ({ index, deleteSelectedIndex }) => {
  const dispatch = useDispatch();
  const [selectedFilterValue, setSelectedFilterValue] = useState("");
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
          <TextField sx={{ width: 70 }} size="small" disabled value={"AND"} />
          <Divider orientation="vertical" flexItem />
          <Typography> Where</Typography>

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

export default GroupFilterRow;
