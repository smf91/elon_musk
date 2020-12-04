import { createStore, combineReducers } from 'redux'
// ------
import appReducer from './app-reducer'


let RootReducer = combineReducers({
    app: appReducer
})

type RootReducerType = typeof RootReducer
export type AppStateType = ReturnType <RootReducerType>

const store = createStore (RootReducer)

export default store