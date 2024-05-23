import React, {useContext} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea
} from "@nextui-org/react";
import {CalendarIcon} from '../assets/CalendarIcon.jsx';
import {PencilIcon} from '../assets/PencilIcon.jsx';
import {ImageIcon} from "../assets/ImageIcon.jsx";
import {GlobalContext} from "../context/GlobalContext.jsx";

export default function ModalForm ({isVisible, setIsVisible, dataForm=null}) {
    const { historias, dataHistoria, setDataHistoria } = useContext(GlobalContext);

    const handleClose = () => {
        setDataHistoria({})
        setIsVisible(false)
    };
    const controladorFormHistoria  = (value, field)=>{
        setDataHistoria(
            {...dataHistoria, [field]:value})
    }
    const controladorNuevaHistoria = (formHistoria)=>{
        let nuevaHistoria = {id: historias.length +1, ...formHistoria}
        console.log(`Historia sense id ha de ser creada: ${JSON.stringify(nuevaHistoria)}`)
    }

    const controladorActualizaHistoria = (historia)=>{
        historia.id ? console.log(`Historia  amb id ${historia.id} Actualizada: ${JSON.stringify(historia)}`) : console.log(`Historia sense id ha de ser creada: ${JSON.stringify(historia)}`)
    }
    return (
        <>
            <Modal
                isOpen={isVisible}
                onClose={handleClose}
                placement="top-center"
            >
                <ModalContent>
                    {(handleClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{!dataForm ? 'Añadir Historia' : 'Editar Historia'}</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Fecha"
                                    placeholder="Ejemplo: Marzo de 2024"
                                    variant="bordered"
                                    value= {!dataForm ? undefined : dataForm.fecha}
                                    onChange={(e)=>{ controladorFormHistoria(e.target.value, 'fecha')}}
                                />
                                <Input
                                    endContent={
                                        <PencilIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Titulo"
                                    placeholder="Titulo de la historia"
                                    variant="bordered"
                                    size={"lg"}
                                    value= {!dataForm ? undefined : dataForm.titulo}
                                    onChange={(e)=>{ controladorFormHistoria(e.target.value, 'titulo')}}

                                />
                                <Textarea
                                    label="Experiencia"
                                    placeholder="Describe tu experiencia"
                                    variant="bordered"
                                    value= {!dataForm ? undefined : dataForm.experiencia}
                                    onChange={(e)=>{ controladorFormHistoria(e.target.value, 'experiencia')}}

                                />
                                <Textarea
                                    label="Comentario"
                                    placeholder="Escribe comentarios"
                                    variant="bordered"
                                    value= {!dataForm ? undefined : dataForm.comentario}
                                    onChange={(e)=>{ controladorFormHistoria(e.target.value, 'comentario')}}

                                />
                                <Input
                                    endContent={
                                        <ImageIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Imagen"
                                    placeholder="Añade la url de tu imagen"
                                    variant="bordered"
                                    size={"lg"}
                                    value= {!dataForm ? undefined : dataForm.imagen}
                                    onChange={(e)=>{ controladorFormHistoria(e.target.value, 'imagen')}}

                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                {!dataForm ?
                                    <Button color="primary" onClick={()=>{controladorNuevaHistoria(dataHistoria)}}>
                                        Crear Historia
                                    </Button> :
                                    <Button color="primary" onClick={()=>{controladorActualizaHistoria(dataHistoria)}}>
                                        Editar
                                    </Button>
                                }
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
