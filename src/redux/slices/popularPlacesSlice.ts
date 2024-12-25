import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PopularPlace } from "./types";
import { getApiUrl } from "@/ui/getApi";

const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchPopularPlaces = createAsyncThunk<PopularPlace[]>(
    "popularPlace/fetchPopularPlaces", async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/popular_places`);
            return response.data;
        } catch (error: string | any) {
            return rejectWithValue(error.message || "An error occurred");        }
    }
);

interface initialStateType {
    popularPlaces: PopularPlace[];
    loading: boolean;
    error: null | string | any;
}

const initialState: initialStateType = {
    popularPlaces: [],
    loading: false,
    error: null 
}

const popularPlacesSlice = createSlice({
    name: "popularPlace",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopularPlaces.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPopularPlaces.fulfilled, (state, action) => {
            state.loading = false;
            state.popularPlaces = action.payload;
        });
        builder.addCase(fetchPopularPlaces.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default popularPlacesSlice.reducer;