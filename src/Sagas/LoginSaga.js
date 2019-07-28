import LoginActions from '../Redux/LoginRedux'
import { call, put } from 'redux-saga/effects'
import {ToastsStore} from "react-toasts";
import {reactLocalStorage} from 'reactjs-localstorage';
import config from '../config';

export  function *postLoginSaga(api, action) {
    const { data } = action;

    const response = yield call(api.postLogin, data);

    if (response.ok) {
        reactLocalStorage.set(config.authTokenLocalStorage, response.headers.authorization);

        yield put(LoginActions.loginSuccess(response.data))
        window.location = '/'
    }
    else {
        ToastsStore.error(response.data.error);
        yield put(LoginActions.loginFailure(response.data.error))
    }
}