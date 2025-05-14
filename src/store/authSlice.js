import { createSlice } from "@reduxjs/toolkit";   // SLICE KA KAAM YAHA- TO CHECK USER AUTHENTICATE H YA NHI... YE STORE SE HR BAR PUCHHANA

const initialState= {
    status: false,                          // BY DEFAULT USER AUTHENTICATE NHI H
    userData:null
}
 const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=> {
            state.status = true;
            state.userData= action.payload;
        },
        logout: (state)=>{
            state.status=false;
            state.userData= null;
        }
    }
 });            
 
 export const {login, logout} = authSlice.actions;

 export default authSlice.reducer;