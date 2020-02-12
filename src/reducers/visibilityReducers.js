

const initialState = {
    open: {
        drawer1: {
            full: true,
            collapsed: false,
            hidden: false,
        },
        drawer2: {
            full: false,
            collapsed: true,
            hidden: false,
        },
        drawer3: {
            full: false,
            collapsed: true,
            hidden: false,
        },
        wishlist: {
            full: false,
            collapsed: false,
            hidden: true,
        },
        order: {
            full: false,
            collapsed: false,
            hidden: true,
        },
    },
    wishlistContent: [],
    order: {},
}


// Functions to oust the decision of reducer out of other components
export const displayCollapsed = (drawer) => {
    return {
        type: 'COLLAPSE',
        data: {
            [drawer.id]: {
                full: false,
                collapsed: true,
                hidden: false,
            }
        }
    }
}
export const displayFull = (drawer) => {
    return {
        type: 'FULL',
        data: {
            [drawer.id]: {
                full: true,
                collapsed: false,
                hidden: false,
            }
        }
    }
}
export const displayNone = (drawer) => {
    return {
        type: 'HIDE',
        data: {
            [drawer.id]: {
                full: false,
                collapsed: false,
                hidden: true,
            }
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


