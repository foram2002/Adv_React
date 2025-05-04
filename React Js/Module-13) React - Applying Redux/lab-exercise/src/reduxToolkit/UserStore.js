import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reduxToolkit/UserReducer.js'

const UserStore = configureStore({
    reducer:{
        user:userReducer
    }
})

export default UserStore