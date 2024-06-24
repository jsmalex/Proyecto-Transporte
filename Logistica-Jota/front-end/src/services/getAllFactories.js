import api from './index'

export const getAllFactories = async () => {
    const  {data}  = await api.get('/factory', {headers :  {Authorization : localStorage.token}})
    return data
}