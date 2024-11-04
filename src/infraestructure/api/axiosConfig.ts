import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://tu-api.com', // agregarlo en el env
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default apiClient
