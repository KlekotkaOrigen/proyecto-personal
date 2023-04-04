import "./App.css";
import styles from "./styles.module.css";
import Input from "./Search";
import Menu from "./Menu";
import User from "./user";
import { Link, Outlet } from "react-router-dom";
// import Logo from "./components/logo"

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
        <User className={styles.headerRight}/>
      </header>
      <Menu />
      <Outlet />
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
