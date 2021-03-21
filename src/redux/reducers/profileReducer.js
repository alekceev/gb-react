import {PROFILE_NAME, SUCCESS_PROFILE_LOADING} from '../actions/profileActions';

const initialState = {};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_NAME: {
            return {
                ...state,
                name: action.payload.name
            }
        }

        case SUCCESS_PROFILE_LOADING: {
            // console.log('PROFILE LOADING:', action.payload);
            return action.payload;
        }

        default:
            return state;
    }
};