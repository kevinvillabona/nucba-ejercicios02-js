// Renderizar la card
const renderCard = (pizza) => {
    const pizzaContainer = document.createElement("div");
    pizzaContainer.classList.add("cardPizza");

    const nombre = document.createElement("h2");
    nombre.innerText = pizza.nombre.toUpperCase();
    pizzaContainer.appendChild(nombre);

    const imagen = document.createElement("img");
    imagen.src = "img/" + pizza.imagen;
    pizzaContainer.appendChild(imagen);

    const p = document.createElement("p");
    p.classList.add("ingredientes");
    p.innerText = "Ingredientes:";
    pizzaContainer.appendChild(p)

    const ingredientes = document.createElement("ul");
    pizza.ingredientes.forEach((ingrediente) => {
      const ingredienteItem = document.createElement("li");
      ingredienteItem.innerText = ingrediente;
      ingredientes.appendChild(ingredienteItem);
    });
    pizzaContainer.appendChild(ingredientes);

    const precio = document.createElement("h4");
    precio.innerText = `$${pizza.precio}`;
    pizzaContainer.appendChild(precio);

    return pizzaContainer;
  };

  // Función para buscar por id
  const buscar = (id) =>
    pizzas.find((pizza) => pizza.id === id);

  // Función para manejar el evento de click
  const btnClick = () => {
    const input = document.getElementById("inputIdPizza");
    const pizzaId = parseInt(input.value, 10);
    const pizza = buscar(pizzaId);

    const pizzaContainer = document.getElementById("cardPizza");
    if (pizza) {
      pizzaContainer.innerHTML = "";
      pizzaContainer.appendChild(renderCard(pizza));
    } else {
      pizzaContainer.innerHTML = `<h3>Error: No se encuentra el ID solicitado</h3>`;
    }
  };

  // Agregar el event listener al botón
  const btn = document.getElementById("btnMostrarPizza");
  btn.addEventListener("click", btnClick);
  // Guardar el array n el local storage
  localStorage.setItem("pizzas", JSON.stringify(pizzas));