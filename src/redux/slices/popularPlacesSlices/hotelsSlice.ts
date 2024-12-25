import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HotelType } from "./types";
import axios from "axios";
import { getApiUrl } from "@/ui/getApi";

const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchHotels= createAsyncThunk<HotelType[]>(
    "hotels/fetchHotels", async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/hotels`);
            
            return response.data;
        } catch (error: string | any) {
            return rejectWithValue(error.message || "An error occurred");        }
    }
)

interface initialStateType {
    hotels: HotelType[];
    loading: boolean;
    error: string | any;
}

const initialState: initialStateType = {
    hotels: [],
    loading: false,
    error: ""
}

const hotelsSlice = createSlice({
    name: "hotels",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHotels.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchHotels.fulfilled, (state, action) => {
            state.loading = false;
            state.hotels = action.payload;
        });
        builder.addCase(fetchHotels.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default hotelsSlice.reducer;