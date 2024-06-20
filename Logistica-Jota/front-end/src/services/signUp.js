import api from "./index";
 
const signUp = async (dataSignUp) => {
    const { data } = await api.post('/auth/signup', dataSignUp)
    return data;
} 

export default signUp