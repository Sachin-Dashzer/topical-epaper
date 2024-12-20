import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {

    isloading: true,
    newspappers: [],

}




export const registerFile = createAsyncThunk("/file/register", async (formData) => {
    const response = await axios.post("http://localhost:9000/admin/add-product", formData, {
        withCredentials: true,
    });
    return response.data;
})

export const deleteFile = createAsyncThunk(
    "/files/deleteProduct",
    async (id) => {
      const result = await axios.delete(
        `http://localhost:9000/admin/delete/${id}`
      );
  
      return result?.data;
    }
  );
  





const fileslice = createSlice({
    name: "files",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(registerFile.fulfilled, (state, action) => {
            state.isloading = false
            state.newspappers = action.payload
        })
            .addCase(registerFile.rejected, (state, action) => {
                state.isloading = false
                state.newspappers = null
            })
            .addCase(registerFile.fulfilled, (state, action) => {
                state.isloading = true
            })
            .addCase(deleteFile.fulfilled, (state, action) => {
                state.isloading = false
                state.newspappers = action.payload
            })
            .addCase(deleteFile.rejected, (state, action) => {
                state.isloading = false
                state.newspappers = null
            })
            .addCase(deleteFile.fulfilled, (state, action) => {
                state.isloading = true
            })
    }

})