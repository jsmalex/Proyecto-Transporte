import { useEffect, useState } from 'react'
import { getAllOrderOfClient } from '../../services/getAllOrderOfClient'
import './SawClientOrder.css'

const SawClientOrder = () => {
    const [orders,setOrders] = useState([]);
    const sawAllOrders = async () =>{
        const data = await getAllOrderOfClient()
        

        const formattedOrders = data.map( order => {
            const factories = order.factories.map(factory => {
                const references = order.references.filter(reference => reference.factoryId === factory.id)
                return {...factory, references}
            })

            return {...order, factories}
        })
        setOrders(formattedOrders)
        console.log(formattedOrders)
    }
    useEffect(() => {
      sawAllOrders()
    }, [])
        
  return (
    <div style={{  height:"40vh", overflow:"scroll", marginBottom:"50px",}}>
        {orders.map((order,index)=>{
            return (
              <div className="order" key={index}>
                <h3>Pedido numero : {order.id}</h3>
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
    </div>
  )
}

export default SawClientOrder