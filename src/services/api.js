import axios from 'axios'

const apiDeliciousBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiDeliciousBurger
