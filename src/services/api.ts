import axios from 'axios'
import { API_KEY, BASE_URL } from '../config/constants'

const api = axios.create({
    baseURL: `${BASE_URL}${API_KEY}`
})


export default api