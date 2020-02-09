import React from 'react'
import Tile from '../Tile/Tile'
import './TileList.css'
import EmojiButton from '../EmojiButton/EmojiButton'


const TileList = (props) => {
    const handleChange = (event) => {
        props.setFilter(event.target.value)
    }
    return(
        !props.visibility ?
            <div className='add-button-container'>
                <EmojiButton
                    className='add-button'
                    body='➕'
                    alt='close-column'
                    buttonAction={() => props.setList2Visibility(true)}
                />
            </div>
            :
            <div className='tile-column'>
                <div className='control-bar'>
                    <input className='filter' placeholder='filter' type="text" value={props.filter} onChange={handleChange}/>
                    {props.id === 1         ?
                        <React.Fragment/>   :
                        <EmojiButton
                            className='x-button'
                            body='❌'
                            alt='close-column'
                            buttonAction={() => props.setList2Visibility(false)}
                        />}
                </div>
                {Object.entries(props.restaurants.restaurants).filter( (restaurant) =>
                    !props.filter || restaurant[1].name.includes(props.filter) || props.filter.includes(restaurant[1].tags[0]) || props.filter.includes(restaurant[1].tags[1])
                ).map(([key, val]) =>
                    <Tile
                        key={key}
                        restaurant={val}
                        setWish={props.setWish}
                    />
                )}
            </div>
    )
}


export default TileList