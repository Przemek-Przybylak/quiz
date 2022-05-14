import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import gameReducer from "../features/game/gameSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        game: gameReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;