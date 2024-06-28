import { useContext, useState } from "react"
import FormMakeOrder from "../../components/FormMakeOrder/FormMakeOrder"
import "./MakeOrder.css"
import { Context } from "../../context/context"
import { useEffect } from "react"
import { sendOrder } from "../../services/sendOrder"
import { useNavigate } from "react-router-dom"


const MakeOrder = () => {
  const { order, buttonClick, setButtonClick, setOrder } = useContext(Context)
  const [numberFactories, setnumberFactories] = useState(0)
  const [buttonisClicked, setbuttonisClicked] = useState(false)
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
    console.log(buttonClick)
    if(buttonClick){
      setButtonClick(false)
      console.log(order)
      await sendOrder(order)
     
      console.log(order)
      navigate("/OrderOK")
    }
  }
  useEffect(() => {
    myOrder();

  }, [buttonClick])
  return (
    <div id="make-order" style={{ all: 'unset' }}>
     
      <div> <h2 className="header-make-order">Contrate su transporte</h2>
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
      <button
        className="make-order-button"
        onClick={() => {
          setButtonClick(true)
        }}
      >
        Hacer pedido
      </button>
    </div>
  )
}

export default MakeOrder