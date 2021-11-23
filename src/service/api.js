import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

function createConfig(userToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`,
        },
    };
    return config;
}

function signup(body) {
    return axios.post('/signup', body);
}

function signin(body) {
    return axios.post('/signin', body);
}

function newSubscription(body, token) {
    return axios.post('/new-subscription', body, createConfig(token));
}

const api = {
    signup,
    signin,
    newSubscription,
};

export default api;
