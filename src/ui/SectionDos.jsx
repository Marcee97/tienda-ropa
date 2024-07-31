import { useEffect, useRef } from "react";
import "../styles/sectiondos.css";


export const SectionDos = ({ images }) => {
  const elementoDos = useRef(null);
  const elementoImg = useRef(null);

  useEffect(() => {
    const ubicacion = 1548;
    const ubicacionImg = 1784;

    const funScrollUp = () => {
      const scrollUp = window.scrollY;

      if (scrollUp >= ubicacion) {
        const indexUp = Math.floor((scrollUp - ubicacion) / 5.43);
        const numeroFinal = Math.max(0, 100 - indexUp);
        elementoDos.current.style.height = `${numeroFinal}%`;
      } else if (scrollUp < ubicacion) {
        if (elementoDos.current) {
          elementoDos.current.style.height = "100%";
        }
      }

      if (scrollUp >= ubicacionImg) {
        const indexImg = Math.floor((scrollUp - ubicacionImg) / 2.94);

        const indexImgFinal = Math.max(0, 100 - indexImg);
        elementoImg.current.style.height = `${indexImgFinal}%`;
      } else if (scrollUp < ubicacionImg) {
        elementoImg.current.style.height = "100%";
      }
    };

    window.addEventListener("scroll", funScrollUp);
    return () => {
      window.removeEventListener("scroll", funScrollUp);
    };
  }, []);

  return (
    <section className="section-segunda">
      {images && images.map((img, index) => (
        
        <div className="cont-img" key={index}>
        <article className="cont-img-article">
          <div className="div-img-0">
            <img
              src={img.imgX}
            alt="imagen estatica"
          className="img-0"
        />
            <div className="cont-img-0-scroll" ref={elementoImg}>
              <img
                src={img.imgXScroll}
              alt="imagen scroll"
            className="img-0-scroll"
          />
            </div>
          </div>
        </article>

        <div className="div-img-1">
          <img
            src={img.imgXl}
          alt="Foto-muestra"
        className="img-1"
      />
          <div className="cont-texto-deplazado-img" ref={elementoDos}>
            <p className="text-desplazado-img">We..</p>
          </div>
        </div>
      </div>
      ))}

      <div className="cont-moving">
        <h5 className="titulo-articulo-siguiente">Remeras</h5>
      </div>
    </section>
  );
};
