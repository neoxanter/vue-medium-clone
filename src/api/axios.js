import axios from 'axios'

axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use(config => {
    return config
})

export default axios
