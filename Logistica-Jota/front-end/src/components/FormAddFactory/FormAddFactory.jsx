import { useState } from "react"
import "./FormAddFactory.css"
import toast, { Toaster } from 'react-hot-toast'
import { createFactory } from "../../services/createFactory";
import { useNavigate } from "react-router-dom";


const FormAddFactory = () => {
  const [name, setName]=useState("");
  const [CIF, setCIF]=useState("");
  const [address, setAddress]=useState("");
  const [email, setEmail]=useState("");
  const [phone, setPhone]=useState("");
  const navigate = useNavigate();
  const handleFormAddFactory = async () =>{
    console.log("maria un pajote");
    if (
      name.length === 0 ||
      CIF.length === 0 ||
      address.length === 0 ||
      email.length === 0 ||
      phone.length === 0
    ) {
      console.log("pepe");
      return toast.error('Introduce todos los campos del formulario')
    }

    try {
      const data = {
        name: name,
        CIF: CIF,
        address: address,
        email: email,
        phone: phone,
      }
      await createFactory(data)

      navigate('/CreateFactoryOK')
    } catch (error) {
      toast.error('Rellene todos los campos adecuadamente, por favor')
    }
  }
  return (
    
    <div>
        <Toaster/>
        <h2>Añadir fabrica</h2>
        <form action="">

          <div>
            <label>Nombre:</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" />
          </div>

          <div>
            <label>CIF:</label>
            <input onChange={(e)=>setCIF(e.target.value)} type="text" />
          </div>
          
          <div>
            <label>Direccion:</label>
            <input onChange={(e)=>setAddress(e.target.value)} type="text" />
          </div>

          <div>
            <label>Email:</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="email"/>
          </div>

          <div>
            <label>Telefono:</label>
            <input onChange={(e)=>setPhone(e.target.value)} type="text"/>
          </div>

          <button onClick={(e) => {
            e.preventDefault()
            handleFormAddFactory()}}>Añadir</button>

        </form>
        
    </div>
  )
}

export default FormAddFactory