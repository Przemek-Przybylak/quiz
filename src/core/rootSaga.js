import {all} from "@redux-saga/core/effects";
import {wordsSaga} from "../features/game/gameSaga";

export default function* rootSaga() {
    yield all([wordsSaga(),])
}