

const initialState = {
    filter: {
        drawer1: '',
        drawer2: '',
        drawer3: '',
    }
}


export const setFilter = ({ drawer, filter }) => {
    return {
        type: 'FILTER',
        data: {
            name: drawer,
            content: filter
        }
    }
}
export const filterReducer = (state = initialState.filter, action) => {
    switch (action.type) {
        case 'FILTER':
            return state.filter[action.data.name] = action.data.content
        default:
            return state
    }
}