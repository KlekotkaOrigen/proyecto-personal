import styles from "./styles.module.css";

const User = () => (
<section className={styles.headerRight}>
    <div className={styles.headerRow}>
    <img
        className={styles.carro}
        src="./carro.png"
        alt="Este es su carro de compras"
    />
    <div>Carro de compras</div>
    </div>
    <div className={styles.headerRow}>
    <img
        className={styles.cuenta}
        src="./user.png"
        alt="Este es el icono de su cuenta"
    />
    <div>Cuenta de usuario</div>
    </div>
</section>
);

export default User;