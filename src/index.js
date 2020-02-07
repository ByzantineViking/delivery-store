import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import restaurantData from './resources/restaurants.json'


ReactDOM.render(<App restaurants={restaurantData}/>, document.getElementById('root'))

