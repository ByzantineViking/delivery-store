import React, { useState } from 'react'
import './base.css'
import './App.css'

import TileList from './components/TileList/TileList'
import WishList from './components/WishList/WishList'
/**
 * App components performs data handling
 * @param {json} restaurants - Data about the restaurants.
 */
const App = (props) => {
    const [list1Visibility, setList1Visibility] = useState(true)
    const [list2Visibility, setList2Visibility] = useState(true)
    const [wishlistExpanded, setWishListExpansion] = useState(false)
    const [wishlistContent, setWish] = useState('chinese')
    const [filter1, setFilter1] = useState('')
    const [filter2, setFilter2] = useState('')
    return (
        <div className='container'>
            <TileList
                id={1}
                visibility={list1Visibility}
                setList1Visibility={setList1Visibility}
                setList2Visibility={setList2Visibility}
                restaurants={props.restaurants}
                wishlistExpanded={wishlistExpanded}
                setWish={setWish}
                setWishListExpansion={setWishListExpansion}
                filter={filter1}
                setFilter={setFilter1}
            />
            <TileList
                id={2}
                visibility={list2Visibility}
                setList1Visibility={setList1Visibility}
                setList2Visibility={setList2Visibility}
                restaurants={props.restaurants}
                wishlistExpanded={wishlistExpanded}
                setWish={setWish}
                setWishListExpansion={setWishListExpansion}
                filter={filter2}
                setFilter={setFilter2}
            />
            <WishList
                setList1Visibility={setList1Visibility}
                setList2Visibility={setList2Visibility}
                wishlistExpanded={wishlistExpanded}
                wishlistContent={wishlistContent}
            />
        </div>
    )
}

export default App
