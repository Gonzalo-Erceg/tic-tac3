import {create} from "zustand"


export const useStore =create(set=> ({
        texture:"O",
        cubes:[],
        cells:Array(64).fill(null),
        winner:null,
        addCube: (x,y,z,id) => {
                
                set(prev=>{
                    const aux = [...prev.cells]
                    aux[id] = prev.texture
                    return ({
                        cubes: [...prev.cubes,{
                            pos:[x,y,z],
                            texture:prev.texture,
                            id:id,
                            part:prev.texture
                        }],
                        texture: prev.texture === "X" ? "O" : "X",
                        cells:aux
                      
                    });
                
            })
        },
        reset:()=>set(()=>({
            cubes:[],
            texture:"O",
            cells:Array(64).fill(null)
        }))
        
    }))
