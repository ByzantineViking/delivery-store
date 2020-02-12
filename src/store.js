import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
    displayReducer, orderReducer, wishReducer,
} from './reducers/visibilityReducers'


const collectiveReducer = combineReducers({
    open: displayReducer,
    wishlist: wishReducer,
    order: orderReducer,
})

// The store is defined here at the starting point
const store = createStore(collectiveReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
console.log('Initial state:')
console.log(store.getState())
export default store
