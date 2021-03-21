import { RSAA, getJSON } from 'redux-api-middleware';
export const START_PROFILE_NAME = '@@profile/START_PROFILE_NAME';
export const PROFILE_NAME       = '@@profile/PROFILE_NAME';
export const ERROR_PROFILE_NAME = '@@profile/ERROR_PROFILE_NAME';

export const START_PROFILE_LOADING = '@@profile/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@profile/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@profile/ERROR_PROFILE_LOADING';

export const setName = (name) => ({
    [RSAA]: {
        endpoint: "http://localhost:3000/profile",
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
        }),
        types: [
            START_PROFILE_NAME,
            {
                type: PROFILE_NAME,
                payload: (action, state, res) => getJSON(res).then(data => data),
            },
            ERROR_PROFILE_NAME,
        ]
    }
});

export const loadProfile = () => ({
    [RSAA]: {
        endpoint: "http://localhost:3000/profile",
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        types: [
            START_PROFILE_LOADING,
            {
                type: SUCCESS_PROFILE_LOADING,
                payload: (action, state, res) => getJSON(res).then(data => data),
            },
            ERROR_PROFILE_LOADING,
        ]
    }
});