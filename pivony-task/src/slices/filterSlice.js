import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    addGroupFilter: (state, action) => {
      const id = action.payload[0].id;
      state[id - 1] = {
        id: state[id - 1].id,
        name: state[id - 1].name,
        groupFilters: [action.payload],
      };
    },
    removeFilter: (state, action) => {
      return state.filter((item) => action.payload !== item.id);
    },
    removeGroupFilter: (state, action) => {},
    updateFilter: (state, action) => {
      state.map((val) => {
        if (val.id === action.payload.id) {
          val.name = action.payload.name;
        }
      });
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const { removeFilter } = filterSlice.actions;
export const { updateFilter } = filterSlice.actions;
export const { addGroupFilter } = filterSlice.actions;

export default filterSlice.reducer;
