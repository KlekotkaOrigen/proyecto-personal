import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const Pie = () => (
<div className={styles.pie}>
    <div>
    <Link to="empresa" target="_blank" rel="noopener noreferrer">
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
</div>
);

export default Pie;
