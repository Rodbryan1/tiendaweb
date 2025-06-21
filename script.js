
let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio.toFixed(2);
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}
