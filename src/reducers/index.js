import {combineReducers} from "redux";
import userReducer from "./users.reducers"
import postReducer from "./posts.reducers"

export default combineReducers({
    userReducer,
    postReducer,
});