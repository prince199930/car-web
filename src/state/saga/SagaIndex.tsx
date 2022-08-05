import sagaGetData from "./EmployeData";

import { takeLatest } from "redux-saga/effects";

const mySaga = function*() {
    yield takeLatest("callSaga", sagaGetData);
    }

export default mySaga;