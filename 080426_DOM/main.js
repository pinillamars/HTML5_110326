const alojamientos = [
{
titulo: "Apartamento en Barcelona",
precio: "120€/noche",
img: "https://picsum.photos/400/300?1"
},
{
titulo: "Casa en la montaña",
precio: "90€/noche",
img: "https://picsum.photos/400/300?2"
},
{
titulo: "Villa con piscina",
precio: "250€/noche",
img: "https://picsum.photos/400/300?3"
},
{
titulo: "Loft moderno",
precio: "150€/noche",
img: "https://picsum.photos/400/300?4"
}
];
const style = document.createElement("style");
style.textContent = `
body{
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
}
`;
document.head.appendChild(style);
const header = document.createElement("header");
header.innerHTML = "<h1>Alquileres en AirBnB<h1>";
document.body.appendChild(header);
style.textContent += `
header{
    background-color: white;
    padding: 20px;
    font-size: 1.5rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #ff5a5f;
    border-bottom: 2px solid #ff5a5f;
}
`;
const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.style.width = "100%";
searchInput.placeholder = "Buscar alojamiento...";
searchInput.style.padding = "10px";
searchInput.style.maxWidth = "400px";
searchInput.style.margin = "20px auto";
searchInput.style.display = "block";
document.body.appendChild(searchInput);
const container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
style.textContent += `
.container{
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px;
}
`;
// const card = document.createElement("div");
// card.className = "card";
// const img = document.createElement("img");
// img.src = alojamientos[0].img;
// const titulo = document.createElement("h2");
// titulo.textContent = alojamientos[0].titulo;
// const precio = document.createElement("p");
// precio.textContent = alojamientos[0].precio;
// card.appendChild(img);
// card.appendChild(titulo);
// card.appendChild(precio);
// container.appendChild(card);
style.textContent += `
.card{
    background-color: white;
    border-radius: 8px;
    box-shadow : 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}
.card img{
    width 100%;
}
.card h2{
    padding: 10px;
}
.card p{
    padding: 0 10px 10px;
    color: 1px solid #ccc;
}
`;
alojamientos.forEach(alojamiento => {
    const card = document.createElement("div");
    card.className = "card";
    const img = document.createElement("img");
    img.src = alojamiento.img;
    const titulo = document.createElement("h2");
    titulo.textContent = alojamiento.titulo;
    const precio = document.createElement("p");
    precio.textContent = alojamiento.precio;
    card.appendChild(img);
    card.appendChild(titulo);
    card.appendChild(precio);
    container.appendChild(card);
    card.addEventListener("click", () => {
        alert(`Has seleccionado: ${alojamiento.titulo}`);
    });
});
style.textContent += `
.card:hover{
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05) translateY(-5px);
    transition: 0.3s;
}
.card:last-child{
    color: #ff5a5f;
}
`;
const toggleBtn = document.createElement("button");
