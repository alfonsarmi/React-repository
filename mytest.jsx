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
// Definición de un objeto
var miObjeto = {
  // Método simple
  miMetodo: function() {
    console.log("Este es un método.");
  },

  // Método con parámetros
  suma: function(a, b) {
    return a + b;
  },

  // Método con acceso a propiedades del objeto
  obtenerNombre: function() {
    return this.nombre; // 'this' se refiere al objeto actual
  }
};

// Llamada a un método
miObjeto.miMetodo(); // Imprimirá "Este es un método."

// Llamada a un método con parámetros
var resultado = miObjeto.suma(2, 3);
console.log(resultado); // Imprimirá 5

// Uso de 'this' dentro de un método para acceder a propiedades del objeto
miObjeto.nombre = "Mi Objeto";
var nombre = miObjeto.obtenerNombre();
console.log(nombre); // Imprimirá "Mi Objeto"


/*
 1) Method: "\nif (1 == 1)\n{\nvar test = 1 + 1;\n}\nmain();"
    -		Identifiers	Count = 2	
        [0]	"main"
        [1]	"test"
    -		Operands	Count = 16	
        [0]	"eof"
        [1]	"("
        [2]	"1"
        [3]	"1"
        [4]	")"
        [5]	"{"
        [6]	"var"
        [7]	"test"
        [8]	"1"
        [9]	"1"
        [10]	";"
        [11]	"}"
        [12]	"main"
        [13]	"("
        [14]	")"
        [15]	";"
    -		Operators	Count = 5	
        [0]	"if"
        [1]	"=="
        [2]	"="
        [3]	"+"
        [4]	"if"
    - BM_CyclomaticComplexity: 
        [0] "if"   

    BM_CognitiveComplexity	2	double
		BM_CouplingBetweenObjectClasses	0	double
		BM_CyclomaticComplexity	1	double
		BM_DepthOfInheritance	0	int		
		BM_LackOfCohesion	0	double
		BM_LinesOfCode	5	int
		BM_LinesOfComments	27	int		
		BM_NestingDepth	1	int
		BM_Size	65	long

2) Method: "function main() {\nif (1 == 1)\n{\nvar test = 1 + 1;\n}\nreturn 'Hello, World!';\n}"
    -		Identifiers	Count = 2
        [0]	"main"
        [1]	"test"
    -		Operands	Count = 20	
        [0]	"function"
        [1]	"main"
        [2]	"("
        [3]	")"
        [4]	"{"
        [5]	"("
        [6]	"1"
        [7]	"1"
        [8]	")"
        [9]	"{"
        [10]	"var"
        [11]	"test"
        [12]	"1"
        [13]	"1"
        [14]	";"
        [15]	"}"
        [16]	"return"
        [17]	"Hello, World!"
        [18]	";"
        [19]	"}"
    -		Operators	Count = 5	
        [0]	"if"
        [1]	"=="
        [2]	"="
        [3]	"+"
        [4]	"if"

    - BM_CyclomaticComplexity: 
        [0] "if"

		BM_CognitiveComplexity	2	double
		BM_CouplingBetweenObjectClasses	0	double
		BM_CyclomaticComplexity	1	double
		BM_DepthOfInheritance	0	int				
		BM_LackOfCohesion	0	double
		BM_LinesOfCode	7	int
		BM_LinesOfComments	1	int		
		BM_NestingDepth	1	int
    BM_Size	101	long
    
Lack Of Cohesion:
		methodsUsingFieldsCount	1	int
		methodsCount	1	int
		instanceFields	1	int
    constructors	0	int
*/
function main() {
  if (1 == 1)
  {
    var test = 1 + 1;
    //This is a comment
    if (2 == 2)
    {
      var test = 2 + 2;
      //This is a comment
    }
  }
   
  return 'Hello, World!';
}

function main1() {
  if (1 == 1)
  {
    var test = 1 + 1;
    //This is a comment
    if (2 == 2)
    {
      var test = 2 + 2;
      //This is a comment
    }
  }
  main();   
  return 'Hello, World!';
}

if (1 == 1)
{
  var test = 1 + 1;
  //This is a comment
}

function calc(key) {
    var allowedValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '(', ')', '.'];
    var txt;
    if (key === 'Enter') {
        answer(txt);
        return;
    }
    if (allowedValues.includes(key)) {
        display(key);
    }
}

function display(txt) {
    txtField.value += txt;

    if (txt === 'C') {
        txtField.value = "";
        return false;
    }
}

function backspace() {
    var num = txtField.value;
    var len = num.length - 1;
    var newNumber = num.substring(0, len);
    txtField.value = newNumber;
}

function signChange() {
    var plus = txtField.value;
    var nem = plus * -1;
    txtField.value = nem;
}

//executed when equals to btn is clicked
function answer(txt) {
    txt = txtField.value;
    // if there is no input, this is to prevent undefined
    // from showing in the text field
    if (txt != "") {
        try {
            txt = eval(txt);
            txtField.value = txt;
        } catch (error) {
            txtField.value = "Syntax error";
        }
    }
}

function cos(txt) {
    txt = txtField.value;
    txt = Math.cos(txt * Math.PI / 180);
    txtField.value = txt;

}

function sin(txt) {
    txt = txtField.value;
    txt = Math.sin(txt * Math.PI / 180);
    txtField.value = txt;
}

function tan(txt) {
    txt = txtField.value;
    txt = Math.tan(txt * Math.PI / 180);
    txtField.value = txt;
}

function log(txt) {
    txt = txtField.value;
    if (txt != "") {
        txt = Math.log10(txt);
        txtField.value = txt;
    }
}

function exponent(txt) {
    txt = txtField.value;
    txt = Math.exp(txt);
    txtField.value = txt;
}
var val = 0.0;

function percent(txt) {
    val = txtField.value;
    txtField.value = val * 0.01;
}

const pie = 3.142;

function pier(txt) {
    txt = txtField.value;
    txtField.value = txt * pie;

}

function square(txt) {
    txt = txtField.value;
    txt = Math.sqrt(txt);
    txtField.value = txt;
}

// there is no need for a raiseTo function this since we are using ** to represent it.

// function raiseTo(base, power) {
//     base = txtField.value;
//     console.log(base);
// }

function factorial(txt) {
    txt = txtField.value;
    var result = 1;
    for (var i = 0; i < txt; i++) {
        result = result * (txt - i);
    }

    txtField.value = result;

}

main();


 /**
 * Paste or drop some JavaScript here and explore
 * the syntax tree created by chosen parser.
 * You can use all the cool new features from ES6
 * and even more. Enjoy!
 */

let tips = [
    "Click on any AST node with a '+' to expand it",
  
    "Hovering over a node highlights the \
     corresponding part in the source code",
  
    "Shift click on an AST node expands the whole substree"
  ];
  
  function printTips() {
    tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
  }
