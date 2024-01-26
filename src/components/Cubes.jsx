
import { useStore } from "../hooks/useStore";
import X from "./X";
import O from "./O"
export default function Cubes(){
    const [cubes] = useStore(state=> [state.cubes])

    return cubes.map((e,index)=>{
      
        return e.part === "X"? <X pos={e.pos}  id={e.id}  key={index}/>: <O pos={e.pos}  id={e.id}  key={index}/>
    })
}