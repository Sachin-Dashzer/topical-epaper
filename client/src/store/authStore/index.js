

import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const initialState = {
    isloading: true,
    user: [],
    isAuthenticated: true
}




const loginUser = createAsyncThunk(
    "/auth/login",
  
    async (formData) => {
      const response = await axios.post(
        "http://localhost:9000/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );
  
      return response.data;
    }
  );
  

const ResgisterUser = createAsyncThunk('/auth/register', () => {

    async (formData) => {

        const response = await axios.post('http://localhost:9000/admin/register', formData, { withCredentials: true });
        return response.data;
    }
})

const logoutUser = createAsyncThunk('/admin/logout', () => {

    async () => {

        const response = await axios.post('http://localhost:9000/auth/logout', {}, { withCredentials: true });
        return response.data;
    }
})



const checkAuthentication = createAsyncThunk('/auth/check-auth' , ()=>{

    async()=>{

        const response = await axios.get('http://localhost:9000/auth/check-auth', { withCredentials: true });
        return response.data;

    }
})


const deleteUser = createAsyncThunk('/auth/delete-user' , ()=>{

    async(user)=>{

        const response = await axios.post('http://localhost:9000/auth/delete-user', user ,  { withCredentials: true });
        return response.data;

    }
})













const authSlice = createSlice({

    name: 'auth',
    initialState,

    reducer: { setUser: (state, action) => { } },

    extraReducers: ((builder) => {

        builder.addCase(ResgisterUser.fulfilled, (state, action) => {
                        
            state.isAuthenticated = false;
            state.isloading = false;

        })
        .addCase(ResgisterUser.rejected, (state, action) => {
                        
            state.isAuthenticated = false;
            state.isloading = false;

        })
        .addCase(ResgisterUser.pending, (state, action) => {
            
            state.isloading = true;

        })
        .addCase(loginUser.fulfilled, (state, action) => {
                        
            state.isAuthenticated = true;
            state.isloading = false;

        })
        .addCase(loginUser.rejected, (state, action) => {
                        
            state.isAuthenticated = false;
            state.isloading = false;

        })
        .addCase(loginUser.pending, (state, action) => {

            state.isloading = true;

        })
        .addCase(checkAuthentication.fulfilled, (state, action) => {
            
            state.isAuthenticated = true;
            state.isloading = false;

        })
        .addCase(checkAuthentication.rejected, (state, action) => {
                        
            state.isAuthenticated = false;
            state.isloading = false;

        })
        .addCase(checkAuthentication.pending, (state, action) => {

            state.isloading = true;

        })
        .addCase(logoutUser.fulfilled, (state, action) => {
                        
            state.isAuthenticated = false;
            state.isloading = false;

        })
        .addCase(deleteUser.fulfilled , (state , action)=>{            
            state.isAuthenticated = true;
            state.isloading = false;
        })
        .addCase(deleteUser.rejected , (state, action)=>{            
            state.isAuthenticated = false;
            state.isloading = false;
        })
        .addCase(deleteUser.pending , (state, action)=>{
            state.isloading = true;
        })
    })

})



export default authSlice.reducer;
export { loginUser, ResgisterUser , logoutUser , checkAuthentication , deleteUser};
// export const { setUser } = action.payload;


