import api from './index'

export const sendOrder = async (order) => {
  const { data } = await api.post('/order', order, {
    headers: { Authorization: localStorage.token },
  })
  return data
}