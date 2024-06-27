import { useContext, useState } from "react"
import FormMakeOrder from "../../components/FormMakeOrder/FormMakeOrder"
import "./MakeOrder.css"
import { Context } from "../../context/context"
import { useEffect } from "react"
import { sendOrder } from "../../services/sendOrder"
import { useNavigate } from "react-router-dom"


const MakeOrder = () => {
  const {
    order,
    buttonClick,
    setButtonClick,
  } = useContext(Context)
  const [numberFactories, setnumberFactories] = useState(0)
  const navigate = useNavigate()

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
      await sendOrder(order)
      navigate("/OrderOK")
      setButtonClick(false)
    }
  }
  useEffect(() => {
    myOrder();

  }, [order])
  return (
    <div id="make-order">
      <h2 className="header-make-order">Contrate su transporte</h2>
      <div className="make-order-form">
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
      <button className="make-order-button" onClick={()=>{setButtonClick(true);
      }
      }>Hacer pedido</button>
    </div>
  )
}

export default MakeOrder