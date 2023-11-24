import React, { useEffect, useState } from 'react';

// Definición de una interfaz para los elementos de datos
const MyComponent = () => {
  // Estado para almacenar los datos después del procesamiento
  const [processedData, setProcessedData] = useState([]);

  // Efecto para cargar y procesar datos cuando el componente se monta
  useEffect(() => {
    // Datos de ejemplo
    const rawData = [
      { name: 'Item 1', price: 10.99 },
      { name: 'Item 2', price: 20.49 },
    ];

    // Procesamiento de datos
    const processedData = rawData.map((item) => ({
      ...item,
      price: item.price * 1.1, // Aumentar el precio en un 10%
    }));

    // Actualizar el estado con los datos procesados
    setProcessedData(processedData);
  }, []);

  // Método fuera de cualquier clase
  const renderItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        {item.name} - ${item.price.toFixed(2)}
      </li>
    ));
  };

  return (
    <div>
      <h1>React + JSX Example</h1>
      <ul>{renderItems(processedData)}</ul>
    </div>
  );
};

export default MyComponent;
