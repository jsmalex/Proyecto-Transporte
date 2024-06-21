import "./ClientProfile.css"
import React from 'react'

const ClientProfile = () => {
  return (
    <>
        <div>Esta es la ficha del cliente</div>
        <p>{localStorage.token}</p>
    </>
  )
}

export default ClientProfile