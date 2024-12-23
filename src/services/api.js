import axios from 'axios'

export const api = axios.create({
   baseURL: 'http://lonpmcalhost:3334'
})
