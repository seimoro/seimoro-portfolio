import { createSlice } from "@reduxjs/toolkit";

const saveLocalStorage = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
}


const userDataSlice = createSlice({
    name: 'saveData',
    initialState: {
        userData: JSON.parse(localStorage.getItem("user") ?? "null")
    },
    reducers: {

        saveUserData(state, action){
            state.userData = action.payload
            saveLocalStorage(state.userData)
        },
        logOut(state){
            state.userData = null
            saveLocalStorage(state.userData)
        }
    }
})

export const {saveUserData, logOut} = userDataSlice.actions

export default userDataSlice.reducer