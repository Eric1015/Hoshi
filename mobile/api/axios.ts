import axios from 'axios';
import config from '../config';

const version = "v2/";
const url = config!.API_URL + "/" + version;

const axiosInstance = axios.create({
    baseURL: url,
    timeout: 15000,
    headers: {
        Authorization: '',
        'Content-Type': 'application/json'
      }
});

export default axiosInstance;