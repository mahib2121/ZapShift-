import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
});

const useAxiosSecure = () => axiosSecure;

export default useAxiosSecure;
