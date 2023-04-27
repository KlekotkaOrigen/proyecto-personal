import React, { useState } from 'react';

const BuscarProductos = () => {
    const [productos, setProductos] = useState([]); // Estado para almacenar los productos
    const [busqueda, setBusqueda] = useState(''); // Estado para almacenar el término de búsqueda

// Función para manejar el cambio en el input de búsqueda
const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
};

 // Función para manejar la búsqueda de productos
const buscarProductos = () => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrtnTqpzr-izreIsykOv1uIcxUWJ7ic295jClos-bjpJwK-LfORpGQCALOiZs2e1lUJKFaVtPU-c7/pub?output=csv", {
        download: true,
        // rest of config ...
    })
    // Realiza la búsqueda en el archivo .csv (aquí puedes usar una librería como papaparse para parsear el archivo .csv)
    // Actualiza el estado con los resultados de la búsqueda
    // Por ejemplo, si obtienes un array de objetos con los productos encontrados, puedes hacer algo como esto:
    const resultados = // Realiza la búsqueda en el archivo .csv y obtiene los resultados
    setProductos(resultados);
};

return (
    <div>
    <input type="text" value={busqueda} onChange={handleBusquedaChange} />
    <button onClick={buscarProductos}>Buscar</button>
    <table>
        <thead>
        <tr>
            <th>nombre</th>
            <th>descripcion</th>
            <th>categoria</th>
        </tr>
        </thead>
        <tbody>
        {productos.map(producto => (
            <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.categoria}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};

export default BuscarProductos;
