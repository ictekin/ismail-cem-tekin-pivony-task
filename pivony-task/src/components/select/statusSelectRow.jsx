import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import { data2, data4 } from "../../assets/data";

const StatusSelectRow = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [selectedOption2, setSelectedOption2] = useState();

  return (
    <>
      <FormControl sx={{ width: 150 }}>
        <Select
          size="small"
          value={selectedOption ? selectedOption : ""}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          {data2.map((option, i) => {
            return (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ width: 150 }}>
        <Select
          size="small"
          value={selectedOption2 ? selectedOption2 : ""}
          onChange={(e) => setSelectedOption2(e.target.value)}
        >
          {data4.map((option, i) => {
            return (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default StatusSelectRow;
