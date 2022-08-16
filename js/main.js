function renderProductos() {
    let productos = reachProductosLS();

    for (let producto of productos) {
        let columna = document.createElement("div");
        columna.className = "col-md-4";
        let card = document.createElement("div");
        card.className = "card border-0";
        let image = document.createElement("img");
        image.src = `image/${producto.image}`;
        image.alt = producto.name;
        let car_body = document.createElement("div");
        car_body.className = "card-body";
        let title = document.createElement("h5");
        title.className = "card-title text-center";
        title.innerHTML = producto.name;
        let price = document.createElement("p");
        price.className = "card-title text-center";
        price.innerHTML = "$" + producto.price;
        let parrafo_boton = document.createElement("p");
        parrafo_boton.className = "card-title text-center";
        parrafo_boton.innerHTML = `<a href="#" class="btn btn-danger" title="Agregar al carrito" onclick="agregarCarrito(${producto.id})">Agregar</a></p>`;
        car_body.appendChild(title);
        car_body.appendChild(price);
        car_body.appendChild(parrafo_boton);
        card.appendChild(image);
        card.appendChild(car_body);
        columna.appendChild(card);
        document.getElementById("producto").appendChild(columna);

    }

};

function buscarProducto(id) {
    reachProductosLS();
    return productos.find(x => x.id == id);
}


saveProductosLS(productos);
actualizarBotonCarrito();
renderProductos();