import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";

const rootReducer= combineReducers({
  counter: counterReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store