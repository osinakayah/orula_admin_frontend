import { all, takeLatest } from 'redux-saga/effects'
import config from '../config'
import FixtureAPI from '../Services/FixtureApi'
import API from '../Services/Api'
import {reactLocalStorage} from 'reactjs-localstorage';

//----------------Types----------------------
import { LoginTypes } from "../Redux/LoginRedux";
import { DeliveryTypes } from "../Redux/DeliveryRedux";

//-------------------Sagas-------------------
import { postLoginSaga } from "./LoginSaga";
import { getFetchingDeliverySaga } from "./DeliverySaga";

// ----------------API--------------
const api = config.debug ? FixtureAPI : API.create(reactLocalStorage.get(config.authTokenLocalStorage))

/* ------------- Connect Types To Sagas ------------- */
export default function * root() {
    yield all([
        takeLatest(LoginTypes.LOGIN_REQUEST, postLoginSaga, api),
        takeLatest(DeliveryTypes.FETCHING_DELIVERIES_REQUEST, getFetchingDeliverySaga, api)
    ]);
}
