import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cafe } from "./types";
import axios from "axios";
import { getApiUrl } from "@/ui/getApi";


export const fetchKitchens= createAsyncThunk<Cafe[]>(
    "kitchens/fetchKitchens", async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/kitchen`);
            
            return response.data;
        } catch (error: string | any) {
            return rejectWithValue(error.message || "An error occurred");        }
    }
)

interface initialStateType {
    kitchens: Cafe[];
    loading: boolean;
    error: string | any;
}

const initialState: initialStateType = {
    kitchens: [],
    loading: false,
    error: ""
}

const kitchensSlice = createSlice({
    name: "kitchens",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchKitchens.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchKitchens.fulfilled, (state, action) => {
            state.loading = false;
            state.kitchens = action.payload;
        });
        builder.addCase(fetchKitchens.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})
export default kitchensSlice.reducer;