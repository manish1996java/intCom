import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFromLocal, saveInLocal } from "../../utils/localStorage";

const initialState = getFromLocal('authState') || {
    user:{},
    isAuth: false,
    isCreated: false
}


// const userLogin = createAsyncThunk('',()=>{

// })

// const userSignup = createAsyncThunk('',()=>{

// });

// const userLogout = createAsyncThunk('',()=>{

// });



const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:function(state,action){
            console.log('login',action);
            const {userId, password} = action.payload;
            console.log('userId',userId,'password',password);
            const signupStateFromLocal = getFromLocal('signupState')
            console.log('loginState',signupStateFromLocal);
            console.log("--",signupStateFromLocal);
            if(signupStateFromLocal){
                console.log('userId',signupStateFromLocal.userId);
                if(userId === signupStateFromLocal.userId && password === signupStateFromLocal.password){
                    alert('login successful');
                    let updatedState = {
                        ...state,
                        user:signupStateFromLocal,
                        isAuth:true
                    }
                    saveInLocal('authState',updatedState);
                    return state = updatedState;
                    // saveInLocal('authState',state);
                }else{
                    alert('wrong credentials');
                }
            }else{
                alert("user is not available signup first");
            }
        },
        signup:function(state, action){
            const {userId,password,role} = action.payload;
            let userState = {userId,password,roles:[role]};
            saveInLocal('signupState',userState);
            alert('userCreated');
        },
        logout: function(state, action){
            localStorage.removeItem('authState');
            return state = {
                ...state,
                user:{},
                isAuth:false,
                isCreated:false
            };
        }
    },
    extraReducers: {

    }
})













export const { login, signup, logout, loadAuthFromLocal } = authSlice.actions;
export default authSlice.reducer;