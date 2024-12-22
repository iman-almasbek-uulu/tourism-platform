import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice"
import regionsReducer from "./slices/regionsSlice"
import popularPlacesReducer from "./slices/popularPlacesSlice"
import popularPlacesItemReducer from "./slices/popularPlaceItemSlice"
export const store = configureStore({
    reducer: {
        language: languageReducer,
        regions: regionsReducer,
        popularPlaces: popularPlacesReducer,
        popularPlaceItem: popularPlacesItemReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 