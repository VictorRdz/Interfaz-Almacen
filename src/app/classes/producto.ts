export class Producto {
    constructor(
        public id: number,
        public codigo: string,
        public nombre: string,
        public precio: number,
        public cantidad: number,
        public descripcion: string
    ) { }
}
