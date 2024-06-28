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
    if (
      name.length === 0 ||
      CIF.length === 0 ||
      address.length === 0 ||
      email.length === 0 ||
      phone.length === 0
    ) {
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
    <main className="form-add-factory">
      <Toaster />
      <h2 className="add-factory">Añadir fabrica</h2>
      <form className="new-factory-form" action="">
        <div className="factory">
          <label className="label-add-factory">Nombre:</label>
          <input
            className="input-add-factory"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>

        <div className="factory">
          <label className="label-add-factory">CIF:</label>
          <input onChange={(e) => setCIF(e.target.value)} type="text" />
        </div>

        <div className="factory">
          <label className="label-add-factory">Direccion:</label>
          <input
            className="input-add-factory"
            onChange={(e) => setAddress(e.target.value)}
            type="text"
          />
        </div>

        <div className="factory">
          <label className="label-add-factory">Email:</label>
          <input
            className="input-add-factory"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>

        <div className="factory">
          <label className="label-add-factory">Telefono:</label>
          <input
            className="input-add-factory"
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
        </div>

        <button
          style={{ marginTop:"100px" }}
          className="button-add-factory pulse-effect"
          onClick={(e) => {
            e.preventDefault()
            handleFormAddFactory()
          }}
        >
          Añadir
        </button>
      </form>
    </main>
  )
}

export default FormAddFactory