import api from './index'

export const getClientInformation = async () => {
    const  {data}  = await api.get('/user/profile', {headers :  {Authorization : localStorage.token}})
    return data
}