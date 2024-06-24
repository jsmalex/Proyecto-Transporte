import api from './index'

export const createFactory = async (dataFactory) => {
    const  {data} = await api.post('/factory', dataFactory, {headers :  {Authorization : localStorage.token}})
    return data
  }