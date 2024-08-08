import "../styles/shop.css";

export const Shop = ({ shop, infoModal }) => {
  return (
    <section className="shop">
      <div className="section-shop">
      {shop && shop.map((item, index) => (

        <div className="cont-producto-card" key={index} onClick={()=> infoModal(item)}>
          <img
            src={item.img}
          alt="foto producto shop"
        className="img-card-shop"
      />
          <article className="info-products">
            <h5>{item.nombre}</h5>
            <p className="info-detalle">{item.detalle}</p>
            <strong className="info-precio">{item.precio}</strong>
          </article>
        </div>
      ))}
      </div>
    </section>
  );
};
