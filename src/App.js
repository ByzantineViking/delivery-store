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
    const { restaurants: r, setTags } = props
    useEffect( () => {
        let holder = []
        Object.keys(r.restaurants).reduce((acc, key) =>
            holder = holder.concat(r.restaurants[key].tags[0])
        )
        setTags([...new Set(holder)])
    }, [r.restaurants, setTags])
    return (
        <div className="container">
            <Order/>
            <Wishlist
                restaurants={r}
            />
            <div className="tile-lists-container">
                <TileList
                    id={1}
                    restaurants={r}
                />
                <TileList
                    id={2}
                    restaurants={r}
                />
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    setTags,
}
export default connect(null, mapDispatchToProps)(App)
