import api from './index'
import { getClientInformation } from './clientInformation';//desde el servicio donde estamos vamos a usar otro servicio para obtener la ID

export const updateDataClient = async (dataUpdate) => {
    const {id} = await getClientInformation()
    const  {data}  = await api.put(`/user/${id}`, dataUpdate, {headers :  {Authorization : localStorage.token}})
    return data
}