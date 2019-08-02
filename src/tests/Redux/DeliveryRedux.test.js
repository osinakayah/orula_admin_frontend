import Actions, { reducer, INITIAL_STATE } from '../../Redux/DeliveryRedux'


it('Fetch Deliveries Request', function () {
    const page = 1
    const type = 1

    const state = reducer(INITIAL_STATE, Actions.fetchingDeliveriesRequest({page, type}))

    expect(state.deliveriesFetching).toBe(true)
    expect(state.deliveriesData.page).toBe(page)
    expect(state.deliveriesData.type).toBe(type)
    expect(state.deliveriesError).toBeNull()

});

it('Fetch Deliveries Success', function () {
    const payload = [];
    const state = reducer(INITIAL_STATE, Actions.fetchingDeliveriesSuccess(payload))
    expect(state.deliveriesFetching).toBe(false)
    expect(state.deliveriesPayload).toEqual(payload)
    expect(state.deliveriesError).toBeNull()
})

it('Fetch Deliveries Error', function () {
    const error = 'Something went wrong';
    const state = reducer(INITIAL_STATE, Actions.fetchingDeliveriesFailure(error))
    expect(state.deliveriesFetching).toBe(false)
    expect(state.deliveriesError).toBe(error)
    expect(state.deliveriesPayload).toEqual([])
})

it('Fetch Delivery Request', function () {
    const id = 1

    const state = reducer(INITIAL_STATE, Actions.fetchingDeliveryRequest({id}))

    expect(state.deliveryFetching).toBe(true)
    expect(state.deliveryError).toBeNull()

});


it('Fetch Delivery Success ', function () {
    const payload = {
        name:"Shoe"
    };

    const state = reducer(INITIAL_STATE, Actions.fetchingDeliverySuccess(payload))

    expect(state.deliveryFetching).toBe(false)
    expect(state.deliveryError).toBeNull()
    expect(state.deliveryPayload).toEqual(payload)

});

it('Fetch Delivery error', function () {
    const error = 'Something went wrong';

    const state = reducer(INITIAL_STATE, Actions.fetchingDeliveryFailure(error))

    expect(state.deliveryFetching).toBe(false)
    expect(state.deliveryError).toBe(error)
    expect(state.deliveryPayload).toEqual({})

});
