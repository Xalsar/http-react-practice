import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

axios.defaults.headers.common['Authoritzation'] = 'AUTH TOKEN FROM INSTANCE'

export default instance
