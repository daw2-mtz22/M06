import React from 'react'

import './App.css'
import Cards from "./Cards.jsx";
import {Button} from "@nextui-org/react";
import {GlobalProvider} from "./context/GlobalContext.jsx";


function App() {
  return (
      <GlobalProvider>
          <div className="flex flex-col gap-y-5 justify-center p-12">
            <h1>Mis Historias</h1>
            <div>
                <Cards />
            </div>
            <div className='flex justify-end'>
                <Button className="text-xl rounded-full" color="success" variant='solid'>
                Añadir Historia
                </Button>
            </div>
          </div>
      </GlobalProvider>

  )
}

export default App
