import React, { useState, useMemo, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { data } from "../../assets/data";

import containsText from "../../helpers/filterHelpers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(0, 0, 0,0)",
    },
    "& .MuiFilledInput-root:hover": {
      background: "rgb(0, 0, 0,0)",
    },
  },
}));

const SearchableSelect = ({ setSelectedFilterValue }) => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState();
  const [searchText, setSearchText] = useState("");

  const displayedOptions = useMemo(
    () => data.filter((option) => containsText(option, searchText)),
    [searchText]
  );

  useEffect(() => {
    setSelectedFilterValue(selectedOption);
  }, [selectedOption]);

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <Select
          size="small"
          MenuProps={{ autoFocus: false }}
          value={selectedOption ? selectedOption : ""}
          onChange={(e) => setSelectedOption(e.target.value)}
          onClose={() => {
            setSearchText("");
          }}
          renderValue={() => selectedOption}
        >
          <ListSubheader sx={{ padding: 0 }}>
            <TextField
              className={classes.root}
              variant="filled"
              hiddenLabel
              size="small"
              autoFocus
              placeholder="Type to search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) => {
            return (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchableSelect;
