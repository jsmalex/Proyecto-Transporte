import { useContext, useState } from "react"
import FormMakeOrder from "../../components/FormMakeOrder/FormMakeOrder"
import "./MakeOrder.css"
import { Context } from "../../context/context"


const MakeOrder = () => {
  const {
    setButtonClick,
  } = useContext(Context)
  const [numberFactories, setnumberFactories] = useState(0)

  const displayFormsFactory = () =>{
    
    const arrayForms = []

    for (let i=0; i< numberFactories; i++){
      arrayForms.push(
        <FormMakeOrder/>
      )
     
    } 
    return arrayForms
  }
  return (
    <div>
      <h2>Contrate su transporte</h2>
      <div>
        <label>¿A cuantas fabricas debemos de ir? </label>
        <input
          onChange={(e) => {
            setnumberFactories(parseInt(e.target.value))
          }}
          type="number"
          min="0"
          placeholder="Seleccione el numero de fabricas"
        />
        {displayFormsFactory()}
      </div>
      <button onClick={()=>{setButtonClick(true);
      }
      }>Hacer pedido</button>
    </div>
  )
}

export default MakeOrder