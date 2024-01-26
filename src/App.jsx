/* eslint-disable react/no-unknown-property */


import { Center, OrbitControls } from '@react-three/drei'
import { Canvas} from '@react-three/fiber'
import Button from './components/Button'
import { useStore } from './hooks/useStore'
import { useRef,useEffect,useState } from 'react'
import Cubes from './components/Cubes'
import gsap from 'gsap/gsap-core'
import {  PerspectiveCamera,Sky} from '@react-three/drei'
import Modal from './components/Modal'
import { CameraIcon } from './assets/Icons'
import winner from './lib/winner'
import InfoModal from './components/InfoModal'
import PlatFormBase from './components/PlatformBase'
export default function App() {
  const camera = useRef()
  const orbitRef = useRef()
  const [reset,cubes,cells,texture] = useStore(state=>[state.reset,state.cubes,state.cells,state.texture])
  const [isWinner,setIsWinner] = useState(false)
  useEffect(()=>{
    const win = winner(cells)
    if(win){
      setIsWinner({win:true, winner:win})
    }else if(isWinner){
      setIsWinner(false)
    }
  },[cubes])
  const handles = ()=>{
  
    gsap.to(camera.current.position,{x:5,y:5,z:10})
    gsap.to(orbitRef.current.target,{x:0,y:0,z:0})
     
  }
  return (
    <main className='h-full'>
      <div className={`absolute block top-5 text-2xl md:text-3xl  left-0 w-max right-0 m-auto px-2 py-1 rounded-md z-10 bg-[${texture === "X"?"#FF4000":"#0064B2"}]`}> <h2>Turno {texture}</h2></div>
    
    <Canvas shadows > 
 
    <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[5, 5, 10]}
        fov={75}
        aspect={window.innerWidth / window.innerHeight}
        near={0.1}
        far={1000}
        
      />
      <OrbitControls ref={orbitRef} maxDistance={15} enablePan={false} maxPolarAngle={Math.PI / 2}/>
      <Center>
        <Cubes/>
        <PlatFormBase/>
      </Center>
      <directionalLight castShadow position={[5,5,5]}/>

      <ambientLight/>
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
    </Canvas>
      <div className='w-max absolute bottom-0 left-0 p-10 right-0 m-auto flex gap-9'>
      <Button onClick={reset}>Reiniciar tablero</Button>
      <Button onClick={handles}><CameraIcon/></Button>
      
      </div>
      <InfoModal/>
      <Modal open={isWinner} reset={reset}/>

    </main>
  )
}
