
const visibility = Object.freeze({
    FULL: {
        full: true,
        collapsed: false,
        hidden: false
    },
    COLLAPSED: {
        full: false,
        collapsed: true,
        hidden: false
    },
    HIDDEN: {
        full: false,
        collapsed: false,
        hidden: true
    }
})

const initialState = {
    open: {
        drawer1: visibility.FULL,
        drawer2: visibility.COLLAPSED,
        drawer3: visibility.HIDDEN,
        wishlist: visibility.HIDDEN,
        order: visibility.HIDDEN,
    },
}


// Functions to oust the decision of reducer out of other components
export const displayCollapsed = (drawer) => {
    return {
        type: 'COLLAPSE',
        data: {
            [drawer.id]: visibility.COLLAPSED
        }
    }
}
export const displayFull = (drawer) => {
    return {
        type: 'FULL',
        data: {
            [drawer.id]: visibility.FULL
        }
    }
}
export const displayNone = (drawer) => {
    return {
        type: 'HIDE',
        data: {
            [drawer.id]: visibility.HIDDEN
        }
    }
}
export const displayReducer = (state = initialState.open, action) => {
    const holder = Object.assign({}, state, action.data)
    switch (action.type) {
        case 'HIDE':
        case 'FULL':
        case 'COLLAPSE':
            return holder
        default:
            return state
    }
}


