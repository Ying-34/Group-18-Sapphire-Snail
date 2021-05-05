import axios from 'axios'

const BASE_URL = 'https://localhost:8000'

// 不传type默认是get请求
export default function request(url, params, type = 'GET') {
  if (type === 'GET' || type === 'DELETE') {
    return axios({ url: BASE_URL + url, method: type, params })
  }
  if (type === 'POST' || type === 'PUT') {
    return axios({ url: BASE_URL + url, method: type, data: params })
  }
}
