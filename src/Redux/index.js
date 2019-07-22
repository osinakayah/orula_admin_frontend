import { combineReducers } from 'redux'
import configureSore from './CreateStore';
import rootSaga from '../Sagas';

export default () => {
    const rootReducer = combineReducers({
        nav: require('./NavigationRedux').reducer,
        login: require('./LoginRedux').reducer
    })

    return configureSore(rootReducer, rootSaga);
}