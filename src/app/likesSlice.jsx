import { createSlice } from "@reduxjs/toolkit";

const saveLocalStorage = (likes) => {
    localStorage.setItem('likes', JSON.stringify(likes))
}

const likesSLice = createSlice(
    {
    
    name: 'likes',
    initialState: {
        likes: JSON.parse(localStorage.getItem("likes") ?? '{}') 
    },
    reducers: {
        toggleLike(state, action){
            if(!state.likes[action.payload]){
                state.likes[action.payload] = true
            }
            
            else{
                delete state.likes[action.payload] 
            }
            saveLocalStorage(state.likes)
        }
    }

})

export const{toggleLike} = likesSLice.actions
export default likesSLice.reducer