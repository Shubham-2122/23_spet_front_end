import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// All data read
export const readData = createAsyncThunk(
    'readData',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/users")
            const result = await res.data
            return result;

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
// new Product
export const newData = createAsyncThunk(
    'newData',async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/users",data)
            const result = await res.data
            return result;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
// deletedata
export const deleteData = createAsyncThunk(
    'deleteData',async(id,{rejectWithValue})=>{
        try {
            await axios.delete(`http://localhost:3000/users/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userSlice = createSlice({
    name:"userDetails",
    initialState:{
        loading : true,
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
    extraReducers:(builder)=>{
        builder
        .addCase(readData.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(readData.fulfilled,(state,action)=>{
            state.loading = false;
            state.users = action.payload
        })
        .addCase(readData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })

        // new data
        .addCase(newData.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(newData.fulfilled,(state,action)=>{
            state.loading = false;
            state.users.push(action.payload)
        })
        .addCase(newData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })

        // deletedata
         .addCase(deleteData.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(deleteData.fulfilled,(state,action)=>{
            state.loading = false;
            
            state.users = state.users.filter(
                (user)=> user.id != action.payload
            )
        })
        .addCase(deleteData.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
        
    }
})

export const {userPending,userRejeted,userFullfiled} = userSlice.actions;

export default userSlice.reducer;