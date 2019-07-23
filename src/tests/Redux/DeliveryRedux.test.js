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

it('Login Error', function () {
    const error = 'Something went wrong';
    const state = reducer(INITIAL_STATE, Actions.fetchingDeliveriesFailure(error))
    expect(state.deliveriesFetching).toBe(false)
    expect(state.deliveriesError).toBe(error)
    expect(state.deliveriesPayload).toEqual([])
})