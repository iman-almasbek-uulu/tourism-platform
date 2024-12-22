import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {WhatToTryItem,PopularPlace,RegionData} from "./types";


const API = process.env.NEXT_PUBLIC_API_URL;

export const fetchRegions = createAsyncThunk<RegionData[]>(
    "regions/fetchRegions", async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${API}/region`);
            return response.data;
        } catch (error: string | any) {
            return Error(error.message);
        }
    }
)

interface initialStateType {
    regions: RegionData[];
    loading: boolean;
    error: null | string | any;
}

const initialState: initialStateType = {
    regions: [],
    loading: false,
    error: null,
}


const regionSlice = createSlice({
    name: "regions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRegions.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchRegions.fulfilled, (state, action) => {
            state.loading = false;
            state.regions = action.payload;
        });
        builder.addCase(fetchRegions.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default regionSlice.reducer;