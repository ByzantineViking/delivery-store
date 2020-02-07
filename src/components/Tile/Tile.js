import React from 'react'
import './Tile.css'
import '../Button/Button.js'
const Tile = (props) => {
    return (
        <div className='tile'>
            <img className='tile-image' />
            <h2>Bobs burgers</h2>
            <div className='tile-body'>
                The best burgers in town
            </div>
            <Button
                className='info-button'
                text='Hmm?'
            />
            <Button
                className='wishlist-button'
            />
        </div>
    )
}


export default Tile