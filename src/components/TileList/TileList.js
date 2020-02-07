import React from 'react'
import Tile from '../Tile/Tile'
import './TileList.css'

const TileList = (props) => {
    return(
        <div className='tile-column'>
            {Object.entries(props.restaurants.restaurants).map(([key, val]) =>
                <Tile key={key} restaurant={val}></Tile>
            )}
        </div>
    )
}


export default TileList