import { useState } from "react"
import Button from "./Button"
import { Info } from "../assets/Icons"
export default function InfoModal(){
   const [open,setOpen] = useState(false)
   const handle = ()=>{
    setOpen(!open)
   }
   return <div>
        <dialog className=" w-full h-full absolute top-0 left-0 bg-[#4443]" open={open}>
            <div className="bg-white  p-10 w-[300px] sm:w-[400px] h-max absolute top-0 bottom-0 left-0 right-0 m-auto rounded-md flex flex-col items-center gap-10  border-slate-200 border-2">
                <h2 className="text-5xl underline font-bold">Reglas</h2>
                <p>En <math className="font-bold"><msup><mi>Tic-Tac</mi><mn>3</mn></msup></math> las reglas son bastantes sencillas, no se diferencian mucho de el 3 en raya normal, dos jugadores se turnan para poner una ficha y el ganador es el que logra hacer una linea de 4 fichas. Las lineas pueden ser verticales, horizontales o en diagonal y esta vez </p>
                <Button onClick={handle}>Cerrar</Button>
            </div>
        </dialog>
        <Button onClick={handle} className="absolute top-5 right-5"><Info/></Button>
    </div>
}