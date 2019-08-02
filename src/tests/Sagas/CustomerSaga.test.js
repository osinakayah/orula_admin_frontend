import FixtureAPI from '../../Services/FixtureApi'
import { getFetchingCustomersSaga, getFetchingCustomerSaga } from '../../Sagas/CustomerSaga'
import { expectSaga } from "redux-saga-test-plan";
import CustomerActions from '../../Redux/CustomerRedux'


it("succcess customers", function () {
    const page = 1
    const type =  1
    const customersData = {
        page,
        type
    }
    const payload = [];
    return expectSaga(getFetchingCustomersSaga, FixtureAPI, {customersData})
        .put(CustomerActions.fetchingCustomersSuccess(payload))
        .run();
});

it("error customers", function () {
    const page = -1
    const status =  1
    const customersData = {
        page,
        status
    }
    const error = "Something went wrong";
    return expectSaga(getFetchingCustomersSaga, FixtureAPI, {customersData})
        .put(CustomerActions.fetchingCustomersFailure(error))
        .run();
});


it("success customer", function () {
    const id = 1
    const customerData = {
        id
    }
    const payload = require('../../Fixtures/customer.json');

    return expectSaga(getFetchingCustomerSaga, FixtureAPI, {customerData})
        .put(CustomerActions.fetchingCustomerSuccess(payload))
        .run();

});


it("error customer", function () {
    const id = 0
    const customerData = {
        id
    }
    const error = "Something went wrong";

    return expectSaga(getFetchingCustomerSaga, FixtureAPI, {customerData})
        .put(CustomerActions.fetchingCustomerFailure(error))
        .run();
});
