import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HotelItemType } from "./types";
import axios from "axios";
import { getApiUrl } from "@/ui/getApi";

const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchHotelItemSlice = createAsyncThunk<HotelItemType,{ id: number }, { rejectValue: string }>(
    "hotelItemSlice/fetchHotelItemSlice", async ({id}, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${{getApiUrl}}/hotels/${id}`);
            
            return response.data;
        } catch (error: string | any) {
            return rejectWithValue(error.message || "An error occurred");        }
    }
)

interface initialStateType {
    hotelItemSlice: HotelItemType | null;
    loading: boolean;
    error: string | any;
}

const initialState: initialStateType = {
    hotelItemSlice: null,
    loading: false,
    error: ""
}

const hotelItemSlice = createSlice({
    name: "hotelItemSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHotelItemSlice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchHotelItemSlice.fulfilled, (state, action) => {
            state.loading = false;
            state.hotelItemSlice = action.payload;
        });
        builder.addCase(fetchHotelItemSlice.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default hotelItemSlice.reducer;