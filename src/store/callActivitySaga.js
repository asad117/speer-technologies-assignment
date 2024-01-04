import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  fetchDetailFailure,
  fetchDetailStart,
  fetchDetailSuceess,
} from "./callActivityRedux";
import { fetchCalls, updateCalls, getCallDetail } from "../services/api";

function* fetchCallsSaga(payload) {
  try {
    yield put(fetchDataStart());
    const data = yield call(fetchCalls);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    console.log("error.message", error.message);
    yield put(fetchDataFailure(error.message));
  }
}

function* updateCallSaga(payload) {
  let { activityFeed, status } = payload.data;
  try {
    yield put(updateStart());
    yield call(updateCalls,{ id: activityFeed.id, status });
    yield put(updateSuccess());
    //  const data = yield all(activityFeed.map((data) => put(updateCalls({ id: data.id, status }))));
    yield call(fetchCallsSaga);
  } catch (error) {
    yield put(updateFailure(error.message));
  }
}

function* fetchCallDetailSaga(payload) {
  try {
    yield put(fetchDetailStart());
    const data = yield call(getCallDetail, { id: payload.data });
    yield put(fetchDetailSuceess(data));
  } catch (error) {
    console.log("error.message", error.message);
    yield put(fetchDetailFailure(error.message));
  }
}

function* rootReducer() {
  yield all([
    yield takeLatest("fetchDataStart", fetchCallsSaga),
    yield takeLatest("updateStart", updateCallSaga),
    yield takeLatest("fetchDetailStart", fetchCallDetailSaga),
  ]);
}

export default rootReducer;
