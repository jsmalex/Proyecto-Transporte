import { useState } from 'react';
import './FormMakeReference.css'

function FormMakeReference() {
    const [reference, setReference] = useState("")

  return (
    <div>
      <input
        onChange={(e) => {
          setReference(e.target.value) 
        }}
        type="text"
      />
    </div>
  )
}

export default FormMakeReference