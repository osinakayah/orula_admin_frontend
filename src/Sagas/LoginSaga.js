import LoginActions from '../Redux/LoginRedux'
import { call, put } from 'redux-saga/effects'
export  function *postLoginSaga(api, action) {
    const { data } = action;

    const reponse = yield call(api.postLogin, data);
    if (reponse.ok) {
        yield put(LoginActions.loginSuccess(reponse.data))
    }
    else {
        yield put(LoginActions.loginFailure(reponse.data.error))
    }
}