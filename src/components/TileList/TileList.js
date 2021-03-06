import React from 'react'
import { connect } from 'react-redux'
import Tile from '../Tile/Tile'
import './TileList.css'
import EmojiButton from '../EmojiButton/EmojiButton'
import uuidv1 from 'uuid/v1'

import { orderDrawers } from '../../reducers/orderingReducer'
import { setFilter } from '../../reducers/filterReducer'
import { displayCollapsed, displayFull, displayNone } from '../../reducers/visibilityReducer'
/**
 * Column of tiles
 * @param {json}          restaurants         - Data about the restaurants.
 * @param {number}        id                  - Column number
 */
const TileList = (props) => {
    const currentDrawer = `drawer${props.id}`
    const handleChange = (event) => {
        props.setFilter({ id: props.id, filter: event.target.value })
    }
    const setSorting = () => {
        const command = props.drawerOrders[currentDrawer]
        if (command === 'alphabetically-ascending') {
            return 'DESCENDING'
        } else if (command === 'alphabetically-descending') {
            return 'ASCENDING'
        } else if (command === 'random') {
            return 'DESCENDING'
        }
    }
    const sortDrawer = (a, b) => {
        const sorting = props.drawerOrders[currentDrawer]
        if (sorting === 'alphabetically-ascending') {
            return (a[1].name < b[1].name) ? 1 : -1
        } else if (sorting === 'alphabetically-descending') {
            return (a[1].name > b[1].name) ? 1 : -1
        } else {
            // TODO: Random
            return 1
        }
    }
    const openDrawer = () => {
        props.displayFull({ id: currentDrawer })
        if(props.id === 1) {
            props.displayCollapsed({ id: 'drawer2' })
        } else if (props.id === 2) {
            props.displayCollapsed({ id: 'drawer3' })
        }
    }
    const collapseDrawer = () => {
        props.displayCollapsed({ id: currentDrawer })
        if (props.id === 2) {
            props.displayNone({ id: 'drawer3' })
        } else if (props.id === 1) {
            props.displayNone({ id: 'drawer2' })
        }
    }
    return(
        <div className='tile-list-container' id={currentDrawer}>
            {props.open[currentDrawer].collapsed &&
                <div style={{ height: 'fit-content', width: 'fit-content' }}>
                    <div className='spacer'/>
                    <div className='add-button-container'>
                        <EmojiButton
                            className='add-button'
                            body='➕'
                            alt='close-column'
                            buttonAction={() => openDrawer()}
                        />
                    </div>
                </div>}


            {props.open[currentDrawer].full && <div className='tile-column'>
                <div className='title-bar'>
                    <h2>{props.id}</h2>
                    <div className='function-container'>
                        <EmojiButton
                            className='sort-button'
                            body='↕️'
                            alt='sort'
                            buttonAction={() => props.orderDrawers({ name: currentDrawer, ordering: setSorting() })}
                        />
                        <EmojiButton
                            className='x-button'
                            body='❌'
                            alt='close-column'
                            buttonAction={() => collapseDrawer()}
                        />
                    </div>
                </div>
                <div className='control-bar'>
                    <form>
                        <input list='tags' className='filter' placeholder='filter' type='text' value={props.filter[currentDrawer]} onChange={handleChange} />
                        <datalist id='tags' className='datalist'>
                            {props.tags.map(t =>
                                t ? <option key={uuidv1()} value={t} /> : <div key={uuidv1()} />
                            )}
                        </datalist>
                    </form>

                </div>
                {Object.entries(props.restaurants.restaurants)
                    .filter((restaurant) =>
                        // Filter empty
                        !props.filter[currentDrawer]
                        // Name contains filter
                        || restaurant[1].name.toLowerCase().includes(props.filter[currentDrawer].toLowerCase())
                        // Tags contain filter
                        || (restaurant[1].tags.length > 0 ? restaurant[1].tags.find(t => t.toLowerCase().includes(props.filter[currentDrawer].toLowerCase())) : false))
                    // Alphabetical order
                    .sort((a, b) => sortDrawer(a,b))
                    .map(([key, val]) =>
                        <Tile
                            currentDrawer={currentDrawer}
                            key={uuidv1()}
                            restaurant={val}
                        />
                    )}
            </div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        open: state.open,
        filter: state.filter,
        tags: state.tags,
        drawerOrders: state.drawerOrders,
        window: state.window,
    }
}
const mapDispatchToProps = {
    setFilter,
    orderDrawers,
    displayFull,
    displayCollapsed,
    displayNone
}
export default connect(mapStateToProps, mapDispatchToProps)(TileList)