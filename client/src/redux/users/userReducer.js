import userTypes from './userTypes';

const INITIAL_STATE = {
    currentUser: null,
    userError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userTypes.EMAIL_SIGNUP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userError: []
            }
        case "users/login":
            return {
                ...state,
                currentUser: action.payload,
                userError: []
            }
        default:
            return state
    }
};

export default userReducer;
