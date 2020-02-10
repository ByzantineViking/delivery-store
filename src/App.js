import React, { useState, useEffect } from 'react'
import './base.css'
import './App.css'

import TileList from './components/TileList/TileList'
import Wishlist from './components/Wishlist/Wishlist'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const App = (props) => {
    const [list1Visibility, setList1Visibility] = useState(true)
    const [list2Visibility, setList2Visibility] = useState(true)
    const [filter1, setFilter1] = useState('')
    const [filter2, setFilter2] = useState('')
    const [wishlistExpanded, setWishlistExpansion] = useState(false)
    const [wishlistContent, setWish] = useState(['chinese'])
    const [alphabetical, setAlphabetical] = useState(true)
    const [tags, setTags] = useState([])

    useEffect( () => {
        let holder = []
        Object.keys(props.restaurants.restaurants).reduce((acc, key) =>
            holder = holder.concat(props.restaurants.restaurants[key].tags[0])
        )
        setTags([...new Set(holder)])
    }, [])
    return (
        <div className="container">
            <Wishlist
                setList1Visibility={setList1Visibility}
                setList2Visibility={setList2Visibility}
                wishlistExpanded={wishlistExpanded}
                wishlistContent={wishlistContent}
                setWishlistExpansion={setWishlistExpansion}
            />
            <div className="tile-list-container">
                <TileList
                    id={1}

                    visibility={list1Visibility}
                    setList1Visibility={setList1Visibility}
                    setList2Visibility={setList2Visibility}

                    restaurants={props.restaurants}

                    filter={filter1}
                    setFilter={setFilter1}

                    alphabetical={alphabetical}
                    setAlphabetical={setAlphabetical}

                    tags={tags}

                    wishlistContent={wishlistContent}
                    setWish={setWish}
                    wishlistExpanded={wishlistExpanded}
                    setWishlistExpansion={setWishlistExpansion}
                />
                <TileList
                    id={2}

                    visibility={list2Visibility}
                    setList1Visibility={setList1Visibility}
                    setList2Visibility={setList2Visibility}

                    restaurants={props.restaurants}

                    filter={filter2}
                    setFilter={setFilter2}
                    alphabetical={alphabetical}
                    setAlphabetical={setAlphabetical}

                    tags={tags}

                    wishlistContent={wishlistContent}
                    setWish={setWish}
                    wishlistExpanded={wishlistExpanded}
                    setWishlistExpansion={setWishlistExpansion}
                />
            </div>
        </div>
    )
}

export default App
