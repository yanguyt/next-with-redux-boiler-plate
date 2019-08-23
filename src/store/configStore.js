import { createStore, combineReducers } from "redux"


//reducers
import testeReducer from "./reducers/testeReducer"


let combineStore = combineReducers({
    teste: testeReducer
})

const makeStore = (initialState) => {
    return createStore(combineStore, initialState)
}



export { makeStore }