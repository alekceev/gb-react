import {PROFILE_NAME} from '../actions/profileActions';

const initialState = {};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }
        default:
            return state;
    }
};