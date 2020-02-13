

const initialState = {
    filter: {
        drawer1: '',
        drawer2: '',
        drawer3: '',
    }
}


export const setFilter = ({ id, filter }) => {
    return {
        type: 'FILTER',
        data: {
            [`drawer${id}`]: filter,
        }
    }
}
export const filterReducer = (state = initialState.filter, action) => {
    switch (action.type) {
        case 'FILTER':
            return Object.assign({}, state, action.data)
        default:
            return state
    }
}