import { combineReducers } from 'redux'
import configureSore from './CreateStore';
import rootSaga from '../Sagas';

export default () => {
    const rootReducer = combineReducers({
        // products: require('./ProductsRedux').reducer,
        nav: require('./NavigationRedux').reducer
    })

    return configureSore(rootReducer, rootSaga);
}