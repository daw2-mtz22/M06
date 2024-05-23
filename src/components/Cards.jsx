import CardComponent from "./Card.jsx";
import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../context/GlobalContext.jsx";
import ModalForm from "./ModalForm.jsx";

export default function Cards(){
    const { historias, setHistorias, dataHistoria, setDataHistoria } = useContext(GlobalContext);
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        const cargarDatos = async () => {
            const response = await fetch('/db.json');
            const data = await response.json();
            setHistorias(data.historias);
        };

        cargarDatos()
    }, [setHistorias]);
    const controladorEditarHistoria  = (historia)=>{
        setDataHistoria(historia)
        setModalVisible(true)
    }
    const controladorBorrarHistoria  = (historiaId)=>{
        console.log(`Borrando la Historia con Id:${historiaId}`)
    }
    return (
                <div className="flex flex-wrap gap-y-5 justify-start gap-4">
                    {historias.map(card=>(
                        <CardComponent key={card.id} data={card} onOpen={controladorEditarHistoria} onDelete={controladorBorrarHistoria} />
                    ))}
                    <ModalForm isVisible={modalVisible} setIsVisible={setModalVisible} dataForm={dataHistoria}/>
                </div>
    )
}