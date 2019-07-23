import FixtureAPI from '../../Services/FixtureApi'


import { getFetchingDeliverySaga } from '../../Sagas/DeliverySaga'
import DeliveryActions from '../../Redux/DeliveryRedux'
import { expectSaga } from "redux-saga-test-plan";



it("succcess Delivery", function () {
    const page = 1
    const type =  1
    const data = {
        page,
        type
    }
    const payload = [];
    return expectSaga(getFetchingDeliverySaga, FixtureAPI, {data})
        .put(DeliveryActions.fetchingDeliveriesSuccess(payload))
        .run();
});

it("error Delivery", function () {
    const page = -1
    const type =  1
    const data = {
        page,
        type
    }
    const error = {
        error: "Something went wrong"
    };
    return expectSaga(getFetchingDeliverySaga, FixtureAPI, {data})
        .put(DeliveryActions.fetchingDeliveriesFailure(error.error))
        .run();
});
