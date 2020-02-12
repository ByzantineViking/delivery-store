import React, { useEffect } from 'react'
import './base.css'
import './App.css'
import { connect } from 'react-redux'
import { setTags } from './reducers/tagReducer'
import TileList from './components/TileList/TileList'
// Note: Wishlist not WishList
import Wishlist from './components/Wishlist/Wishlist'
import Order    from './components/Order/Order'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const App = (props) => {
    useEffect( () => {
        let holder = []
        Object.keys(props.restaurants.restaurants).reduce((acc, key) =>
            holder = holder.concat(props.restaurants.restaurants[key].tags[0])
        )
        props.setTags([...new Set(holder)])
    }, [props.restaurants.restaurants])
    return (
        <div className="container">
            <Order/>
            <Wishlist
                restaurants={props.restaurants}
            />
            <div className="tile-lists-container">
                <TileList
                    id={1}
                    restaurants={props.restaurants}
                />
                <TileList
                    id={2}
                    restaurants={props.restaurants}
                />
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    setTags,
}
export default connect(null, mapDispatchToProps)(App)
