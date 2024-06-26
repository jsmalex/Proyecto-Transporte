import { getAllOrdersOfAllClients } from '../../services/getAllOrdersOfAllClients'
import './SawAllOrdersOfAllClients.css'

import { useEffect, useState } from 'react'

const SawAllOrdersOfAllClients = () => {
  const [orders, setOrders] = useState([])
  const sawAllOrders = async () => {
    const data = await getAllOrdersOfAllClients()

    const formattedOrders = data.map((order) => {
      const factories = order.factories.map((factory) => {
        const references = order.references.filter(
          (reference) => reference.factoryId === factory.id
        )
        return { ...factory, references }
      })

      return { ...order, factories }
    })
    setOrders(formattedOrders)
  }
  useEffect(() => {
    sawAllOrders()
  }, [])

  return (
    <main style={{ height: '55vh', overflow: 'scroll', marginBottom: '50px' }}>
      {orders.map((order, index) => {
        return (
          <div className="order" key={index}>
            <h3>Pedido numero : {order.id}</h3>
            <p>Cliente: {order.user.name}</p>
            <p>Id del cliente: {order.userId}</p>
            {order.factories.map((factory) => {
              return (
                <>
                  <p className="subrayar">Fábrica : {factory.name}</p>
                  {factory.references.map((reference) => {
                    return (
                      <>
                        <p>Referencia: {reference.reference_code}</p>
                      </>
                    )
                  })}
                </>
              )
            })}
          </div>
        )
      })}
    </main>
  )
}

export default SawAllOrdersOfAllClients