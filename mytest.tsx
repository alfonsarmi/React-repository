import React, { useEffect, useState } from 'react';

// Definición de una interfaz para los elementos de datos
interface Item {
  name: string;
  price: number;
}

// Definición de una clase
class DataProcessor {
  private rawData: Item[];

  constructor(data: Item[]) {
    this.rawData = data;
  }

  // Método de la clase para procesar datos
  processData(): Item[] {
    return this.rawData.map(item => ({
      ...item,
      price: item.price * 1.1, // Aumentar el precio en un 10%
    }));
  }
}

// Componente funcional de React
const MyComponent: React.FC = () => {
  // Estado para almacenar los datos después del procesamiento
  const [processedData, setProcessedData] = useState<Item[]>([]);

  // Efecto para cargar y procesar datos cuando el componente se monta
  useEffect(() => {
    // Datos de ejemplo
    const rawData: Item[] = [
      { name: 'Item 1', price: 10.99 },
      { name: 'Item 2', price: 20.49 },
    ];

    // Instancia de la clase y procesamiento de datos
    const dataProcessor = new DataProcessor(rawData);
    const processedData = dataProcessor.processData();

    // Actualizar el estado con los datos procesados
    setProcessedData(processedData);
  }, []);

  // Método fuera de cualquier clase
  const renderItems = (items: Item[]) => {
    return items.map((item, index) => (
      <li key={index}>
        {item.name} - ${item.price.toFixed(2)}
      </li>
    ));
  };

  return (
    <div>
      <h1>React + TypeScript Example</h1>
      <ul>{renderItems(processedData)}</ul>
    </div>
  );
};

export default MyComponent;
