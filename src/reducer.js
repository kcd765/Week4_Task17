import * as actions from './actionType';

const initState = {
    players: []
}

const reducer = (state = initState, action) => {

    switch (action.type) {
        case actions.ADD_DATA:
            return { ...state, players: [...state.players, action.payload] }
        case actions.REMOVE_DATA:
            return { ...state, players: state.players.filter((data => data.id != action.payload))}
        default:
            return state;
    }

}

export default reducer;