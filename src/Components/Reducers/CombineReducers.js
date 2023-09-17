import {combineReducers} from "redux";
import HomeReducer from "./Home/HomeReducer";

const rootReducers = combineReducers({
    homeReducer : HomeReducer
});

export default rootReducers;