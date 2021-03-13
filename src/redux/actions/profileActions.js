export const PROFILE_NAME = '@@profile/PROFILE_NAME';

export const setName = (name) => ({
    type: PROFILE_NAME,
    payload: {
        name,
    },
});