import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HotelItemType } from "./types";
import axios from "axios";
import { getApiUrl } from "@/ui/getApi";

export const fetchHotelItemSlice = createAsyncThunk<
  HotelItemType,
  { id: number },
  { rejectValue: string }
>(
  "hotelItemSlice/fetchHotelItemSlice",
  async ({ id }, { rejectWithValue }) => {
    try {
        console.log(id);
      const response = await axios.get(`${getApiUrl()}/hotels/${id}`);
      
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.message || "An error occurred");
    }
  }
);

interface initialStateType {
  hotelItemSlice: HotelItemType | null;
  loading: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  hotelItemSlice: null,
  loading: false,
  error: null
};

const hotelItemSlice = createSlice({
  name: "hotelItem", // Changed to match the state name in your store
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelItemSlice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelItemSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.hotelItemSlice = action.payload;
        state.error = null;
      })
      .addCase(fetchHotelItemSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An error occurred";
      });
  }
});

export default hotelItemSlice.reducer;