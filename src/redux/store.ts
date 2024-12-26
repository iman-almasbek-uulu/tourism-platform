import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice"
import regionsReducer from "./slices/regionsSlice"
import popularPlacesReducer from "./slices/popularPlacesSlice"
import popularPlacesItemReducer from "./slices/popularPlaceItemSlice"
import hotelItemReducer from "./slices/popularPlacesSlices/hotelItemSlice"
import hotelReducer from "./slices/popularPlacesSlices/hotelsSlice"
import galleryReducer from "./slices/gallerySlices/gallerySlice"
export const store = configureStore({
    reducer: {
        language: languageReducer,
        regions: regionsReducer,
        popularPlaces: popularPlacesReducer,
        popularPlaceItem: popularPlacesItemReducer,
        hotels: hotelReducer,
        hotelItem: hotelItemReducer,
        gallery: galleryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 