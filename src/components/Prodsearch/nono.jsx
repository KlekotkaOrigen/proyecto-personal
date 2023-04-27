import { createContext, useEffect, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

const ProductContext = (props) => {
const [dolar, setDolar] = useState();

const getDolarBlue = (data) => {
    const casa = data.find(x => x.casa.nombre === "Dolar Blue").casa;
    const dolar = Number(casa.venta.replace('.','').replace(',','.'));
    return dolar
};
useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrtnTqpzr-izreIsykOv1uIcxUWJ7ic295jClos-bjpJwK-LfORpGQCALOiZs2e1lUJKFaVtPU-c7/pub?output=csv")
    .then((response) => response.text())
    .then((data) => csv().fromString(data))
    .then((objetos) => {
        objetos.forEach(
        (objeto) => (objeto.categoria = objeto.categoria.split(","))
        );
        setProductos(objetos.filter(
            objeto => objeto.categoria.includes(categoria)
        ));
}, []);
return <Provider value={dolar}>{props.children}</Provider>;


export default ProdSearch;