import axios from "axios";


let baseURL = 'http://localhost:3000/'

export function request(config) {
    const install = axios.create({
        baseURL,
        timeout: 2000
    })
    return install(config)
}