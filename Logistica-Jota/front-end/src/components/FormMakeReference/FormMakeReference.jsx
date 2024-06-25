import { useState } from 'react';
import './FormMakeReference.css'

function FormMakeReference({ functionStealSon, buttonClick }) {
    const [reference, setReference] = useState("")

    if (buttonClick){
        functionStealSon(reference)
    }

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