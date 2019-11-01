import LoginActions from '../Redux/LoginRedux'
import { call, put } from 'redux-saga/effects'
import {ToastsStore} from "react-toasts";
import {reactLocalStorage} from 'reactjs-localstorage';
import config from '../config';

export  function *postLoginSaga(api, action) {
    const { data } = action;

    const response = yield call(api.postLogin, data);

    if (response.ok) {
        reactLocalStorage.set(config.authTokenLocalStorage, response.data.access_token);

        yield put(LoginActions.loginSuccess(response.data))

        window.location = 'http://localhost:3001'
    }
    else {
        ToastsStore.error(response.data.error);
        yield put(LoginActions.loginFailure(response.data.error))
    }
}
