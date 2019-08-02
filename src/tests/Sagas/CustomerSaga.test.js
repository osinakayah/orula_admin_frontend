import FixtureAPI from '../../Services/FixtureApi'
import { getFetchingCustomersSaga, getFetchingCustomerSaga } from '../../Sagas/CustomerSaga'
import { expectSaga } from "redux-saga-test-plan";
import CustomerActions from '../../Redux/CustomerRedux'