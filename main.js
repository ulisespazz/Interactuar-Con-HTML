class productos {
    constructor(id,nombre,producto,precio){
        this.id = id
        this.nombre = nombre
        this.producto = producto
        this.precio = precio
    }
}
const producto1 = new productos(1,"Agua", "Bebida", 60)
const producto2 = new productos(2,"CocaCola", "Bebida", 130)
const producto3 = new productos(3,"Pepsi", "Bebida", 130)
const producto4 = new productos(4,"7up", "Bebida", 120)
const producto5 = new productos(5,"Mirinda", "Bebida", 110)
const producto6 = new productos(6,"Speed", "Bebida", 150) 
const producto7 = new productos(7,"Gomitas", "Golosina", 60)
const producto8 = new productos(8,"Caramelos", "Golosina", 60)
const producto9 = new productos(9,"Alfajor", "Golosina", 100)
const producto10 = new productos(10,"Chupetin", "Golosina", 40)
const producto11 = new productos(11,"Chicle", "Golosina", 60) 
const producto12 = new productos(12,"PapasLays", "Snacks", 100)
const producto13 = new productos(13,"Doritos", "Snacks", 120)
const producto14 = new productos(14,"3d", "Snacks", 100)
const producto15 = new productos(15,"Cheetos", "Snacks", 110)
const producto16 = new productos(16,"Pringles", "Snacks", 400)

let productosArray = [producto1, producto2, producto3, producto4, producto5, 
    producto6, producto7, producto8, producto9, producto10, producto11, 
    producto12, producto13, producto14, producto15, producto16]

let divProductos = document.getElementById('divProductos')

productosArray.forEach(producto =>{
    divProductos.innerHTML += `
        <div class="card productosClass" id="Producto${producto.id}" style="width: 18rem;">
            <img src="/img/producto${producto.id}.jpg" class="card-img-top" alt="...">
            <div class="card-body" >
                <p>Nombre: ${producto.nombre}</p>
                <p>Tipo de producto: ${producto.producto}</p>
                <p>Precio: ${producto.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    `
})

