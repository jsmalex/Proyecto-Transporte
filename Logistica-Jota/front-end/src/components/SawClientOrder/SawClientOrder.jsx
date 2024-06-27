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
    <div>
        {orders.map((order)=>{
            return (
                <div className='order'>
                    <h3>Pedido numero : {order.id}</h3>
                    {order.factories.map((factory)=>{
                        return (
                            <div className='factory'>
                                <p>Fábrica : {factory.name}</p>
                                {factory.references.map((reference)=>{
                                    return (
                                        <>
                                            <p>Referencias: {reference.reference_code}</p>
                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            )
                
        })}
    </div>
  )
}

export default SawClientOrder