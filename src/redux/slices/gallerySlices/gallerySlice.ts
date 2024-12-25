import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {GalleryType} from "./types";
import { getApiUrl } from "@/ui/getApi";



export const fetchGallery = createAsyncThunk<GalleryType[]>(
    "gallery/fetchGallery", async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${getApiUrl()}/gallery`);
            return response.data;
            
        } catch (error: string | any) {
            return rejectWithValue(error.message);
        }
    }
)

interface initialStateType {
    gallery: GalleryType[];
    loading: boolean;
    error: null | string | any;
}

const initialState: initialStateType = {
    gallery: [],
    loading: false,
    error: null,
}


const regionSlice = createSlice({
    name: "regions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGallery.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchGallery.fulfilled, (state, action) => {
            state.loading = false;
            state.gallery = action.payload;
        });
        builder.addCase(fetchGallery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default regionSlice.reducer;