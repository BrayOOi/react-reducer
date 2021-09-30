import { createStore } from "redux";
import counterReducer from "./counter/reducer";

const { combineReducers } = require("redux");


const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);
