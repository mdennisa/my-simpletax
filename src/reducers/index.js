import { combineReducers } from "redux"
import taxReducer from './taxReducer'

export default combineReducers({
    tax: taxReducer
})