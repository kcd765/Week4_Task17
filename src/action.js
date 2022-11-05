import * as actions from './actionType';

export const onAdd = (data) => {
    return {
        type: actions.ADD_DATA,
        payload: data
    }
}

export const onRemove = (id) => {
    return {
        type: actions.REMOVE_DATA,
        payload: id
    }
}