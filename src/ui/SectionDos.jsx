import { useEffect, useRef } from "react";
import "../styles/sectiondos.css";

export const SectionDos = () => {
  const elementoDos = useRef(null);
  const elementoImg = useRef(null);
  const elementoText = useRef(null);

  useEffect(() => {
    const ubicacion = 1548;
    const ubicacionImg = 1784;
    const ubicacionText = 1000;

    const funScrollUp = () => {
      const scrollUp = window.scrollY;

      if (scrollUp >= ubicacion) {
        const indexUp = Math.floor((scrollUp - ubicacion) / 5.43);
        const numeroFinal = Math.max(0, 100 - indexUp);
        console.log(numeroFinal, "indexheigth");
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

      if (scrollUp >= ubicacionText) {
        const indexText = Math.floor((scrollUp - ubicacionText) / 2);

        const indexTextFinal = Math.min(580, indexText);

        elementoText.current.style.fontSize = `${indexTextFinal}%`;
      } else if (scrollUp < ubicacionText) {
        elementoText.current.style.fontSize = "0";
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
        <article className="cont-img-article">
          <div className="div-img-0">
            <img
              src="https://i.pinimg.com/564x/33/69/8b/33698b65b6f94d7fc2f35b56b38b1c1b.jpg"
              alt="imagen estatica"
              className="img-0"
            />
            <div className="cont-img-0-scroll" ref={elementoImg}>
              <img
                src="https://i.pinimg.com/564x/d5/9c/13/d59c135860dcdd78edb8fd9c152cf694.jpg"
                alt="imagen scroll"
                className="img-0-scroll"
              />
            </div>
          </div>
        </article>

        <div className="div-img-1">
          <img
            src="https://i.pinimg.com/564x/99/60/bc/9960bc2649da9884965ad4c77e1589b4.jpg"
            alt="Foto-muestra"
            className="img-1"
          />
          <div className="cont-texto-deplazado-img" ref={elementoDos}>
            <p className="text-desplazado-img">We..</p>
          </div>
        </div>
      </div>

      <div className="cont-moving">
        <article className="titulo-y-texto">
          <h3 className="cont-moving-text" ref={elementoText}>
            Remeras
          </h3>
        </article>
      </div>
    </section>
  );
};
