import FixtureAPI from '../../Services/FixtureApi'


import { postLoginSaga } from '../../Sagas/LoginSaga'
import LoginActions from '../../Redux/LoginRedux'
import { expectSaga } from "redux-saga-test-plan";



it("succcess login", function () {
    const email = 'john@doe.com'
    const password =  'secret';
    const data = {
        email,
        password
    }
    const payload = {
        id: 1,
        fullname: "John Doe",
        email: "john@doe.com",
        user_type: 3,
        created_at: "2019-07-20T16:25:10.758Z",
        updated_at: "2019-07-20T16:25:10.758Z"
    };
    return expectSaga(postLoginSaga, FixtureAPI, {data})
        .put(LoginActions.loginSuccess(payload))
        .run();
});

it("error login", function () {
    const email = 'john@doe.com'
    const password =  '';
    const data = {
        email,
        password
    }
    const error = {
        error: "Something went wrong"
    };
    return expectSaga(postLoginSaga, FixtureAPI, {data})
        .put(LoginActions.loginFailure(error.error))
        .run();
});
