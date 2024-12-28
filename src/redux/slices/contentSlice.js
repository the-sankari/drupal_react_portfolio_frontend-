import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchData = async (endpoint) => {
  const response = await fetch(endpoint);
  return response.data;
};

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (endpoint) => {
    const data = await fetchData(endpoint);
    return { endpoint, data };
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    data: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        const { endpoint, data } = action.payload;
        state.status = "succeeded";
        state.data[endpoint] = data;
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default contentSlice.reducer;
