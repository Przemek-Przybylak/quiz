import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: "initial",
    personName: "",
}

const gameSlice = createSlice({
    name: "game",
    initialState,

    reducers: {
        setApplicationStatus: (state, {payload}) => {
            state.status = payload;
        },
        addPerson: (state, {payload}) => {
            state.personName = payload;
        },
    }
});

export const {
    setApplicationStatus,
    addPerson,
} = gameSlice.actions;

export const selectStatus = (state) => state.game.status;
export const selectPerson = (state) => state.game.person;

export default gameSlice.reducer;