import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: "filter",
    initialState: {
        roles: [],
        // employees: [],
        experience: [],
        location: [],
        basepay: [],
        searchfield: "",
    },
    reducers: {
        addItems: (state, action) => {
            switch (action.payload.fieldName) {
                case "Roles":
                    state.roles = action.payload.selectedFields
                    break;
                // case "Number of Employees":
                //     state.employees = action.payload.selectedFields
                //     break;
                case "Experience":
                    state.experience = action.payload.selectedFields
                    break;
                case "Remote":
                    state.location = action.payload.selectedFields
                    break;
                case "Minimum Base Pay":
                    state.basepay = action.payload.selectedFields
                    break;
                case "search":
                    state.searchfield = action.payload.selectedFields
                    break;
            }
        },
        removeItems: (state, action) => {

        },
        clearItems: (state) => {
            state.roles.length = 0;
            state.employees.length = 0;
            state.experience.length = 0;
            state.location.length = 0;
            state.basepay.length = 0;
        },
    },
});

export const { addItems, removeItems, clearItems } = filtersSlice.actions;
export default filtersSlice.reducer;