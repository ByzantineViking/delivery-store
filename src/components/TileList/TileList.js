import React from 'react'
import Tile from '../Tile/Tile'
import './TileList.css'
import EmojiButton from '../EmojiButton/EmojiButton'
import uuidv1 from 'uuid/v1'
/**
 * Column of tiles
 * @param {json}          restaurants         - Data about the restaurants.
 * @param {number}        id                  - Column number
 * @param {boolean}       visibility          - Is this column visible?
 * @param {function}      setList1Visibility  - State hook setting the first column visibility
 * @param {function}      setList2Visibility  - State hook setting the second column visibility
 * @param {string}        filter              - Filter the column by tags or restaurant name
 * @param {function}      setFilter           - State hook setting the filter
 * @param {boolean}       alphabetical        - Is the column sorted alphabetically or reverse
 * @param {array[string]} tags                - An array of unique tags
 */
const TileList = (props) => {
    const handleChange = (event) => {
        props.setFilter(event.target.value)
    }
    return(
        props.wishlistExpanded ? <div/> :
        !props.visibility && props.id !== 1 ?
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
                <div className='title-bar'>
                    <h2>{props.id}</h2>
                    <div className='function-container'>
                        <EmojiButton
                            className='sort-button'
                            body='↕️'
                            alt='sort'
                            buttonAction={props.setAlphabetical}
                        />
                        {/* 'Delete column' button. The first column cannot be deleted */
                            props.id === 1          ?
                                <React.Fragment/>   :
                                <EmojiButton
                                    className='x-button'
                                    body='❌'
                                    alt='close-column'
                                    buttonAction={() => props.setList2Visibility(false)}
                                />}
                    </div>

                </div>
                <div className='control-bar'>
                    <form>
                        <input list='tags' className='filter' placeholder='filter' type='text' value={props.filter} onChange={handleChange}/>
                        <datalist id='tags' className='datalist'>
                            {props.tags.map(t =>
                                t ? <option key={uuidv1()} value={t}/> : <div key={uuidv1()}/>
                            )}
                        </datalist>
                    </form>

                </div>
                {Object.entries(props.restaurants.restaurants)
                    .filter( (restaurant) =>
                        // Filter empty
                        !props.filter
                        // Name contains filter
                        || restaurant[1].name.toLowerCase().includes(props.filter.toLowerCase())
                        // Tags contain filter
                        || (restaurant[1].tags.length > 0 ? restaurant[1].tags.find(t => t.toLowerCase().includes(props.filter.toLowerCase())) : false ))
                    // Alphabetical order
                    .sort((a,b) => props.alphabetical ? ((a[1].name > b[1].name) ? 1 : -1) : ((a[1].name < b[1].name) ? 1 : -1))
                    .map(([key, val]) =>
                        <Tile
                            key={uuidv1()}
                            restaurant={val}
                            wishlistContent={props.wishlistContent}
                            setWish={props.setWish}
                            setList1Visibility={props.setList1Visibility}
                            setList2Visibility={props.setList2Visibility}
                            setWishlistExpansion={props.setWishlistExpansion}
                        />
                    )}
            </div>
    )
}


export default TileList