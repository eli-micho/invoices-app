import filterTypes
 from "./filtersTypes";
const INITIAL_STATE = {
    status: 'All'
};

const filterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case filterTypes.FILTER_CHANGED:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        default:
            return state
    }
}

export default filterReducer;