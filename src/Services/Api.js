// a library to wrap and simplify api calls
import apisauce from 'apisauce'


// our "constructor"
const create = (baseURL = '') => {
    // ------
    // STEP 1
    // ------
    //
    // Create and configure an apisauce-based api object.
    //
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
    })

    return {}
}

// let's return back our create method as the default.
export default {
    create
}
