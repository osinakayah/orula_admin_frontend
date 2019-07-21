import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    loginRequest: ['data'],
    loginSuccess: ['payload'],
    loginFailure: ['error'],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    data: null,
    payload: null,
    error: null,
    fetching: false
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
    getData: state => state
}

/* ------------- Reducers ------------- */

export const loginRequest = (state, {data}) => {
    return state.merge({data, fetching: true, payload:null, error: null})
}
export const loginSuccess = (state, {payload}) => {
    return state.merge({payload, fetching: false, error: null})
}
export const loginFailure = (state, {error}) => {
    return state.merge({error, fetching: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_REQUEST]: loginRequest,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
})
