import {ProductManager, Product} from './ProductManager.mjs';

let prodMan = new ProductManager();
console.log('Agregando productos...');
console.log('');
let idTeclado = prodMan.agregarProducto('Teclado');
let idMonitor = prodMan.agregarProducto('Monitor');
let idCPU = prodMan.agregarProducto('CPU');
let idGPU = prodMan.agregarProducto('GPU');
console.log('');

console.log('Test buscar por ID');
console.log('Buscando Monitor');
let prodMonitor = prodMan.buscarPorID(idMonitor);
console.log(prodMonitor.mostrarInfo());
console.log('');

console.log('Test actualizar por ID');
console.log('Cambiando CPU por Mouse');
let idMouse = idCPU;
prodMan.actualizarProducto(idCPU, 'Mouse');
let prodMouse = prodMan.buscarPorID(idMouse);
console.log(prodMouse.mostrarInfo());
console.log('');

console.log('Test obtener todos los productos');
let todosLosProductos = prodMan.obtenerTodosLosProductos();
for(let prod of todosLosProductos) console.log(prod.mostrarInfo());
console.log('');

console.log('Test crear productos con nombres inválido:');

console.log('Intentando crear producto con nombre vacío');
try {let idProductoInvalido = prodMan.agregarProducto('');}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Intentando crear producto con nombre no string');
try {idProductoInvalido = prodMan.agregarProducto(123);}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Comprobar que no se agregaron productos inválidos');
todosLosProductos = prodMan.obtenerTodosLosProductos();
for(let prod of todosLosProductos) console.log(prod.mostrarInfo());
console.log('');

console.log('Test buscar por IDs inválidos');

console.log('Intentando buscar por ID por debajo del rango');
try {prodMan.buscarPorID(-1);}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Intentando buscar por ID por encima del rango');
try {prodMan.buscarPorID(4);}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Intentando buscar por ID no numérico');
try {prodMan.buscarPorID('no-es-un-ID');}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Test actualizar por IDs inválidos');

console.log('Intentando actualizar ID por debajo del rango');
try {prodMan.actualizarProducto(-1, 'MousePad');}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Intentando actualizar ID por encima del rango');
try {prodMan.actualizarProducto(4, 'MousePad');}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Intentando actualizar ID no numérico');
try {prodMan.actualizarProducto('no-es-un-ID', 'MousePad');}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Intentando actualizar con nombre inválido');
try {prodMan.actualizarProducto(idMonitor, '');}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

try {prodMan.actualizarProducto(idMonitor, 123);}
catch(error) {console.log(`Error: ${error.message}`);}
console.log('');

console.log('Comprobar que no se actualizaron productos inválidos');
todosLosProductos = prodMan.obtenerTodosLosProductos();
for(let prod of todosLosProductos) console.log(prod.mostrarInfo());
console.log('');