import api from './index'
import { getClientInformation } from './clientInformation';//desde el servicio donde estamos vamos a usar otro servicio para obtener la ID

export const deleteClient = async () => {
    const {id} = await getClientInformation()
    const  {data}  = await api.delete(`/user/${id}`, {headers :  {Authorization : localStorage.token}})
    return data
}