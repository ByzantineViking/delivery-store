import React from 'react'
import PropTypes from 'prop-types'
import './base.css'
import './App.css'

import TileList from './components/TileList/TileList'

/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const App = (props) => {
    return (
        <div className='container'>
            <TileList restaurants={props.restaurants}/>
        </div>
    )
}
App.propTypes = {
    restaurants: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.number),
        delivery_price: PropTypes.number,

    }),
}

export default App
