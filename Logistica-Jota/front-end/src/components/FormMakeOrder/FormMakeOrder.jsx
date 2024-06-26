import { useEffect, useState } from "react";
import { getAllFactories } from "../../services/getAllFactories"
import "./FormMakeOrder.css"
import FormMakeReference from "../FormMakeReference/FormMakeReference";

const FormMakeOrder = () => {

  const [dataFactories, setDataFactories] = useState([])
  const [numberReferences, setnumberReferences] = useState(0)

  useEffect(() => {
    handleGetAllFactories()
  }, [])

  const handleGetAllFactories = async () => {
    const result = await getAllFactories()
    setDataFactories(result)
  }

  const displayFormsReference = () => {
    const arrayForms = []
    for (let i = 0; i < numberReferences; i++) {
      arrayForms.push(
        <FormMakeReference />
      )
    }
    return arrayForms
  }

  return (
    <div>
      <form>
        <fieldset>
          <div>
            <label>Seleccione una fabrica:</label>
            <select
              onChange={(e) => {
                
              }}
            >
              <option selected="true" disabled>
                Selecciona Fabrica
              </option>
              {dataFactories.map((factory) => (
                <option key={factory.id} value={factory.id}>
                  {factory.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>¿Cuantos referencia se recogeran en esta fabrica? </label>
            <input
              onChange={(e) => {
                setnumberReferences(parseInt(e.target.value))
              }}
              type="number"
              min="0"
              placeholder="Seleccione cuantas referencias"
            />
            {displayFormsReference()}
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormMakeOrder