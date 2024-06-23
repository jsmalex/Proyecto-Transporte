import api from './index'

export const getClientInformation = async () => {
    const token = localStorage.getItem("token")
    const  {data}  = await api.get('/user/profile', {headers :  {Authorization : token}})
    return data
}