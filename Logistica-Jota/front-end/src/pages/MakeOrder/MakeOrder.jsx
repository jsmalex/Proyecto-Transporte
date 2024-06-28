import { useContext, useState } from 'react'
import FormMakeOrder from '../../components/FormMakeOrder/FormMakeOrder'
import './MakeOrder.css'
import { Context } from '../../context/context'
import { useEffect } from 'react'
import { sendOrder } from '../../services/sendOrder'
import { useNavigate } from 'react-router-dom'

const MakeOrder = () => {
  const { order, buttonClick, setButtonClick } = useContext(Context)
  const [numberFactories, setnumberFactories] = useState(0)
  const navigate = useNavigate()

  const displayFormsFactory = () => {
    const arrayForms = []

    for (let i = 0; i < numberFactories; i++) {
      arrayForms.push(<FormMakeOrder />)
    }
    return arrayForms
  }
  const myOrder = async () => {
    if (buttonClick) {
      await sendOrder(order)
      navigate('/OrderOK')
      setButtonClick(false)
    }
  }
  useEffect(() => {
    myOrder()
  }, [order])
  return (
    <main style={{ marginTop: '70px' }}>
      <h2 className="header-make-order">Contrate su transporte</h2>
      <main style={{ height: '500px', overflowY: 'scroll' }}>
        <label style={{ fontSize: '30px', marginLeft: '10px', fontStyle:"italic"}}>
          ¿A cuantas fabricas debemos de ir?{' '}
        </label>
        <input
          style={{ marginLeft: '400px',marginBottom:"30px" }}
          onChange={(e) => {
            setnumberFactories(parseInt(e.target.value))
          }}
          type="number"
          min="0"
          placeholder="Seleccione el numero de fabricas"
        />
        {displayFormsFactory()}

        <button
          style={{ marginTop: '100px' }}
          onClick={() => {
            setButtonClick(true)
          }}
        >
          Hacer pedido
        </button>
      </main>
    </main>
  )
}

export default MakeOrder
