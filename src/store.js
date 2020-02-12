import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { displayReducer } from './reducers/visibilityReducer'
import { orderFoodReducer, wishReducer } from './reducers/choiceReducers'
import { drawerOrderReducer } from './reducers/orderingReducer'
import { filterReducer } from './reducers/filterReducer'
import { tagReducer } from './reducers/tagReducer'

const collectiveReducer = combineReducers({
    open: displayReducer,
    wishlist: wishReducer,
    foodOrder: orderFoodReducer,
    drawerOrders: drawerOrderReducer,
    filter: filterReducer,
    tags: tagReducer,
})

// The store is defined here at the starting point
const store = createStore(collectiveReducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
console.log('Initial state:')
console.log(store.getState())
export default store
