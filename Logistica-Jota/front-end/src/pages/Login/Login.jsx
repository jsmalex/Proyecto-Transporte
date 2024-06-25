import "./Login.css"
import FormLogin from "../../components/FormLogin/FormLogin"

const Login = () => {


  return (
    <> 
    <div className="background">
        <img
          className="truck"
          src="/src/assets/img/background.jpg"
          alt="Imagen de fondo"
        ></img>
        <img
          className="orange"
          src="../../assets/img/Rectangle 2065.png"
          alt="Cover"
        ></img>
      </div>

      <FormLogin />
    
    </>
  )
}

export default Login
