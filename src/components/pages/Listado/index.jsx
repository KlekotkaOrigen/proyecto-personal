import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as csv from "csvtojson";

const PRODUCTS_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrtnTqpzr-izreIsykOv1uIcxUWJ7ic295jClos-bjpJwK-LfORpGQCALOiZs2e1lUJKFaVtPU-c7/pub?output=csv";
const Listado = () => {
const [productos, setProductos] = useState([]);
useEffect(() => {
    fetch(PRODUCTS_URL)
    .then((response) => response.text())
    .then((data) => csv().fromString(data))
    .then((objetos) => {
        objetos.forEach(
        (objeto) => (objeto.categoria = objeto.categoria.split(","))
        );
        setProductos(objetos);
    });
}, []);
const { categoria } = useParams();

  // return productos.map(producto => producto.nombre)
return (productos
    .filter((producto) => producto.categoria.includes(categoria))
    .map((producto) => <img key={producto.id} src={producto.photo} />)
    )
};

export default Listado;
