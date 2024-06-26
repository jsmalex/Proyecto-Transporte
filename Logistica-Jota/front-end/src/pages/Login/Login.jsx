import "./Login.css"
import FormLogin from "../../components/FormLogin/FormLogin"

const Login = () => {


  return (
    <>
      <div className="background-login">
        <img
          className="orange"
          src="/src/assets/img/Rectangle 2065.png"
          alt="Cover"
        ></img>

        <img
          className="truck"
          src="/src/assets/img/background.jpg"
          alt="Imagen de fondo"
        ></img>
      </div>

      <FormLogin />
    </>
  )
}

export default Login
