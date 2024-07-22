import { useEffect, useState } from 'react'

import '../styles/navbar.css'
export const Navbar = () => {

const [animate, setAnimate] = useState(false)


useEffect(()=> {


  const funcScroll = ()=> {

const scrolly = window.scrollY
if(scrolly > 490){
  setAnimate(true)
  console.log('messinav')
}else{
  setAnimate(false)
}


  }
window.addEventListener('scroll', funcScroll)

return ()=> {
  window.removeEventListener('scroll', funcScroll)
}
  }, [])



  return (
    <section className="navbar">
      <div className="contenedor-navbar">
<ul className={`ul-nav ${animate ? 'animate-nav' : ''}`}>
  <li>Shop</li>
  <li>About</li>
  <li>Contact</li>
  <li>Location</li>
</ul>
      </div>
    </section>
  )
}
