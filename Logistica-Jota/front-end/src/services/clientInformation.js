import api from './index'

export const getClientInformation = async () => {
    console.log("hola1");
    const  {data}  = await api.get('/user/profile', {headers :  {Authorization : localStorage.token}})
    console.log(data);
    return data
}