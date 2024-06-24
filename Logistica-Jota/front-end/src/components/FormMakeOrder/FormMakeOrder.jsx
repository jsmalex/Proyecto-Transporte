import { useEffect, useState } from "react";
import { getAllFactories } from "../../services/getAllFactories"
import "./FormMakeOrder.css"



const FormMakeOrder =  () => {
    const [dataFactories, setDataFactories] = useState([])
    useEffect(() => {
      handleGetAllFactories()
    }, [])
  
    const handleGetAllFactories = async () => {
      const result = await getAllFactories()
      setDataFactories(result)
    }
    console.log(dataFactories);
  return (
    <div>
        <form>
            <div>
                <label>Seleccione una fabrica:</label>
                {console.log(dataFactories[0])}
                <select>
                    <option disabled>Selecciona Fabrica</option>
                    {dataFactories.map((factory)=>(
                        <option key={factory.id} value={factory.name}>{factory.name}</option>
                    ))}
                </select>
            </div>

        </form>

    </div>
  )
}

export default FormMakeOrder