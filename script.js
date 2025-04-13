// Datos simulados para la galería
const imagenes = [
    { id: 1, src: "assets/img4.jpg", categoria: "Risotto", titulo: "Risotto", descripcion: "Un arroz cremoso cocido lentamente con caldo, vino y queso parmesano. Puede llevar hongos, mariscos o azafrán. Es puro confort italiano.", autor: "Nicolas Vega" },
    { id: 2, src: "assets/img5.jpg", categoria: "Bruschetta", titulo: "Bruschetta", descripcion: "Pan tostado frotado con ajo, rociado con aceite de oliva y cubierto con tomate fresco, albahaca y a veces mozzarella. Un entrante clásico, simple y delicioso", autor: "Nicolas Vega" },
    { id: 3, src: "assets/img6.jpg", categoria: "Carpaccio", titulo: "Carpaccio", descripcion: "Finas láminas de carne o pescado crudo, aderezadas con aceite de oliva, limón y rúcula. Ideal como entrada elegante.", autor: "Nicolas Vega" },
    { id: 4, src: "assets/img7.jpg", categoria: "Tiramisú", titulo: "Tiramisú", descripcion: "Capas de bizcocho empapado en café, crema de mascarpone y cacao. Dulce, suave y con un toque de cafeína.", autor: "Nicolas Vega" }
  ];
  
  // Mostrar todas las imágenes al cargar
  document.addEventListener("DOMContentLoaded", () => {
    mostrarImagenes(imagenes);
  });
  
  // Función para mostrar las imágenes en la galería
  function mostrarImagenes(lista) {
    const contenedor = document.getElementById("galeria-container");
    contenedor.innerHTML = "";
    lista.forEach(imagen => {
      const img = document.createElement("img");
      img.src = imagen.src;
      img.alt = imagen.titulo;
      img.classList.add("img-thumbnail");
      img.addEventListener("click", () => mostrarDetalle(imagen));
      contenedor.appendChild(img);
    });
  }
  
  // Función para filtrar imágenes
  function filtrarCategoria(categoria) {
    if (categoria === "Todas") {
      mostrarImagenes(imagenes);
    } else {
      const filtradas = imagenes.filter(img => img.categoria === categoria);
      mostrarImagenes(filtradas);
    }
  }
  
  // Mostrar detalle en el modal
  function mostrarDetalle(imagen) {
    document.getElementById("modal-img").src = imagen.src;
    document.getElementById("modal-titulo").textContent = imagen.titulo;
    document.getElementById("modal-descripcion").textContent = imagen.descripcion;
    document.getElementById("modal-autor").textContent = `Autor: ${imagen.autor}`;
    const modal = new bootstrap.Modal(document.getElementById("imagenModal"));
    modal.show();
  }
  
  // Validación del formulario
  document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (!nombre || !telefono || !email || !mensaje) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    if (!email.includes("@")) {
      alert("Por favor ingresa un correo válido.");
      return;
    }
  
    alert("¡Mensaje enviado con éxito!");
    this.reset();
  });
  