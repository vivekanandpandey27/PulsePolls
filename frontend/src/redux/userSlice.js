import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
         authUser : null,
    },
    reducers : {
        setAuthUser : (state,action) =>{
        state.authUser = action.payload
        }
    }
});

export const{setAuthUser} = userSlice.actions; //Kyu: Taaki Frontend Components (Login Page) is action ko use kar sakein. (Courier bhejne ke liye).
export default userSlice.reducer; //Kyu: Taaki Store (store.js) is slice ko apne andar register kar sake. (Manager ko office mein bithane ke liye).

