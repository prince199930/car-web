import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/EmployeReducer';
import createSagaMiddleware from '@redux-saga/core';
import mySaga from './saga/SagaIndex';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middleware);
sagaMiddleware.run(mySaga);

export default store;