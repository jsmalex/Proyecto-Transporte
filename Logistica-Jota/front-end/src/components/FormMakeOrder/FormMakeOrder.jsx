import { useContext, useEffect, useState } from 'react'
import { getAllFactories } from '../../services/getAllFactories'
import './FormMakeOrder.css'
import FormMakeReference from '../FormMakeReference/FormMakeReference'
import { Context } from '../../context/context'
const order = []
const FormMakeOrder = () => {
  const { setOrder, buttonClick, references } = useContext(Context)
  const [dataFactories, setDataFactories] = useState([])
  const [numberReferences, setnumberReferences] = useState(0)
  const [numberFabric, setnumberFabric] = useState()
  useEffect(() => {
    handleGetAllFactories()
  }, [])

  useEffect(() => {
    doOrder()
  }, [references])

  const handleGetAllFactories = async () => {
    const result = await getAllFactories()
    setDataFactories(result)
  }

  const displayFormsReference = () => {
    const arrayForms = []
    for (let i = 0; i < numberReferences; i++) {
      arrayForms.push(<FormMakeReference />)
    }
    return arrayForms
  }
  const doOrder = async () => {
    if (buttonClick) {
      const referencestoFactory = references.splice(0, numberReferences)
      order.push({
        Factory_id: numberFabric,
        referencies: referencestoFactory,
      })
      setOrder(order)
    }
  }
  return (
    <main >
      <form>
        <main style={{ display:"flex", justifyContent:"space-around"}}>
          <main style={{ marginBottom: '10px' }}>
            <label>Seleccione una fabrica:</label>
            <select
              onChange={(e) => {
                setnumberFabric(e.target.value)
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
          </main>

          <section style={{ marginBottom: '20px' }}>
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
          </section>
        </main>
      </form>
    </main>
  )
}

export default FormMakeOrder
