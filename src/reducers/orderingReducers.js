

const orderings = Object.freeze({
    RANDOM: 'random',
    ASCENDING: 'alphabetical-ascending',
    DESCENDING: 'alphabetical-descending',
})

const initialState = {
    ordering: {
        drawer1: orderings.RANDOM,
        drawer2: orderings.RANDOM,
        drawer3: orderings.RANDOM,
    },
}