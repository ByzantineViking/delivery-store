const initialState = {
    window: {
        height: null,
        width: null,
    }
}


export const calcWindow = (window) => {
    return {
        type: 'WINDOW',
        data: window
    }
}
export const windowReducer = (state = initialState.window, action) => {
    switch (action.type) {
        case 'WINDOW':
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}