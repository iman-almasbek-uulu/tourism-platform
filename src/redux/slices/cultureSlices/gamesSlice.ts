// import { getApiUrl } from "@/ui/getApi";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";


// export const fetchGames = createAsyncThunk("games/fetchGames", async (_, { rejectWithValue }) => {
//     try {
//         const response = await axios.get(`${getApiUrl()}/games`);
//         return response.data;
//     } catch (error) {
//         return rejectWithValue(error.message);
//     }
// })



// const initialState = {
//     games: [],
//     loading: false,
//     error: null,
// }

// const gamesSlice = createSlice({
//     name: "games",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchGames.pending, (state) => {
//             state.loading = true;
//         });
//         builder.addCase(fetchGames.fulfilled, (state, action) => {
//             state.loading = false;
//             state.games = action.payload;
//         });
//         builder.addCase(fetchGames.rejected, (state, action) => {
//             state.loading = false;
//             state.error = action.error.message;
//         });
//     }
// })

// export default gamesSlice.reducer;