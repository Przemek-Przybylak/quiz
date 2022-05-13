import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    personName: "",
}

const personSlice = createSlice({
    name: "person", initialState,

    reducers: {
        addPerson: (state, {payload}) => {
            state.personName = payload;
        }
    },
});

export const {
    addPerson,
} = personSlice.actions;

export const selectPerson = (state) => state.person.personName;

export default personSlice.reducer;