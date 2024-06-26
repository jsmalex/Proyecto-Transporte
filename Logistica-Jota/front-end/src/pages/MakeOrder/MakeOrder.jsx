import { useContext, useState } from "react"
import FormMakeOrder from "../../components/FormMakeOrder/FormMakeOrder"
import "./MakeOrder.css"
import { Context } from "../../context/context"
import { useEffect } from "react"
import { sendOrder } from "../../services/sendOrder"


const MakeOrder = () => {
  const {
    order,
    buttonClick,
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
  const myOrder = async() =>{
    if(buttonClick){
      const sendMyOrder = await sendOrder(order)
      console.log(sendMyOrder);
      setButtonClick(false)
    }
  }
  useEffect(() => {
    myOrder();

  }, [order])
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