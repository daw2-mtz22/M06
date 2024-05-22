import CardComponent from "./Card.jsx";
import React, {useContext, useEffect} from "react";
import {GlobalContext} from "./context/GlobalContext.jsx";

export default function Cards(){
    const { historias, setHistorias } = useContext(GlobalContext);

    useEffect(() => {
        const cargarDatos = async () => {
            const response = await fetch('/db.json');
            const data = await response.json();
            setHistorias(data.historias);
        };

        cargarDatos()
    }, [setHistorias]);

    return (
                <div className="flex flex-wrap gap-y-5 justify-start gap-4">
                    {historias.map(card=>(
                        <CardComponent key={card.id} titulo={card.titulo} fecha={card.fecha} experiencia={card.experiencia} comentario='Haq que mirar esto' imagen={card.imagen}/>
                    ))}
                </div>
    )
}