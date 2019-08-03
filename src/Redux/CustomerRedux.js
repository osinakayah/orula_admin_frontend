import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    fetchingCustomersRequest: ['customersData'],
    fetchingCustomersSuccess: ['customersPayload'],
    fetchingCustomersFailure: ['customersError'],

    fetchingCustomerRequest: ['customerData'],
    fetchingCustomerSuccess: ['customerPayload'],
    fetchingCustomerFailure: ['customerError']
})

export const CustomerTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    customersPayload: {
        customers: [],
        total_pages: 0
    },
    customersError: null,
    customersFetching: false,

    customerFetching: false,
    customerError: null,
    customerPayload: {}
})

/* ------------- Selectors ------------- */

export const CustomerSelectors = {
    getData: state => state
}

/* ------------- Reducers ------------- */
export const fetchingCustomersRequest = state => {
    return state.merge({customersFetching: true, customersError: null})
}
export const fetchingCustomersSuccess = (state, {customersPayload}) => {
    return state.merge({customersPayload, customersFetching: false, customersError: null})
}
export const fetchingCustomersFailure = (state, {customersError}) => {
    return state.merge({customersError, customersFetching: false})
}

export const fetchingCustomerRequest = state => {
    return state.merge({customerFetching: true, customerError: null})
}
export const fetchingCustomerSuccess = (state, {customerPayload}) => {
    return state.merge({customerPayload, customerFetching: false, customerError: null})
}
export const fetchingCustomerFailure = (state, {customerError}) => {
    return state.merge({customerError, customerFetching: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FETCHING_CUSTOMERS_REQUEST]: fetchingCustomersRequest,
    [Types.FETCHING_CUSTOMERS_SUCCESS]: fetchingCustomersSuccess,
    [Types.FETCHING_CUSTOMERS_FAILURE]: fetchingCustomersFailure,

    [Types.FETCHING_CUSTOMER_REQUEST]: fetchingCustomerRequest,
    [Types.FETCHING_CUSTOMER_SUCCESS]: fetchingCustomerSuccess,
    [Types.FETCHING_CUSTOMER_FAILURE]: fetchingCustomerFailure
})