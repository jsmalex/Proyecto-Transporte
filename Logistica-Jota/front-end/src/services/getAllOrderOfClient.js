import api from './index'

export const getAllOrderOfClient = async () => {
  const token = localStorage.getItem('token')
  const { data } = await api.get('/order/allOrderClient/', {
    headers: { Authorization: token },
  })
  return data
}
