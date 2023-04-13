import Button from "../Button";
import styles from "./styles.module.css";
import { useState, useContext } from "react";
import { context } from "../contexts/DolarContext";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [isPricesOpen, setPricesOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const valor = useContext(context);
  console.log("VALOR DEL CONTEXTO", valor);

  return (
    <div className={styles.main}>
      <div className={styles.menuButton}>
        <Button onClick={() => setProductsOpen(!isProductsOpen)}>
          PRODUCTOS
        </Button>
        <ul
          className={
            isProductsOpen ? styles.productsOpen : styles.productsClosed
          }
        >
          <li className={styles.productos}>
            <Link to="listado/computacion">COMPUTACIÓN</Link>
          </li>
          <li className={styles.productos}>
            <Link to="listado/repuestoscomp">REPUESTOS COMPUTACION</Link>
          </li>
          <li className={styles.productos}>
            <Link to="listado/acccelulares">ACCESORIOS CELULARES</Link>
          </li>
          <li className={styles.productos}>
            <Link to="listado/repuestoscel">REPUESTOS CELULARES</Link>
          </li>
          <li className={styles.productos}>
            <Link to="listado/usados">ARTÍCULOS USADOS</Link>
          </li>
          <li className={styles.productos}>
            <Link to="listado/propios">PRODUCTOS PROPIOS</Link>
          </li>
          <li className={styles.productos}>
            <Link to="listado/outlet">OUTLET</Link>
          </li>
        </ul>
      </div>
      <div>
        <Button onClick={() => setPricesOpen(true)}>FORMAS DE PAGO</Button>
      </div>
      <ReactModal
        overlayClassName={styles.modalOverlay}
        className={styles.modal}
        isOpen={isPricesOpen}
        onRequestClose={() => setPricesOpen(false)}
      >
        <img
          src="./pago.jpg"
          alt="formas de pago tarjetar de credito y debito, transferencia bancarias"
        />
        <button className={styles.close} onClick={() => setPricesOpen(false)}>
          <img src="./close.png" alt="Boton para cerrar" />
        </button>
      </ReactModal>
      <button className={styles.dolar}>{valor} US$</button>
    </div>
  );
};

export default Menu;
