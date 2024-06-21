import { useEffect } from "react"
import "./HomeClient.css"
import toast, { Toaster } from 'react-hot-toast'
import ClientProfile from "../../components/ClientProfile/ClientProfile"

const HomeClient = () => {
    useEffect(() => {
  toast.success("Inicio de sesión correcto")})
  return (
    <>
        <Toaster/>
        <h1>Esta es su informacion de cliente</h1>
        <ClientProfile/>
      
    </>
  )
}

export default HomeClient