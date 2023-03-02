import "./App.css";
import ReactModal from "react-modal";
import styles from "./styles.module.css";
import Button from "./Button";
import Input from "./Search";
import { useState } from "react";
import Carousel from "./carousel";

function App() {
  const [isPricesOpen, setPricesOpen] = useState(false);

  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img
            className={styles.logoimg}
            src="./logo.png"
            alt="Esto es el logo de KL VENTAS con palmeras y fondo azul"
          />
        </div>
        <Input className={styles.search} />
        <section className={styles.headerRight}>
          <img
            className={styles.carro}
            src="./carro.png"
            alt="Este es su carro de compras"
          />
          <img
            className={styles.cuenta}
            src="./user.png"
            alt="Este es el icono de su cuenta"
          />
        </section>
      </header>
      <div className={styles.menu}>
        <Button>PRODUCTOS</Button>
        <Button onClick={() => setPricesOpen(true)}>FORMAS DE PAGO</Button>
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
      </div>
      <Carousel>
        <div>
          <img className={styles.carouselImage} src="./1.JPG" />
          <p className="legend">CAMARA MOTO G3</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./2.JPG" />
          <p className="legend">CARCASA TRASERA LG K4</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./3.JPG" />
          <p className="legend">CARGADOR DE AUTO KOSMO</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./4.JPG" />
          <p className="legend">MESA NOTEBOOK CON COOLER</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./5.JPG" />
          <p className="legend">HDMI TO MICRO USB</p>
        </div>
        <div>
          <img className={styles.carouselImage} src="./6.JPG" />
          <p className="legend">COOLER AMD6</p>
        </div>
      </Carousel>
      <footer>
        <div>LA EMPRESA</div>
        <div>FACEBOOK INSTAGRAM</div>
        <div>GOOGLE MAPS</div>
        <div className={styles.datos}>
          <div>🌏 Adolfo Alsina 1616 - CABA</div>
          <div>📲 15-2608-1306</div>
          <div>📬 CONTACTO WEB</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
