import axios from "axios";
import { call, put } from "redux-saga/effects";
import { ActionType } from "../action-types";
import { IEmploye } from "../reducers/EmployeReducer";
import api from '../api/api';
import { Action } from "../actions/index";


 function getEmployeeData(page: any):any{
  let config: any = {
    method: "GET",
    url: `/public/v1/users?page=${page}`,
  };
  return()=> api(config)
    .then((resp) => {
      console.log(resp);
      return resp;
    })
    .catch((err) => {
     
      console.log("some error occured in getting the data", err);
    });
};

function* sagaGetData(action:Action): any {
  const data = yield call(getEmployeeData(action.payload));
  console.log(data)

  yield put({ type: ActionType.GETDATA, payload: data.data.data });
};

export default sagaGetData;
