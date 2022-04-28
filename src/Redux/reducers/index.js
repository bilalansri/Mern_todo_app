import userReducer from "./UserReducer";
import listReducer from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    userReducer,
    listReducer
})

export default rootReducer