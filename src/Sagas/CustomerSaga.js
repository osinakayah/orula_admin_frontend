import { call, put } from 'redux-saga/effects'
import CustomerActions from "../Redux/CustomerRedux";


export  function *getFetchingCustomersSaga(api, action) {
    const { customersData } = action;

    const response = yield call(api.getFetchingCustomers, customersData)

    if (response.ok) {
        yield put(CustomerActions.fetchingCustomersSuccess(response.data))
    }
    else {
        yield put(CustomerActions.fetchingCustomersFailure(response.data.error))
    }

}

export function *getFetchingCustomerSaga(api, action) {
    const { customerData } = action;

    const response = yield call(api.getFetchingCustomer, customerData)

    if (response.ok) {
        yield put(CustomerActions.fetchingCustomerSuccess(response.data))
    }
    else {
        yield put(CustomerActions.fetchingCustomerFailure(response.data.error))
    }
}