import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import personReducer from "../common/person/personSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        person: personReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;