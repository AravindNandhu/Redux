import { combineReducers,createStore } from "redux";
import Cartreducer from "./Cartreducer";

const store = createStore(Cartreducer)

export default store