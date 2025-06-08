import { createSlice } from "@reduxjs/toolkit";

const pollSlice = createSlice({
    name : "user",
    initialState : {
         selectedCategory : "all",
    },
    reducers : {
        setSelectedCtegory : (state,action) =>{
          state.selectedCategory = action.payload
        }
    }
});

export const{setSelectedCtegory} = pollSlice.actions;
export default pollSlice.reducer; 