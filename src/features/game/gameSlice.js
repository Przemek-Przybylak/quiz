import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    gameStatus: "initial",
    fetchStatus: "initial",
    personName: "",
    words: [],
}

const gameSlice = createSlice({
    name: "game",
    initialState,

    reducers: {
        setApplicationStatus: (state, {payload}) => {
            state.gameStatus = payload;
        },
        addPerson: (state, {payload}) => {
            state.personName = payload;
        },
        fetchWords: (state) => {
            state.fetchStatus = "loading"
        },
        fetchWordsSuccess: (state, {payload}) => {
            state.words = payload;
            state.fetchStatus = "success";
        },
        fetchWordsError: (state) => {
            state.fetchStatus = "error"
        },
    }
});

export const {
    setApplicationStatus,
    addPerson,
    fetchWords,
    fetchWordsSuccess,
    fetchWordsError,
} = gameSlice.actions;

export const selectStatus = (state) => state.game.gameStatus;
export const selectPerson = (state) => state.game.person;
export const selectFetchStatus = (state) => state.game.fetchStatus;
export const selectWords = (state) => state.game.words;
export const selectRandomWords = (state) => {
    const number = Math.floor(Math.random() * 3)
    return state.game.words[number]
};

export default gameSlice.reducer;