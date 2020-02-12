

const orderings = Object.freeze({
    RANDOM: 'random',
    ASCENDING: 'alphabetically-ascending',
    DESCENDING: 'alphabetically-descending',
})

const initialState = {
    drawerOrders: {
        drawer1: orderings.RANDOM,
        drawer2: orderings.RANDOM,
        drawer3: orderings.RANDOM,
    },
}

export const orderDrawers = ({ name, ordering }) => {
    return {
        type: 'ORDER_DRAWERS',
        data: {
            name,
            order: ordering
        }
    }
}
export const drawerOrderReducer = (state = initialState.drawerOrders, action) => {
    switch (action.type) {
        case 'ORDER_DRAWERS':
            return Object.assign({}, state, { [action.data.name]: orderings[action.data.order] })
        default:
            return state
    }
}