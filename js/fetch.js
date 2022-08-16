fetch (`js/productos.json`)
.then((response)=>response.json()
.then((data) => {
  const resultado = document.getElementById("resultado");
  data.forEach(valor =>{
    let columna = document.createElement("div");
    columna.className = "col-md-12";
    let div_padre= document.createElement("div");
    div_padre.className = "card-header";
    let div_hijo1 = document.createElement ("div");
    div_hijo1.className = "card-header";
    let div_hijo2 = document.createElement ("div");
    div_hijo2.className = "card-body";
    let parrafo = document.createElement("p");
    div_hijo1.innerHTML = `<b>${valor.nombre}</b> ${valor.titulo}`;
    parrafo.innerText = valor.descripcion;
    div_hijo2.appendChild(parrafo);
    div_padre.appendChild(div_hijo1);
    div_padre.appendChild(div_hijo2);
    columna.appendChild(div_padre);
    resultado.appendChild(columna); 
    
  })
}))