const productos = [
    { id: 1, name: "Becho Riveiro", image: "bechoriveiro.png", price: 3000 },
    { id: 2, name: "Bruno Arias", image: "bruno_arias.png", price: 3500 },
    { id: 3, name: "Cantoras", image: "cantoras.png", price: 2500 },
    { id: 4, name: "Carlos Mamani", image: "carlos_mamani.png", price: 2000 },
    { id: 5, name: "Copleros", image: "copleros.png", price: 2750 },
    { id: 6, name: "Joaquín López", image: "joaquin_lopez.png", price: 3300 },
];

function reachProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function saveProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function buscarProducto(id) {
 reachProductosLS();
    return productos.find(x => x.id == id);
}