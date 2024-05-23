import React, {useState} from 'react'

import '../App.css'
import Cards from "../components/Cards.jsx";
import {Button} from "@nextui-org/react";
import { GlobalProvider} from "../context/GlobalContext.jsx";
import ModalForm from "../components/ModalForm.jsx";


export default function MisHistorias() {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <GlobalProvider>
          <div className="flex flex-col gap-y-5 justify-center p-12">
            <h1>Mis Historias</h1>
            <div>
                <Cards />
            </div>
            <div className='flex justify-end'>
                <Button className="text-xl rounded-full" color="success" variant='solid' onClick={()=>setModalVisible(true)}>
                Añadir Historia
                </Button>

            </div>
              <ModalForm isVisible={modalVisible} setIsVisible={setModalVisible}/>
          </div>
        </GlobalProvider>
  )
}

