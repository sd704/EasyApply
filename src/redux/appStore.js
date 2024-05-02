import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filtersSlice";

const appStore = configureStore({
    reducer: {
        filter: filterReducer,
    },
});

export default appStore;