import Button from "../Button";
import styles from "./styles.module.css";
import { useState, useContext } from "react";
import { context } from "../components/contexts/DolarContext";
import ReactModal from "react-modal";

const Menu = props => {
  const [isPricesOpen, setPricesOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const valor = useContext (context)
  console.log("VALOR DEL CONTEXTO", valor)

  return (
    <div className={styles.main}>
        <div className={styles.menuButton}>
          <Button onClick={() => setProductsOpen(!isProductsOpen)}>PRODUCTOS</Button>
          <ul className={isProductsOpen ? styles.productsOpen : styles.productsClosed}>
            <li>INSUMOS COMPUTACIÓN</li>
            <li>REPUESTOS COMPUTACION</li>
            <li>ACCESORIOS CELULARES</li>
            <li>REPUESTOS CELULARES</li>
            <li>ARTÍCULOS USADOS</li>
            <li>PRODUCTOS PROPIOS</li>
            <li>OUTLET</li>
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
        <button className={styles.dolar}>U$D: {valor}</button>
      </div>
  )
}

export default Menu;