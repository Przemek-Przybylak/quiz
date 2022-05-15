import {takeLatest, call, put} from "redux-saga/effects";
import {fetchWordsSuccess, fetchWords, fetchWordsError} from "./gameSlice";
import {getWords} from "./getWords";

function* FetchWordsHandler() {
    try {
        const words = yield call(getWords);
        yield put(fetchWordsSuccess(words));
    } catch (error) {
        yield put(fetchWordsError());
    }
}

export function* wordsSaga() {
    yield takeLatest(fetchWords.type, FetchWordsHandler);
}