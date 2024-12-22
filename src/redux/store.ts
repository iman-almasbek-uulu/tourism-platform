import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice"
import regionsReducer from "./slices/regionsSlice"
import popularPlacesReducer from "./slices/popularPlacesSlice"
export const store = configureStore({
    reducer: {
        language: languageReducer,
        regions: regionsReducer,
        popularPlaces: popularPlacesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 