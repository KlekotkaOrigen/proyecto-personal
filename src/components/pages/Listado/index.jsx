import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as csv from "csvtojson";

const PRODUCTS_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrtnTqpzr-izreIsykOv1uIcxUWJ7ic295jClos-bjpJwK-LfORpGQCALOiZs2e1lUJKFaVtPU-c7/pub?output=csv";
const Listado = () => {
const { categoria } = useParams();
const [productos, setProductos] = useState([]);

useEffect(() => {
    fetch(PRODUCTS_URL)
    .then((response) => response.text())
    .then((data) => csv().fromString(data))
    .then((objetos) => {
        objetos.forEach(
        (objeto) => (objeto.categoria = objeto.categoria.split(","))
        );
        setProductos(objetos.filter(
            objeto => objeto.categoria.includes(categoria)
        ));
    });
}, [categoria]);

return (
    productos.map(producto =>
        <article className={styles.item} key={producto.id}>
            <h2>{producto.nombre}</h2>
            <img className={styles.foto} src={producto.photo} />
            <p>{producto.descripcion}</p>
        </article>)
)
};

export default Listado;
