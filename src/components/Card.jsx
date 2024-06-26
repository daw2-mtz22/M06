import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

export default function CardComponent( {data, onOpen, onDelete}){

    return (<>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7 basis-1/3-gap-4">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Viaje a {data.titulo}</p>
                <h4 className="text-white/90 font-medium text-xl">{data.fecha}</h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={data.imagen}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60">{data.experiencia}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <Button radius="full" size="sm" className="text-amber-200 bg-transparent border-amber-200" onClick={()=>onOpen(data)}>Edit</Button>
                    <Button size="sm" className="text-red-500 bg-transparent border-red-300 rounded-full" onClick={()=>onDelete(data.id)}>Delete</Button>
                </div>
            </CardFooter>
        </Card>
    </>)
}
