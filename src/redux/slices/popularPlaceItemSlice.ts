import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PopularItem } from "./types";
import axios from "axios";
import { getApiUrl } from "@/ui/getApi";

const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchPopularPlaceItem = createAsyncThunk<PopularItem,{ id: number }, { rejectValue: string }>(
    "popularPlace/fetchPopularPlaceItem", async ({id}, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/popular_places/${id}`);
            
            return response.data;
        } catch (error: string | any) {
            return rejectWithValue(error.message || "An error occurred");        }
    }
)



interface initialStateType {
    popularPlace: PopularItem | null;
    loading: boolean;
    error: string | any;
}

const initialState: initialStateType = {
    popularPlace: null,
    loading: false,
    error: ""
}

const popularPlaceItemSlice = createSlice({
    name: "popularPlace",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPopularPlaceItem.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPopularPlaceItem.fulfilled, (state, action) => {
            state.loading = false;
            state.popularPlace = action.payload;
        });
        builder.addCase(fetchPopularPlaceItem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default popularPlaceItemSlice.reducer;