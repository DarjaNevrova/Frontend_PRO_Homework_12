const initialState = [];

export const REMOVE = '[CARDS] REMOVE';
export const ADD = '[CARDS] ADD';

export const addAction = (payload) => ({ type: ADD, payload });
export const removeAction = (payload) => ({ type: REMOVE, payload });

export const addedCardsReducer = (state = initialState, action) => {
    if (action.type === ADD) {
        return [...state, { id: Date.now(), ...action.payload }]
    } else if (action.type === REMOVE) {
        return state.filter(({ dayId }) => dayId !== action.payload);
    }
    return state
}

export default addedCardsReducer;