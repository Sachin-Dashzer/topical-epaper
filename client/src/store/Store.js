import authReducer from './authStore/index.js'
import fileReducer from './fileStore/index.js'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({

    reducer : {
        auth : authReducer,
        files : fileReducer,
    }
})


export default store;