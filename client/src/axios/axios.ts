import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: process.env.BASE_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};