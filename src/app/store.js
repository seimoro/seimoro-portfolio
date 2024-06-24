import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import likesReducer from "./likesSlice";

export default configureStore({
    reducer: {
        userData: userDataReducer,
        likes: likesReducer
    }
})