import axios from "axios";


let baseURL;
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000/';
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://124.223.37.254:3000/';
}

export function request(config) {
    const install = axios.create({
        baseURL,
        timeout: 20000
    })
    return install(config)
}