function renderProductosCarrito() {
    let productos = reachProductosCarrito();
    let contenido = `<p class="alert alert-danger text-center" role="alert">No se encontraron productos</p>`;

    if (productos.length > 0) {

        contenido = `<p class="text-end"><a href="#" class"btn btn-danger text-white" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito</a></p>
        <table class="table">`;
        let total = 0;
    

    
    for (let producto of productos) {
        let precio = producto.price * producto.cantidad;
        contenido += `<tr>
        <td><img src="image/${producto.image}" alt="${producto.name}" width="64"></td>
        <td class="align-middle">${producto.name} X ${producto.cantidad}</td>
        <td class="align-middle">$${precio}</td>
        <td class="text-end"><a href="#"class="btn btn-danger" onclick="eliminarCarrito(${producto.id})">Eliminar</a></td>
        </tr>`;
        total += precio;
        
    }
    contenido += `<tr>
    <td><img src="image/logo_large.png" alt="Xuxuy Music" width="64"></td>
    <td class="align-middle">Total a Pagar</td>
    <td class="align-middle"><b>$${total}</b></td>
    <td class="text-end"><a href="#" class="btn btn-danger">Finalizar Compra</a></td>
    </tr>`;


    contenido += `</table>`;
}
    document.getElementById("producto_carrito").innerHTML = contenido;
}

actualizarBotonCarrito();
renderProductosCarrito();