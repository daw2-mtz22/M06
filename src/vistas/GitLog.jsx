import React, {useState} from 'react'

import '../App.css'
import {Image} from "@nextui-org/react";
import ModalForm from "../components/ModalForm.jsx";


export default function GitLog() {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
          <div className="flex flex-col gap-y-5 justify-center p-12">
            <h1>Git Log</h1>
            <div>
                <Image
                    width={1000}
                    alt="GitLog"
                    src="/GitLog.png"
                />
            </div>
              <ModalForm isVisible={modalVisible} setIsVisible={setModalVisible}/>
          </div>
        </>
  )
}
