import { useEffect, useState } from "react";
import "../styles/modal.css";
export const Modal = ({ infoRecibida }) => {
  const [dataModal, setDataModal] = useState([]);

  useEffect(() => {
    setDataModal(infoRecibida);
  }, [infoRecibida]);

  const closeModal = () => {
    setDataModal([]);
  };

  return (
    <section className="section-modal">
      {dataModal &&
        dataModal.map((items, index) => (
          <div key={index} className="modal">

            <img src={items.img} alt="Imagen de producto selecciona Modal" />
            <div className="contenedor-info-producto-modal">

            <article className="info-producto-modal">
              <h5>{items.nombre}</h5>
              <p>{items.detalle}</p>
              <strong>{items.precio}</strong>
            </article>
            <article className="talles-modal">
              <span className="talles">S</span>
              <span className="talles">XL</span>
              <span className="talles">XXL</span>
            </article>
            </div>
           <span className="material-symbols-outlined button-cerrar-modal" onClick={closeModal}>
close
</span>

          </div>
        ))}
    </section>
  );
};
