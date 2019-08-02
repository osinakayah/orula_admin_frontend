import Actions, { reducer, INITIAL_STATE } from '../../Redux/CustomerRedux'

it("Fetch customers request", function () {
    const page = 1
    const type = 1

    const state = reducer(INITIAL_STATE, Actions.fetchingCustomersRequest({page, type}))

    expect(state.customersFetching).toBe(true)
    expect(state.customersError).toBeNull()
});

it("Fetch customers success", function () {
    const payload = [];
    const state = reducer(INITIAL_STATE, Actions.fetchingCustomersSuccess(payload))
    expect(state.customersFetching).toBe(false)
    expect(state.customersPayload).toEqual(payload)
    expect(state.customersError).toBeNull()
});

it('Fetch customers Error', function () {
    const error = 'Something went wrong';
    const state = reducer(INITIAL_STATE, Actions.fetchingCustomersFailure(error))
    expect(state.customersFetching).toBe(false)
    expect(state.customersError).toBe(error)
    expect(state.customersPayload).toEqual([])
})


/*-------------------Customer------------------*/

it('Fetch customer Request', function () {
    const id = 1

    const state = reducer(INITIAL_STATE, Actions.fetchingCustomerRequest({id}))

    expect(state.customerFetching).toBe(true)
    expect(state.customerError).toBeNull()

});


it('Fetch customer Success ', function () {
    const payload = {
        name:"Shoe"
    };

    const state = reducer(INITIAL_STATE, Actions.fetchingCustomerSuccess(payload))

    expect(state.customerFetching).toBe(false)
    expect(state.customerError).toBeNull()
    expect(state.customerPayload).toEqual(payload)

});

it('Fetch customer error', function () {
    const error = 'Something went wrong';

    const state = reducer(INITIAL_STATE, Actions.fetchingCustomerFailure(error))

    expect(state.customerFetching).toBe(false)
    expect(state.customerError).toBe(error)
    expect(state.customerPayload).toEqual({})

});