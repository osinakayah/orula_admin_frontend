import Actions, { reducer, INITIAL_STATE } from '../../Redux/LoginRedux'


it('Login Request', function () {
    const email = 'john@doe.com'
    const password =  'secret';

    const state = reducer(INITIAL_STATE, Actions.loginRequest({email, password}))

    expect(state.fetching).toBe(true)
    expect(state.error).toBeNull()

});

it('Login Success', function () {
    const payload = {
        id: 1,
        fullname: "John Doe",
        email: "john@doe.com",
        user_type: 3,
        created_at: "2019-07-20T16:25:10.758Z",
        updated_at: "2019-07-20T16:25:10.758Z"
    };
    const state = reducer(INITIAL_STATE, Actions.loginSuccess(payload))
    expect(state.fetching).toBe(false)
    expect(state.payload.fullname).toBe(payload.fullname)
    expect(state.payload.email).toBe(payload.email)
    expect(state.error).toBeNull()
})

it('Login Error', function () {
    const error = 'You need to sign in or sign up before continuing.';
    const state = reducer(INITIAL_STATE, Actions.loginFailure(error))
    expect(state.fetching).toBe(false)
    expect(state.error).toBe(error)
    expect(state.payload).toBeNull()
})