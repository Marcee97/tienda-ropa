
import '../styles/portada.css'

import { useRef, useEffect, useState } from "react";


export const Portada = () => {

  
const elementRef = useRef(null)
const [scale, setScale] = useState(false)


useEffect(()=> {

  const funScroll = ()=> {

   
  const scrollY = window.scrollY;

if(scrollY > 490){
  console.log('scrollmayor')
  setScale(true)
}else{
  setScale(false)

}
    }





window.addEventListener('scroll', funScroll)

return ()=> {
  window.removeEventListener('scroll', funScroll)
}
}, [])







  return (
    <section className='portada'>
      <div className='contenedor-portada'>
      </div>
      <h1 className={`titulo-nombre ${scale ? ' animate' : ''}`} ref={elementRef}>We.</h1>
    </section>
  );
};
