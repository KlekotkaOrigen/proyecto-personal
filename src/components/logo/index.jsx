import styles from "./components/logo/styles.module.css";
import { Link } from "react-router-dom";

const Logo = () => (
    <div className={styles.logo}>
    <Link to="/">
        <img
        className={styles.logoimg}
        src="./logo.png"
        alt="Esto es el logo de KL VENTAS con palmeras y fondo azul"
        />
    </Link>
    </div>
);

export default Logo;
