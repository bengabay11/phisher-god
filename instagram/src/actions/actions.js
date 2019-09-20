import {UPDATE_PASSWORD, UPDATE_USERNAME} from "./action-types";

export const updateUsername = username => {
    return {
        type: UPDATE_USERNAME,
        username,
    };
};

export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        password,
    };
};
