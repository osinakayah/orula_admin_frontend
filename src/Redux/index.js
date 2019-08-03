import { combineReducers } from 'redux'
import configureSore from './CreateStore';
import rootSaga from '../Sagas';

export default () => {
    const rootReducer = combineReducers({
        nav: require('./NavigationRedux').reducer,
        login: require('./LoginRedux').reducer,
        deliveries: require('./DeliveryRedux').reducer,
        customers: require('./CustomerRedux').reducer
    })

    return configureSore(rootReducer, rootSaga);
}