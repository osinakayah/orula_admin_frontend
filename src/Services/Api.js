// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import config from '../config'


// our "constructor"
const create = (token = null) => {
    // ------
    // STEP 1
    // ------
    //
    // Create and configure an apisauce-based api object.
    //
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL: config.baseUrl,
        headers: { Authorization: token },
    })

    const postLogin = (data) => {
        return api.post('auth/login', data);
    }

    const getFetchingDeliveries = (data) => {
        return api.get(`deliveries?status=${data.status}&page=${data.page}`)
    }
    const getFetchingDelivery = (data) => {
        return api.get(`deliveries/${data.id}`)
    }
    const getFetchingCustomers = (data) => {
        return api.get(`customers?status=${data.status}&page=${data.page}`)
    }
    const getFetchingCustomer = (data) => {
        return api.get(`customers/${data.id}`)
    }

    return {
        postLogin,
        getFetchingDeliveries,
        getFetchingDelivery,
        getFetchingCustomers,
        getFetchingCustomer
    }
}

// let's return back our create method as the default.
export default {
    create
}
