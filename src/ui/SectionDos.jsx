import { useEffect, useRef } from "react";
import "../styles/sectiondos.css";

export const SectionDos = () => {
  const elementoDos = useRef(null);
  const elementoImg = useRef(null);
  const elementoText = useRef(null);

  useEffect(() => {
    const ubicacion = 1556;
    const ubicacionImg = 1813;
    const ubicacionText = 1000;

    const funScrollUp = () => {
      const scrollUp = window.scrollY;

      if (scrollUp >= ubicacion) {
        const indexUp = Math.floor((scrollUp - ubicacion) / 5.526);
        const numeroFinal = Math.min(100, indexUp);

        elementoDos.current.style.transform = `translateY(-${numeroFinal}%)`;
      } else if (scrollUp < ubicacion) {
        if (elementoDos.current) {
          elementoDos.current.style.transform = "translateY(0)";
        }
      }

      if (scrollUp >= ubicacionImg) {
        const indexImg = Math.floor((scrollUp - ubicacionImg) / 2.98);
        console.log(indexImg, "Mov Igm");

        const indexImgFinal = Math.min(100, indexImg);
        elementoImg.current.style.transform = `translateY(-${indexImgFinal}%)`;
      } else if (scrollUp < ubicacionImg) {
        elementoImg.current.style.transform = "translateY(0)";
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
              src="https://i.pinimg.com/564x/2b/b5/21/2bb521d4cc9d3a59ac6a3b1bfe210a1a.jpg"
              alt="imagen estatica"
              className="img-0"
            />

            <img
              src="https://i.pinimg.com/564x/b0/ab/17/b0ab17f34ab317cf6d094301ba1696c1.jpg"
              alt="imagen scroll"
              className="img-0-scroll"
              ref={elementoImg}
            />
          </div>
        </article>

        <div className="div-img-1">
          <img
            src="https://images.pexels.com/photos/19220720/pexels-photo-19220720/free-photo-of-linda-modelo-posando-con-ropa-occidental.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Foto-muestra"
            className="img-1"
          />

          <p className="text-desplazado-imagen" ref={elementoDos}></p>
        </div>
      </div>

      <div className="cont-moving">
        <article className="titulo-y-texto">
          <h3 className="cont-moving-text" ref={elementoText}>
            Woman
          </h3>

          <p className="cont-moving-parrafo-woman">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            exercitationem enim quis perspiciatis suscipit aliquam voluptatibus
            commodi quia nihil fugit tempore id saepe quod reiciendis laborum
            unde, odit aliquid provident.
          </p>
        </article>
      </div>
     
    </section>
  );
};
