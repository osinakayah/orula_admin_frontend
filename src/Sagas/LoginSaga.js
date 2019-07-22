import LoginActions from '../Redux/LoginRedux'
import { call, put } from 'redux-saga/effects'
import {ToastsStore} from "react-toasts";
export  function *postLoginSaga(api, action) {
    const { data } = action;

    const reponse = yield call(api.postLogin, data);

    if (reponse.ok) {
        yield put(LoginActions.loginSuccess(reponse.data))
    }
    else {
        ToastsStore.error(reponse.data.error);
        yield put(LoginActions.loginFailure(reponse.data.error))
    }
}