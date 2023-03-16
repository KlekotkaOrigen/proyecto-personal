import { createContext, useEffect, useState } from "react";

export const context = createContext();
const Provider = context.Provider;

const DolarContext = (props) => {
const [dolar, setDolar] = useState();

const getDolarBlue = (data) => {
    const casa = data.find(x => x.casa.nombre === "Dolar Blue").casa;
    const dolar = Number(casa.venta.replace('.','').replace(',','.'));
    return dolar
};
useEffect(() => {
    fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((response) => response.json())
    .then((data) => setDolar(getDolarBlue(data)));
}, []);
return <Provider value={dolar}>{props.children}</Provider>;
};

export default DolarContext;
