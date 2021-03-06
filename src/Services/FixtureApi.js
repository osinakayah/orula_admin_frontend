export default {
    // Functions return fixtures
    postLogin: ({email, password}) => {
        if (password === 'secret') {
            return {
                headers:{
                    authorization: "testHeader"
                },
                ok: true,
                data : {
                    id: 1,
                    fullname: "John Doe",
                    email: email,
                    user_type: 3,
                    created_at: "2019-07-20T16:25:10.758Z",
                    updated_at: "2019-07-20T16:25:10.758Z"
                }
            }
        }
        return {
            ok: false,
            data: {
                error: "Something went wrong"
            }
        }

    },
    getFetchingDeliveries: ({page, status}) => {
        if (page > 0 ) {
            return {
                ok: true,
                data: require('../Fixtures/deliveries.json')
            }
        }
        return {
            ok: false,
            data: {
                error: "Something went wrong"
            }
        }
    },
    getFetchingDelivery: ({id}) => {
        if (id > 0) {
            return {
                ok: true,
                data: require('../Fixtures/delivery.json')
            }
        }
        return {
            ok: false,
            data: {
                error: "Something went wrong"
            }
        }
    },
    getFetchingCustomers: ({page, status}) => {
        if (page > 0) {
            return {
                ok: true,
                data: require('../Fixtures/customers.json')
            }
        }
        return {
            ok: false,
            data: {
                error: "Something went wrong"
            }
        }
    },
    getFetchingCustomer: ({id}) => {
        if (id > 0) {
            return {
                ok: true,
                data: require('../Fixtures/customer.json')
            }
        }
        return {
            ok: false,
            data: {
                error: "Something went wrong"
            }
        }
    },

}