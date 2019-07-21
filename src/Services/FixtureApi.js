export default {
    // Functions return fixtures
    postLogin: ({email, password}) => {
        if (password === 'secret') {
            return {
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

}