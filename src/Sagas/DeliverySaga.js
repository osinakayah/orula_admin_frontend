import DeliveryActions from '../Redux/DeliveryRedux'
import { call, put } from 'redux-saga/effects'
import {ToastsStore} from "react-toasts";

export  function *getFetchingDeliverySaga(api, action) {
    const { data } = action;

    const response = yield call(api.getFetchingDeliveries, data);

    if (response.ok) {
        yield put(DeliveryActions.fetchingDeliveriesSuccess(response.data))
    }
    else {
        ToastsStore.error(response.data.error);
        yield put(DeliveryActions.fetchingDeliveriesFailure(response.data.error))
    }
}