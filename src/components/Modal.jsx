import Button from "./Button"
import { useEffect,useRef } from "react"
import gsap from "gsap/gsap-core";
import {CSSPlugin} from "gsap/CSSPlugin"
import Icon from "./Icon";
gsap.registerPlugin(CSSPlugin)
export default function Modal({open,reset}){
    const modalRef = useRef()
    
    useEffect(()=>{
        
   
        if(open && modalRef.current){
            gsap.fromTo(modalRef.current,{opacity:0, y:-200},{opacity: 1,y:0,duration:0.5})
            // eslint-disable-next-line no-undef
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 },
              });
        }
    },[open])
    return <dialog className=" w-full h-full absolute top-0 left-0 bg-[#4443]" open={open} >
        <div className="bg-white box-content p-10 w-[200px] md:w-[400px] lg:w-[600px] h-max absolute top-0 bottom-0 left-0 right-0 m-auto rounded-md flex flex-col items-center gap-10  border-slate-200 border-2"  ref={modalRef}>
            <Icon winner={open.winner === "O" ? "#0064B2":"#FF4000"}/>
            <p>Felicidades Jugador <span className={`text-white font-bold  px-2 py-1 rounded-md ${open.winner === "O" ?"bg-[#0064B2]":"bg-[#FF4000]" }`}>{open.winner}</span></p>
            <Button onClick={reset} >Reiniciar tablero</Button>
        </div>
    </dialog>
}