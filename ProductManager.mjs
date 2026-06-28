export class ProductManager{
    #productos; #contadorID;
    constructor(){
        this.#productos = [];
        this.#contadorID = 0;
    }
    agregarProducto(nombreProducto){
        let idProducto = this.#contadorID++;
        let producto = new Product(nombreProducto, idProducto);
        this.#productos.push(producto);
        console.log(`Agregado ${producto.nombre} con ID ${producto.id}`);
        return idProducto;
    }
    obtenerTodosLosProductos(){
        return this.#productos.map(prod => new Product(prod.nombre, prod.id));
    }
    buscarPorID(idProducto){
        if (idProducto < 0 || idProducto >= this.#productos.length || typeof idProducto !== 'number'){
            throw new Error(`No existe producto con ID ${idProducto}`);
        }
        return this.#productos[idProducto];
    }
    actualizarProducto(idProducto, nombreNuevoProducto){
        let nombreProductoAnterior = this.buscarPorID(idProducto).nombre;
        let nuevoProducto = new Product(nombreNuevoProducto, idProducto);
        this.#productos[idProducto] = nuevoProducto;
        console.log(`Actualizado ${nombreProductoAnterior} por ${nombreNuevoProducto}`);
    }
}

export class Product{
    #nombre; #id;
    constructor(nombre, id){
        this.settearNombre(nombre);
        this.#id = id;
    }
    mostrarInfo(){
        return `Nombre: ${this.#nombre}, ID: ${this.#id}`;
    }
    get nombre(){ return this.#nombre; }
    get id(){ return this.#id; }
    settearNombre(nombre){ 
        if (typeof nombre == 'string' && nombre.length > 0) this.#nombre = nombre;
        else throw new Error('El nombre del producto debe ser un string no vacío'); 
    }
}