import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    fetchingDeliveriesRequest: ['deliveriesData'],
    fetchingDeliveriesSuccess: ['deliveriesPayload'],
    fetchingDeliveriesFailure: ['deliveriesError'],

    fetchingDeliveryRequest: null,
    fetchingDeliverySuccess: ['deliveryPayload'],
    fetchingDeliveryFailure: ['deliveryError']


})

export const DeliveryTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    deliveriesData: null,
    deliveriesPayload: [],
    deliveriesError: null,
    deliveriesFetching: false,

    deliveryFetching: false,
    deliveryError: null,
    deliveryPayload: {}
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

export const fetchingDeliveryRequest = state => state.merge({deliveryFetching: true, deliveryError: null})
export const fetchingDeliverySuccess = (state, {deliveryPayload} ) => state.merge({deliveryPayload, deliveryFetching: false, deliveryError: null})
export const fetchingDeliveryFailure = (state, {deliveryError} ) => state.merge({deliveryError, deliveryFetching: false, deliveryPayload: {}})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.FETCHING_DELIVERIES_REQUEST]: fetchingDeliveriesRequest,
    [Types.FETCHING_DELIVERIES_SUCCESS]: fetchingDeliveriesSuccess,
    [Types.FETCHING_DELIVERIES_FAILURE]: fetchingDeliveriesFailure,
    [Types.FETCHING_DELIVERY_REQUEST]: fetchingDeliveryRequest,
    [Types.FETCHING_DELIVERY_SUCCESS]: fetchingDeliverySuccess,
    [Types.FETCHING_DELIVERY_FAILURE]: fetchingDeliveryFailure
})
