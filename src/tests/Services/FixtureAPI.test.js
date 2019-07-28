import API from '../../Services/Api'
import FixtureAPI from '../../Services/FixtureApi'
import R from 'ramda'

it('All fixtures map to actual API', () => {
    const fixtureKeys = R.keys(FixtureAPI).sort()
    const apiKeys = R.keys(API.create())

    const intersection = R.intersection(fixtureKeys, apiKeys).sort()

    // There is no difference between the intersection and all fixtures
    expect(R.equals(fixtureKeys, intersection)).toBe(true)
})

it('FixtureAPI postLogin returns the right file for success login', () => {
    const expectedFile = require('../../Fixtures/login.json');
    const email = 'john@doe.com'
    const password =  'secret';
    expect(FixtureAPI.postLogin({email, password})).toEqual({
        ok: true,
        headers:{
            authorization: "testHeader"
        },
        data: expectedFile
    })
})

it('FixtureAPI postLogin returns the right file for error login', () => {
    const expectedFile = require('../../Fixtures/error.json');
    const email = 'john@doe.com'
    const password =  '';
    expect(FixtureAPI.postLogin({email, password})).toEqual({
        ok: false,
        data: expectedFile
    })
})

it('FixtureAPI getFetchingDeliveries returns the right file ', () => {
    const expectedFile = require('../../Fixtures/deliveries.json');

    expect(FixtureAPI.getFetchingDeliveries({page: 1, status: 1})).toEqual({
        ok: true,
        data: expectedFile
    })
})


