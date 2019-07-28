import { combineReducers } from 'redux'
import configureSore from './CreateStore';
import rootSaga from '../Sagas';

export default () => {
    const rootReducer = combineReducers({
        nav: require('./NavigationRedux').reducer,
        login: require('./LoginRedux').reducer,
        deliveries: require('./DeliveryRedux').reducer
    })

    return configureSore(rootReducer, rootSaga);
}