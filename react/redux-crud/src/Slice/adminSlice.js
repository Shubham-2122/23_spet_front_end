import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
    name:"adminDetilas",
    initialState : {
        loading:false,
        admins:[],
        error : ""
    },
    reducers:{

    }
})

export const {} = adminSlice.actions;

export default adminSlice.reducer;