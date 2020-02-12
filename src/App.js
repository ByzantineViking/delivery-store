import React, { useState, useEffect } from 'react'
import './base.css'
import './App.css'

import TileList from './components/TileList/TileList'
// Note: Wishlist not WishList
import Wishlist from './components/Wishlist/Wishlist'
import Order    from './components/Order/Order'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const App = (props) => {
    const [filter1, setFilter1] = useState('')
    const [filter2, setFilter2] = useState('')
    const [tags, setTags] = useState([])

    useEffect( () => {
        let holder = []
        Object.keys(props.restaurants.restaurants).reduce((acc, key) =>
            holder = holder.concat(props.restaurants.restaurants[key].tags[0])
        )
        setTags([...new Set(holder)])
    }, [props.restaurants.restaurants])
    return (
        <div className="container">
            <Order
                order={order}>
            </Order>
            <Wishlist
                restaurants={props.restaurants}
                wishlistContent={wishlistContent}
                setWish={setWish}
                order={order}
                setOrder={setOrder}
            />
            <div className="tile-list-container">
                <TileList
                    id={1}


                    restaurants={props.restaurants}

                    filter={filter1}
                    setFilter={setFilter1}
                    alphabetical={list1Alphabetical}
                    setAlphabetical={() => set1Alphabetical(!list1Alphabetical)}

                    tags={tags}

                    wishlistContent={wishlistContent}
                    setWish={setWish}

                    order={order}
                    setOrder={setOrder}
                />
                <TileList
                    id={2}


                    restaurants={props.restaurants}

                    filter={filter2}
                    setFilter={setFilter2}
                    alphabetical={list2Alphabetical}
                    setAlphabetical={() => set2Alphabetical(!list2Alphabetical)}

                    tags={tags}

                    wishlistContent={wishlistContent}
                    setWish={setWish}

                    order={order}
                    setOrder={setOrder}
                />
            </div>
        </div>
    )
}

export default App
