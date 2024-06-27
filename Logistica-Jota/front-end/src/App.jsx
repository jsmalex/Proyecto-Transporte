import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routers/index'
import { Context } from './context/context'
import { useState } from 'react'

function App() {
  const [buttonClick, setButtonClick]= useState(false)
  const [order, setOrder] = useState([])
  const [references, setReferences] = useState([])
  return (
    <>
      <Context.Provider
        value={{
          buttonClick,
          setButtonClick,
          order,
          setOrder,
          references,
          setReferences,
        }}
      >
        <RouterProvider router={router}></RouterProvider>
      </Context.Provider>
    </>
  )
}

export default App
