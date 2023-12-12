import { getAxiosReponseMessages } from '@/helpers/axios';
import axios from 'axios';
import { alertUser } from '.';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/', // Replace with your API base URL
});


// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        console.log(config.headers.Authorization)
        console.log('config.headers')
        // if(!config.headers.Authorization){
        //     config.headers.Authorization = 
        // }
        return config;

    },
    (error) => {
        console.log(error)
        console.log('error')
        // Handle request errors here

        return Promise.reject(error);
    }
);
// End of Request interceptor



// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        const messages = getAxiosReponseMessages(response)
        if (messages) alertUser(messages, 'success')

        return response?.data || response;
    },
    (error) => {
        // Handle response errors here
        const messages = getAxiosReponseMessages(error.response)
        if (messages) alertUser(messages, 'error')
        return Promise.reject(error);
    }
);
// End of Response interceptor

export { axiosInstance };

