import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isloading: true,
    user: null, 
    isAuthenticated: false,
};

// Login User
const loginUser = createAsyncThunk("/auth/login", async (formData) => {
    const response = await axios.post("http://localhost:9000/auth/login", formData, {
        withCredentials: true,
    });
    return response.data;
});

// Register User
const ResgisterUser = createAsyncThunk("/auth/register", async (formData) => {
    const response = await axios.post(
        "http://localhost:9000/auth/register",
        formData,
        { withCredentials: true }
    );
    return response.data;
});

// Logout User
const logoutUser = createAsyncThunk("/auth/logout", async () => {
    const response = await axios.post(
        "http://localhost:9000/auth/logout",
        {},
        {
            withCredentials: true,
        }
    );
    return response.data;
});



const updateUser = createAsyncThunk("/auth/update", async (formData) => {
    const response = await axios.put(
        "http://localhost:9000/auth/update",
        formData,
        {
            withCredentials: true,
        }
    );
    return response.data;
});



// Check Authentication
const checkAuthentication = createAsyncThunk("/auth/check-auth", async () => {
    const response = await axios.get("http://localhost:9000/auth/check-auth", {
        withCredentials: true,
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
    });
    return response.data;
});

// Delete User
const deleteUser = createAsyncThunk("/auth/delete", async (id) => {
    const response = await axios.delete(
        `http://localhost:9000/auth/delete-user/${id}`,
        { withCredentials: true }
    );
    return response.data;
});

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            // Register User
            .addCase(ResgisterUser.fulfilled, (state) => {
                state.isAuthenticated = true; // Registration doesn't log in the user
                state.isloading = false;
            })
            .addCase(ResgisterUser.rejected, (state) => {
                state.isAuthenticated = false;
                state.isloading = false;
            })
            .addCase(ResgisterUser.pending, (state) => {
                state.isloading = true;
            })

            // Login User
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload.success;
                state.user = action.payload.success;
                state.isloading = false;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isAuthenticated = false;
                state.isloading = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.isloading = true;
            })

            // Check Authentication
            .addCase(checkAuthentication.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload.success;
                state.user = action.payload.user;
                state.isloading = false;
            })
            .addCase(checkAuthentication.rejected, (state) => {
                state.isAuthenticated = false;
                state.user = null; // Reset user if not authenticated
                state.isloading = false;
            })
            .addCase(checkAuthentication.pending, (state) => {
                state.isloading = true;
            })

            // Logout User
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.user = null; // Clear user data on logout
                state.isloading = false;
            })

            // Delete User
            .addCase(deleteUser.fulfilled, (state) => {
                state.isAuthenticated = true; // Deleting a user ends authentication
                state.user = null; // Clear user data
                state.isloading = false;
            })
            .addCase(deleteUser.rejected, (state) => {
                state.isAuthenticated = false; // Ensure authentication is invalidated
                state.isloading = false;
            })
            .addCase(deleteUser.pending, (state) => {
                state.isloading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.isloading = false;
            }).addCase(updateUser.rejected, (state) => {
                state.isAuthenticated = true;
                state.isloading = false;
            })
            .addCase(updateUser.pending, (state) => {
                state.isloading = true;
            });
    },
});

export default authSlice.reducer;
export { loginUser, ResgisterUser, logoutUser,updateUser , checkAuthentication, deleteUser };
