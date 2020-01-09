import axios from 'axios'

const setup = () => {
  axios.interceptors.response.use(
    response => response,
    error => {
      // GlobalHandleError に処理を移乗
      throw new Error(error)
    }
  )
}

export default { setup }
