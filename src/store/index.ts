import { createStore } from "redux";
import rootReducer from "./root-reducer";

const initialState = {};

// create store
const store = createStore(rootReducer, initialState);
export default store;
