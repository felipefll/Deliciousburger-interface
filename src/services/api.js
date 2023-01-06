import axios from 'axios'

const apiDeliciousBurger = axios.create({
  baseURL: 'http://localhost:3000'
})

apiDeliciousBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('deliciousburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiDeliciousBurger
