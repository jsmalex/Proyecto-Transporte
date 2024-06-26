import { useContext, useState } from 'react'
import './FormMakeReference.css'
import { Context } from '../../context/context'
import { useEffect } from 'react'

function FormMakeReference() {
  const {
    buttonClick,
    setReferences,
  } = useContext(Context)
  const [Ref, setRef] = useState()

  const handletReferences = () => {
    if (buttonClick) {
      setReferences((oldReference) => [...oldReference, Ref])
    }
  }

  useEffect(() => {
    handletReferences()
  }, [buttonClick])

  return (
    <div>
      <input
        onChange={(e) => {
          setRef(e.target.value)
        }}
        type="text"
      />
    </div>
  )
}

export default FormMakeReference
