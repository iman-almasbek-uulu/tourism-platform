import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {Culture} from "./types";
import { getApiUrl } from "@/ui/getApi";



export const fetchCulture = createAsyncThunk<Culture[]>(
    "culture/fetchCulture", async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/culture_list`);
            return response.data;
        } catch (error: string | any) {
            return rejectWithValue(error.message);
        }
    }
)

interface initialStateType {
    culture: Culture[];
    loading: boolean;
    error: null | string | any;
}

const initialState: initialStateType = {
    culture: [],
    loading: false,
    error: null,
}


const cultureSlice = createSlice({
    name: "culture",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCulture.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCulture.fulfilled, (state, action) => {
            state.loading = false;
            state.culture = action.payload;
        });
        builder.addCase(fetchCulture.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default cultureSlice.reducer;