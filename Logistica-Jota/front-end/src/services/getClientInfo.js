import api from './index'

export const getClientInfo = async (id) => {
  const token = localStorage.getItem('token')
  const { data } = await api.get(`/user/${id}`, {
    headers: { Authorization: token },
  })
  return data
}
