import FixtureAPI from '../../Services/FixtureApi'


import { getFetchingDeliveriesSaga, getFetchingDeliverySaga } from '../../Sagas/DeliverySaga'
import DeliveryActions from '../../Redux/DeliveryRedux'
import { expectSaga } from "redux-saga-test-plan";



it("succcess Deliveries", function () {
    const page = 1
    const type =  1
    const deliveriesData = {
        page,
        type
    }
    const payload = require('../../Fixtures/deliveries');
    return expectSaga(getFetchingDeliveriesSaga, FixtureAPI, {deliveriesData})
        .put(DeliveryActions.fetchingDeliveriesSuccess(payload))
        .run();
});

it("error Deliveries", function () {
    const page = -1
    const status =  1
    const deliveriesData = {
        page,
        status
    }
    const error = "Something went wrong";
    return expectSaga(getFetchingDeliveriesSaga, FixtureAPI, {deliveriesData})
        .put(DeliveryActions.fetchingDeliveriesFailure(error))
        .run();
});


it("success delivery", function () {
    const id = 1
    const deliveryData = {
        id
    }
    const payload = require('../../Fixtures/delivery.json');

    return expectSaga(getFetchingDeliverySaga, FixtureAPI, {deliveryData})
        .put(DeliveryActions.fetchingDeliverySuccess(payload))
        .run();

});


it("error delivery", function () {
    const id = 0
    const deliveryData = {
        id
    }
    const error = "Something went wrong";

    return expectSaga(getFetchingDeliverySaga, FixtureAPI, {deliveryData})
        .put(DeliveryActions.fetchingDeliveryFailure(error))
        .run();
});
