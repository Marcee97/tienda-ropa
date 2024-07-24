import { useEffect, useRef } from "react";
import "../styles/sectiondos.css";

export const SectionDos = () => {
  const elementoDos = useRef(null);
  const elementoTres = useRef(null)

 

  useEffect(() => {
    const ubicacion = 1556;

    const funScrollUp = () => {
      const scrollUp = window.scrollY;

      if (scrollUp >= ubicacion) {
        const indexUp = Math.floor((scrollUp - ubicacion) / 5.491);
        console.log(indexUp, "indexUp");
        const numeroFinal = Math.min(100, indexUp);

        console.log(numeroFinal, "numerofinañ");

        elementoDos.current.style.transform = `translateY(-${numeroFinal}%)`;
       

      }else if(scrollUp < ubicacion){

        if(elementoDos.current) {
          elementoDos.current.style.transform = 'translateY(0)'
        }
      }
    };

    window.addEventListener("scroll", funScrollUp);
    return () => {
      window.removeEventListener("scroll", funScrollUp);
    };
  }, []);

  return (
    <section className="section-segunda">
      <div className="cont-img">
        
       
       <div className="div-img-1">
        <img src="https://images.pexels.com/photos/19220720/pexels-photo-19220720/free-photo-of-linda-modelo-posando-con-ropa-occidental.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Foto-muestra" className="img-1"/>

        <p className="text-desplazado-imagen" ref={elementoDos}></p>

       </div>
      </div>
      
      <div className="cont-moving" ref={elementoTres}>
        <article className="titulo-y-texto">

<h3 className="cont-moving-text">About..</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, dicta. Quos, error, consequuntur nostrum cum ea quam modi dolorem laboriosam, asperiores quasi dolore nulla minus inventore amet sit placeat accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis ullam, a enim tempore unde maxime, accusantium in, atque necessitatibus dolorem ea perferendis ratione! Voluptates maiores praesentium repellat ipsam natus.</p>
        </article>
</div>
    </section>
  );
};
