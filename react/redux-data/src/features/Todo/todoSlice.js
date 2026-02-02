import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todo : ["Rushit","Het"]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        Addtodo:(state,action)=>{
            state.todo.push(action.payload)  
        },
        deleteTodo : (state,action)=>{
            state.todo = state.todo.filter((data,index)=> index != action.payload);
        }
    }
})

export const {Addtodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer;