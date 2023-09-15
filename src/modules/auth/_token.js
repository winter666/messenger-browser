export const setToken = (token_type, access_token) => {
    localStorage.setItem('access_token', access_token);
    localStorage.setItem('token_type', token_type);
}

export const getFullToken = () => {
    return localStorage.getItem('token_type') + " " + localStorage.getItem('access_token');
}
