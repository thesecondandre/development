import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-39a35.firebaseio.com/'
});

export default instance;