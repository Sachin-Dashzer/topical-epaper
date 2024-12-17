

import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";




const initialState = {
    isloading: true,
    user: null,
    isAuthenticated: false
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

        }).addCase(loginUser.fulfilled, (state, action) => {

            state.user = action.payload;
            state.isAuthenticated = true;
            state.isloading = false;

        }).addCase(loginUser.rejected, (state, action) => {

            state.user = null;
            state.isAuthenticated = false;
            state.isloading = false;

        }).addCase(loginUser.pending, (state, action) => {

            state.user = null;
            state.isAuthenticated = false;
            state.isloading = true;

        })
    })

})



export default authSlice.reducer;
export { loginUser, ResgisterUser };
// export const { setUser } = action.payload;


