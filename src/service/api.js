import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

// function createConfig(userToken) {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${userToken}`,
//         },
//     };
//     return config;
// }

function signup(body) {
    return axios.post('/signup', body);
}

const api = {
    signup,
};

export default api;
