import api from './index'

export const getAllOrdersOfAllClients = async () => {
  const token = localStorage.getItem('token')
  const { data } = await api.get('/order', {
    headers: { Authorization: token },
  })
  return data
}
