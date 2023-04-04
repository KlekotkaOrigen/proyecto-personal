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
        <div>LA EMPRESA</div>
        <div>FACEBOOK</div>
        <section className={styles.datos}>
          <div className={styles.dir}>🌏 Adolfo Alsina 1616 - CABA</div>
          <div className={styles.tel}>📲 15-2608-1306</div>
          <div className={styles.web}>📬 CONTACTO WEB</div>
        </section>
        <div>INSTAGRAM</div>
        <div>GOOGLE MAPS</div>
        {/* <Pie></Pie> */}
      </footer>
    </div>
  );
}

export default App;
