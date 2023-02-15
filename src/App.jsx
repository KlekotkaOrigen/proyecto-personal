import "./App.css";
import styles from "./styles.module.css";
import Button from "./Button";
import Input from "./input";

function App() {
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
        <section className={styles.headerRight}>
          <div className={styles.datos}>
            <div>🌏 Adolfo Alsina 1616 - CABA</div>
            <div>📲 15-2608-1306</div>
            <div>📬 CONTACTO WEB</div>
          </div>
          <section className={styles.user}>
            <img className={styles.carro} src="./carro.png" alt="Este es su carro de compras" />
            <img className={styles.cuenta} src="./user.png" alt="Este es el icono de su cuenta" />
          </section>
        </section>
      </header>
      <div className={styles.menu}>
        <Button>PRODUCTOS</Button>
        <Input className={styles.search}/>
        <Button>FORMAS DE PAGO</Button>
      </div>
      <footer>
        <div>LA EMPRESA</div>
        <div>FACEBOOK INSTAGRAM</div>
        <div>GOOGLE MAPS</div>
      </footer>
    </div>
  );
}

export default App;
