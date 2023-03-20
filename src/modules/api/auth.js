import request from "./request";

export const login = ({email, password}) => {
    return request.post({
        entity: '',
        uri: 'auth/login',
        data: {email, password},
    });
}

export const register = ({name, email, password, password_confirmation}) => {
    return request.post({
        entity: '',
        uri: 'auth/registration',
        data: {name, email, password, password_confirmation},
    });
}

export const logout = () => {
    return request.post({
        entity: '',
        uri: 'auth/logout',
        data: {},
        authorization: true,
    });
}

export const me = () => {
    return request.post({
        entity: '',
        uri: 'auth/me',
        data: {},
        authorization: true,
    });
}
