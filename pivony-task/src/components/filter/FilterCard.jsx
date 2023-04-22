import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Link,
  Chip,
} from "@mui/material";

//Custom Components
import FilterRow from "./FilterRow";
import FilterCardSub from "./FilterCardSub";

//Icons
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {
  removeFilter,
  addFilter,
  addGroupFilter,
} from "../../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterCard = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [isHovering, setIsHovering] = useState(false);
  const [id, setId] = useState(0);
  const [groupId, setGroupId] = useState(0);
  const [a, setA] = useState(false);

  const addNewFilter = () => {
    dispatch(addFilter({ id: id, name: "" }));
    setId(id + 1);
  };

  useEffect(() => {
    if (id != 0) setId(id - 1);
    setA(false);
  }, [a]);

  const addNewGroup = () => {
    dispatch(addGroupFilter([{ id: id, groupId: groupId, name: "" }]));
    setGroupId(groupId + 1);
  };

  const removeSelectedFilter = (index) => {
    setA(true);
    dispatch(removeFilter(index));
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Box onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Card
        sx={{
          width: 900,
          height: 500,
          position: "relative",
        }}
      >
        <CardContent sx={{ height: 400, overflowY: "scroll" }}>
          <Typography sx={{ fontSize: 32 }} gutterBottom>
            Filters
          </Typography>

          {filters &&
            filters.map((element) => {
              return (
                <>
                  <FilterRow
                    key={element.id}
                    index={element.id}
                    deleteSelectedIndex={removeSelectedFilter}
                  />
                  {element.hasOwnProperty("groupFilters") && (
                    <FilterCardSub
                      key={element.groupFilters.id}
                      index={element.groupFilters.id}
                      groupFilters={element.groupFilters}
                      deleteSelectedIndex={removeSelectedFilter}
                    />
                  )}
                </>
              );
            })}

          <Chip
            size="small"
            label="Add filter"
            icon={<AddOutlinedIcon />}
            onClick={addNewFilter}
            sx={{
              margin: "5px",
            }}
          />
          {isHovering && filters && filters.length != 0 && (
            <Chip
              size="small"
              label="Add group"
              icon={<AddOutlinedIcon />}
              onClick={addNewGroup}
              sx={{
                margin: "5px",
              }}
            />
          )}
        </CardContent>
        <CardActions
          sx={{
            width: "98%",
            position: "absolute",
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            overflowX: "hidden",
          }}
        >
          <Box>
            <InfoOutlinedIcon
              sx={{ width: 15, height: 15, margin: "0px 5px" }}
            />
            <Typography sx={{ display: "inline" }}>
              Learn more about ClickUp{" "}
              <Link href="https://help.clickup.com/hc/en-us/articles/6312203092119-Use-Dashboard-filters">
                filters
              </Link>
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                color: "black",
                borderColor: "black",
              }}
              startIcon={<AutoFixHighOutlinedIcon />}
              variant="outlined"
            >
              Templates
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default FilterCard;
