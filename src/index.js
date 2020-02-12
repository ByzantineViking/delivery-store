import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import restaurantData from './resources/restaurants.json'


ReactDOM.render(
    // The <Provider/> supplies the entire component tree with the global state tree
    <Provider store={store}>
        <App restaurants={restaurantData}/>
    </Provider>
    , document.getElementById('root')
)