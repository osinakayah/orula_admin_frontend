import DeliveryActions from '../Redux/DeliveryRedux'
import { call, put } from 'redux-saga/effects'
import {ToastsStore} from "react-toasts";

export  function *getFetchingDeliveriesSaga(api, action) {

    const { deliveriesData } = action;


    const response = yield call(api.getFetchingDeliveries, deliveriesData);

    if (response.ok) {
        yield put(DeliveryActions.fetchingDeliveriesSuccess(response.data))
    }
    else {
        ToastsStore.error(response.data.error);
        yield put(DeliveryActions.fetchingDeliveriesFailure(response.data.error))
    }
}

export function *getFetchingDeliverySaga(api, action) {
    const { deliveryData } = action;
    const response = yield call(api.getFetchingDelivery, deliveryData);

    if (response.ok) {
        yield put(DeliveryActions.fetchingDeliverySuccess(response.data))
    }
    else {
        yield put(DeliveryActions.fetchingDeliveryFailure(response.data.error))
    }
}