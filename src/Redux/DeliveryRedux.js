import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    fetchingDeliveriesRequest: ['deliveriesData'],
    fetchingDeliveriesSuccess: ['deliveriesPayload'],
    fetchingDeliveriesFailure: ['deliveriesError'],
})

export const DeliveryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    deliveriesData: null,
    deliveriesPayload: [],
    deliveriesError: null,
    deliveriesFetching: false
})

/* ------------- Selectors ------------- */

export const DeliverySelectors = {
    getData: state => state
}

/* ------------- Reducers ------------- */

export const fetchingDeliveriesRequest = (state, {deliveriesData}) => {
    return state.merge({deliveriesData, deliveriesFetching: true, deliveriesError: null})
}
export const fetchingDeliveriesSuccess = (state, {deliveriesPayload}) => {
    return state.merge({deliveriesPayload, deliveriesFetching: false, deliveriesError: null})
}
export const fetchingDeliveriesFailure = (state, {deliveriesError}) => {
    return state.merge({deliveriesError, deliveriesFetching: false})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FETCHING_DELIVERIES_REQUEST]: fetchingDeliveriesRequest,
    [Types.FETCHING_DELIVERIES_SUCCESS]: fetchingDeliveriesSuccess,
    [Types.FETCHING_DELIVERIES_FAILURE]: fetchingDeliveriesFailure,
})
