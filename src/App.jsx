import "./App.css";
import styles from "./styles.module.css";
import Input from "./Search";
import Menu from "./Menu";
import User from "./user";
import { Link, Outlet } from "react-router-dom";
// import Logo from "./components/logo"
// import Pie from "./components/pie"

function App() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        {/* <Logo /> */}
        <div className={styles.logo}>
          <Link to="/">
            <img
              className={styles.logoimg}
              src="./logo.png"
              alt="Esto es el logo de KL VENTAS con palmeras y fondo azul"
            />
          </Link>
        </div>
        <Input className={styles.search} />
        <User className={styles.headerRight} />
      </header>
      <Menu />
      <Outlet />
      <footer>
        <div>
          <Link
            to="empresa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.comp}
              src="./company.png"
              alt="Presiona aquí para obtener informacion de nuestra empresa"
            />
          </Link>
        </div>
        <div>
          <Link
            to="https://www.facebook.com/profile.php?id=10000544440111658"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.face}
              src="./face.png"
              alt="Presiona aquí para dirigirte a nuestra pagina de Facebook"
            />
          </Link>
        </div>
        <section className={styles.datos}>
          <div className={styles.dir}>📧 klventasyenvios@gmail.com</div>
          <div className={styles.tel}>📲 15-2608-1306</div>
          <div className={styles.web}>📬 CONTACTO WEB</div>
        </section>
        <div>
          <Link
            to="https://instagram.com/klventasyenvios?igshid= zdDKnkNTZinym="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.insta}
              src="./insta.png"
              alt="Presiona aquí para dirigirte a nuestro instagram"
            />
          </Link>
        </div>
        <div>GOOGLE MAPS</div>
        {/* <Pie></Pie> */}
      </footer>
    </div>
  );
}

export default App;
