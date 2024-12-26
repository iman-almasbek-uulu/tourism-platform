import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {RegionData} from "./types";
import { getApiUrl } from "@/ui/getApi";



export const fetchRegions = createAsyncThunk<RegionData[]>(
    "regions/fetchRegions", async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/region`);
            return response.data;
            console.log(response.data);
            
        } catch (error: string | any) {
            return rejectWithValue(error.message);
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