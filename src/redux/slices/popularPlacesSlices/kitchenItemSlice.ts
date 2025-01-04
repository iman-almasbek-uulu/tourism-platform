import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CafeItem } from "./types";
import axios from "axios";
import { getApiUrl } from "@/ui/getApi";

export const fetchKitchenItemSlice = createAsyncThunk<
CafeItem,
  { id: number },
  { rejectValue: string }
>(
  "kitchenItem/fetchKitchenItemSlice",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${getApiUrl()}/kitchen/${id}`);
      
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "An error occurred");
    }
  }
);

interface initialStateType {
  kitchenItem: CafeItem | null;
  loading: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  kitchenItem: null,
  loading: false,
  error: null
};

const kitchenItemSlice = createSlice({
  name: "kitchenItem", // Changed to match the state name in your store
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKitchenItemSlice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKitchenItemSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.kitchenItem = action.payload;
        state.error = null;
      })
      .addCase(fetchKitchenItemSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });
  }
});

export default kitchenItemSlice.reducer;