import SawClientOrder from "../../components/SawClientOrder/SawClientOrder"
import "./GetAllOrderOfClient.css"


const GetAllOrderOfClient = () => {
  return (
    <div style={{ all: 'unset'}}>
      <h2 style={{ marginTop: '100px', marginRight: '300px' }}>Tus pedidos</h2>
      <SawClientOrder />
    </div>
  )
}

export default GetAllOrderOfClient