import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  callActivityList: [],
  loading: false,
  error: null,
  callActivityDetail: {},
};

const callActivitySlice = createSlice({
  name: "callActivity",
  initialState: initialState,
  reducers: {
    fetchDataStart: (state, action) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.callActivityList = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateStart: (state, action) => {
      state.loading = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.callActivityList = [];
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    fetchDetailStart: (state, action) => {
      state.loading = true;
    },
    fetchDetailSuceess: (state, action) => {
      state.loading = false;
      state.callActivityDetail = action.payload;
    },
    fetchDetailFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  fetchDetailStart,
  fetchDetailFailure,
  fetchDetailSuceess,
} = callActivitySlice.actions;
export default callActivitySlice.reducer;
