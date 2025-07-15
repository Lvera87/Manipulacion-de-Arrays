// ejercicio 1: calculadora de propinas
function calcularPropina(total, porcentaje) {
  const propina = total * (porcentaje / 100);
  const montoFinal = total + propina;
  return montoFinal;
}

console.log("ejercicio 1: calculadora de propinas");
console.log(`el total a pagar es: ${calcularPropina(15000, 10)}`); 
console.log("------------------------------------");




// ejercicio 2: validar contrasena
function validarContrasena(contrasena) {
  const tieneMinimo8Caracteres = contrasena.length >= 8;
  const tieneNumero = /\d/.test(contrasena);
  const tieneMayuscula = /[A-Z]/.test(contrasena);
  return tieneMinimo8Caracteres && tieneNumero && tieneMayuscula;
}

console.log("ejercicio 2: validar contrasena");
console.log(`"clave12345": ${validarContrasena("clave12345")}`); 
console.log(`"clave123": ${validarContrasena("clave123")}`);   
console.log(`"clave": ${validarContrasena("clave")}`);        
console.log("------------------------------------");


// ejercicio 3: buscar producto en inventario
const inventario = [
  { nombre: "camisa", precio: 20 },
  { nombre: "zapatos", precio: 50 },
  { nombre: "pantalon", precio: 35 }
];

function buscarProducto(nombre, inventario) {
  const productoEncontrado = inventario.find(producto => producto.nombre === nombre.toLowerCase());
  if (productoEncontrado) {
    return productoEncontrado;
  } else {
    return null;
  }
}

console.log("ejercicio 3: buscar producto en inventario");
console.log(buscarProducto("zapatos", inventario));
console.log(buscarProducto("gorra", inventario));   
console.log("------------------------------------");


// ejercicio 4: calcular promedio de notas
function calcularPromedio(notasString) {
  const notasArray = notasString.split(',');
  let suma = 0;
  for (let i = 0; i < notasArray.length; i++) {
    suma += parseFloat(notasArray[i]);
  }
  const promedio = suma / notasArray.length;
  return promedio.toFixed(2);
}

console.log("ejercicio 4: calcular promedio de notas");
const misNotas = "5.0,4.5,3.0,4.2";
console.log(`el promedio de ${misNotas} es: ${calcularPromedio(misNotas)}`);
console.log("------------------------------------");


// ejercicio 5: filtrar usuarios por edad
const listaUsuarios = [
  { nombre: "ana", edad: 25 },
  { nombre: "carlos", edad: 17 },
  { nombre: "beatriz", edad: 30 },
  { nombre: "david", edad: 18 }
];

function filtrarUsuarios(usuarios, edadMinima) {
  return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

console.log("ejercicio 5: filtrar usuarios por edad");
const edadDeFiltro = 18;
console.log(`usuarios con ${edadDeFiltro} anos o mas:`);
console.log(filtrarUsuarios(listaUsuarios, edadDeFiltro));
console.log("------------------------------------");


// ejercicio 6: contador de palabras
function contarPalabras(texto) {
  const palabras = texto.trim().split(' ');
  return palabras.length;
}

console.log("ejercicio 6: contador de palabras");
const miTexto = "este es un texto de prueba para el laboratorio";
console.log(`el texto tiene ${contarPalabras(miTexto)} palabras.`);
console.log("------------------------------------");


// ejercicio 7: simulador de cajero automatico
function retirarDinero(saldo, monto) {
  if (monto > saldo) {
    return "fondos insuficientes.";
  } else {
    const nuevoSaldo = saldo - monto;
    return `retiro exitoso. su nuevo saldo es: ${nuevoSaldo}`;
  }
}

console.log("ejercicio 7: simulador de cajero automatico");
let saldoActual = 50000;
let montoARetirar = 20000;
console.log(`saldo: ${saldoActual}, retiro: ${montoARetirar} -> ${retirarDinero(saldoActual, montoARetirar)}`);
montoARetirar = 60000;
console.log(`saldo: ${saldoActual}, retiro: ${montoARetirar} -> ${retirarDinero(saldoActual, montoARetirar)}`);
console.log("------------------------------------");


// ejercicio 8: cambio de moneda
function convertirMoneda(montoCOP, monedaDestino) {
  const tasaUSD = 4000;
  const tasaEUR = 4500;
  monedaDestino = monedaDestino.toUpperCase();
  if (monedaDestino === "USD") {
    const resultado = montoCOP / tasaUSD;
    return `${resultado.toFixed(2)} usd`;
  } else if (monedaDestino === "EUR") {
    const resultado = montoCOP / tasaEUR;
    return `${resultado.toFixed(2)} eur`;
  } else {
    return "moneda no valida. solo se puede convertir a usd o eur.";
  }
}

console.log("ejercicio 8: cambio de moneda");
let pesos = 100000;
console.log(`${pesos} cop a usd: ${convertirMoneda(pesos, "usd")}`);
console.log(`${pesos} cop a eur: ${convertirMoneda(pesos, "eur")}`);
console.log(`${pesos} cop a yen: ${convertirMoneda(pesos, "yen")}`);
console.log("------------------------------------");