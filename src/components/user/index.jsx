import styles from "./styles.module.css";

const User = () => (
    <div className={styles.user}>
    <div className={styles.bloque1}>
        <div>
        <img
            className={styles.cuenta}
            src="/user.png"
            alt="Este es el icono de su cuenta"
        />
        </div>
        <div className={styles.texto1}>
        TU CUENTA
        </div>
    </div>
    <div className={styles.bloque2}>
        <div>
        <img
            className={styles.carro}
            src="/carro.png"
            alt="Este es su carro de compras"
        />
        </div>
        <div className={styles.texto2}>
        TU CARRITO
        </div>
    </div>
    </div>
);

// const User = () => (
// <section>
//     <div className={styles.headerRow}>
//     <img
//         className={styles.carro}
//         src="/carro.png"
//         alt="Este es su carro de compras"
//     />
//     <div>Carro de compras</div>
//     </div>
//     <div className={styles.headerRow}>
//     <img
//         className={styles.cuenta}
//         src="/user.png"
//         alt="Este es el icono de su cuenta"
//     />
//     <div>Cuenta de usuario</div>
//     </div>
// </section>
// );

export default User;
