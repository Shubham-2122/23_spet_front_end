import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        loading : false,
        users : [],
        error : ""
    },
    reducers:{
        userPending:(state,action)=>{
            state.loading = true
        },
        userFullfiled:(state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        },
        userRejeted:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers:{

    }
})

export const {userPending,userRejeted,userFullfiled} = userSlice.actions;

export default userSlice.reducer;