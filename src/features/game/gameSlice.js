import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    gameStatus: "initial",
    fetchStatus: "initial",
    personName: "",
    words: [],
    number: Math.floor(Math.random() * 3),
    points: 0,
    clickedWords: [],
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
        addPoint: (state) => {
            state.points = state.points + 1
        },
        addClickedWord: (state, {payload}) => {
            state.clickedWords.push(payload)
        }
    }
});

export const {
    setApplicationStatus,
    addPerson,
    fetchWords,
    fetchWordsSuccess,
    fetchWordsError,
    addPoint,
    addClickedWord,
} = gameSlice.actions;

export const selectStatus = (state) => state.game.gameStatus;
export const selectPerson = (state) => state.game.personName;
export const selectWords = (state) => state.game.words;
export const selectPoints = (state) => state.game.points;
export const selectClickedWords = (state) => state.game.clickedWords;

export const selectRandomWords = (state) => {
    return state.game.words[state.game.number];
};

export default gameSlice.reducer;