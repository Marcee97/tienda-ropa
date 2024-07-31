import "../styles/sectionshop.css";
import { data } from "../data/product.js";
import { useEffect, useRef } from "react";

export const SectionShop = ({infoModal}) => {
  const productosRef = useRef([]);
  const hoverProductoRef = useRef([])
const fondoText = useRef(null)

const fondoTextXl = useRef(null)
const sectionShopScroll = 2900


  useEffect(() => {

    const mouseEnter = (index) => {
      const currentHover = hoverProductoRef.current[index];
      currentHover.style.visibility = 'hidden'
     
    };

    const mouseLeave = (index) => {
      const currentHover = hoverProductoRef.current[index];
    };

    productosRef.current.forEach((refs, index) => {
      refs.addEventListener("mouseenter", () => mouseEnter(index));
      refs.addEventListener("mouseleave", () => mouseLeave(index));
    });

    return () => {
      productosRef.current.forEach((refs, index) => {
        if (refs) {
          refs.removeEventListener("mouseenter", ()=> mouseEnter(index));
          refs.removeEventListener("mouseleave", ()=> mouseLeave(index));
        }
      });
    };
  }, []);

  useEffect(()=>{
const scrolling = ()=> {
  const elementoCurrentText = fondoText.current;
  const elementoCurrentTextXl = fondoTextXl.current;
  const scrollViewport = window.scrollY;

  if(scrollViewport >= sectionShopScroll){

    
    const scrollCalc = Math.floor((scrollViewport - sectionShopScroll) / 30)
    const scrollCalcXl = Math.floor((scrollViewport - sectionShopScroll) / 30)
  
  const scrollFinal = Math.min(1500, scrollCalc)
  const scrollFinalXl = Math.min(1500, scrollCalcXl)

console.log(scrollFinal, 'scrollFinal')
elementoCurrentText.style.transform = `translateX(-${scrollFinal}%)`
elementoCurrentTextXl.style.transform = `translateX(${scrollFinalXl}%)`
} 



  }

  window.addEventListener('scroll', scrolling)

  return ()=> {
    window.removeEventListener('scroll', scrolling)
  }

  }, [])
  return (
    <section className="section-shop">
    <p className="titulo-shop-remeras" ref={fondoText}>Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.</p>
    <p className="titulo-shop-remeras-left" ref={fondoTextXl}>Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.Remeras.</p>

    
    <h4 className="text-animate-background" ></h4>
      <div className="contenedor-de-productos__shop">
        <div className="contenedor-de-productos__cards">
          {data.map((item, index) => (
            <div
            onClick={()=> infoModal(item)}
              key={index}
              ref={el => (productosRef.current[index] = el)}
              className="card-producto"
            >
              <img src={item.img} alt="Foto Producto" className="img-producto-shop" />
              <article className="info-producto-hover" ref={oh => hoverProductoRef.current[index] = oh}>
               
               
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
