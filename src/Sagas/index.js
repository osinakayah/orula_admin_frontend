import { all, takeLatest } from 'redux-saga/effects'
import config from '../config'
import FixtureAPI from '../Services/FixtureApi'
import API from '../Services/Api'

//----------------Types----------------------
import {LoginTypes } from "../Redux/LoginRedux";

//-------------------Sagas-------------------
import {postLoginSaga } from "./LoginSaga";

// ----------------API--------------
const api = config.debug ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */
export default function * root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, postLoginSaga, api)
    ]);
}
