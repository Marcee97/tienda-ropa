import "../styles/sectionshop.css";
import { data } from "../data/product.js";
import { useEffect, useRef } from "react";

export const SectionShop = ({infoModal}) => {
  const productosRef = useRef([]);
  const hoverProductoRef = useRef([])
const fondoText = useRef(null)
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
  const scrollViewport = window.scrollY;

  if(scrollViewport >= sectionShopScroll){

    
    const scrollCalc = Math.floor(scrollViewport / 7)
  
  const scrollFinal = Math.min(1300, scrollCalc)

console.log(scrollFinal, 'scrollFinal')
elementoCurrentText.style.transform = `translateX(${scrollFinal})%`
} 

  }

  window.addEventListener('scroll', scrolling)

  return ()=> {
    window.removeEventListener('scroll', scrolling)
  }

  }, [])
  return (
    <section className="section-shop">
    <h3 className="titulo-shop-remeras animate-shop" ref={fondoText}>RemerasRemerasRemerasRemerasRemerasRemerasRemerasRemerasRemerass</h3>
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
