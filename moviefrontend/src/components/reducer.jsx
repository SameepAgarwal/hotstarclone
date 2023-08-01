export const initialState = null;
export const reducer = (state, action) => {
    if (action.type === 'WATCHNOW') {
        return action.payload;
    }
    return state;
};
