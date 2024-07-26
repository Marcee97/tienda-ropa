import "../styles/sectionshop.css";
import { useEffect, useRef } from "react";

export const SectionShop = () => {
  const productoRef = useRef(null);
  const hoverProductoRef = useRef(null);
  useEffect(() => {
    const productoCurrentRef = productoRef.current;
    const hoverProductoCurrentRef = hoverProductoRef.current;

    const mouseEnter = () => {
      hoverProductoCurrentRef.style.visibility = "visible";
    };
    const mouseLeave = () => {
      hoverProductoCurrentRef.style.visibility = "hidden";

    };

    productoCurrentRef.addEventListener("mouseenter", mouseEnter);
    productoCurrentRef.addEventListener("mouseleave", mouseLeave);

    return () => {
      productoCurrentRef.removeEventListener("mouseenter", mouseEnter);
      productoCurrentRef.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <section className="section-shop">
      <div className="contenedor-productos">
        <h4 className="cont-ropa-titulo">Section Ropa</h4>

        <div className="contenedor-img">
          <div className="div-producto" ref={productoRef}>
            <img
              src="/img/imgproducto(1).png"
              alt="foto producto"
              className="img-producto-shop"
            />
            <article className="article-producto" ref={hoverProductoRef}>
              <h5 className="info-producto">Remera Estilo Run Park</h5>
              <p></p>
              <strong className="precio-producto">$2.900</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
