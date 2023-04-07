import styles from "./styles.module.css";

const Empresa = () => (
  <div className={styles.bloque}>
    <h1 className={styles.titulo}>KL VENTAS Y ENVIOS</h1>
    <p className={styles.texto}>
      Con una trayectoria de mas de 20 años en la compra venta de insumos,
      nuestros productos llegan diariamente a todas partes del país.<br /><br />Nuestro
      compromiso con el cliente es que el o los productos lleguen en tiempo y
      forma según lo publicado. Además de brindar una garantía que resuelve en
      nuestros talleres propios cualquier posible inconveniente.<br /><br />Contamos con
      productos importados, productos nacionales y productos propios.
    </p>
  </div>
);

export default Empresa;
