

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




const initialState = {
    isloading: true,
    user: null,
    isAuthenticated: false
}





const LoginUser = createAsyncThunk('./auth/login', () => {

    async (FormData) => {

        const response = await axios.post('http://localhost:9000/login', FormData, { withCredentials: true });
        return response.data;
    }
})



const ResgisterUser = createAsyncThunk('./auth/register', () => {

    async (FormData) => {

        const response = await axios.post('http://localhost:9000/admin/register', FormData, { withCredentials: true });
        return response.data;
    }
})


const authSlice = createSlice({

    name: 'auth',
    initialState,

    reducer: { setUser: (state, action) => { } },

    extraReducers: ((builder) => {

        builder.addCase(ResgisterUser.fulfilled, (state, action) => {

            state.user = null;
            state.isAuthenticated = false;
            state.isloading = false;

        }).addCase(ResgisterUser.rejected, (state, action) => {

            state.user = null;
            state.isAuthenticated = false;
            state.isloading = false;

        }).addCase(ResgisterUser.pending, (state, action) => {
            
            state.isloading = true;

        }).addCase(LoginUser.fulfilled, (state, action) => {

            state.user = action.payload;
            state.isAuthenticated = true;
            state.isloading = false;

        }).addCase(LoginUser.rejected, (state, action) => {

            state.user = null;
            state.isAuthenticated = false;
            state.isloading = false;

        }).addCase(LoginUser.pending, (state, action) => {

            state.user = null;
            state.isAuthenticated = false;
            state.isloading = true;

        })
    })

})



export default authSlice.reducer;
export { LoginUser, ResgisterUser };
export const { setUser } = action.payload;


