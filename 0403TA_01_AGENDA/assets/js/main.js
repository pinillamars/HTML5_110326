const user = [
    {
        id: 1,
        nombre: "Ana López",
        telefono: "600123123",
        email: "ana@mail.com",
        empresa: "TechSoft",
    },
    {
        id: 2,
        nombre: "Carlos Pérez",
        telefono: "699456456",
        email: "carlos@mail.com",
        empresa: "Innova",
    },
];

function showContacts() {
    const tbody = document.getElementById("tablaContactos");
    tbody.innerHTML = "";
    user.forEach((contacto) => {
        tbody.innerHTML += `
        <tr>
        <td>${contacto.nombre}</td>
        <td>${contacto.telefono}</td>
        <td>${contacto.email}</td>
        <td>${contacto.empresa}</td>
        <td>

        0403ED_01_
        Gestión Agenda Contactos
        <button class="btn btn-danger btn-sm"
        onclick="eliminarContacto(${contacto.id})">
        Eliminar
        </button>
        </td>
        </tr>
        `;
    });
}
showContacts();

function addContacts(){
    const contacto = obtainDataForm();
    if (!contacto) return;
    user.push(contacto);
    clearForm();
    showContacts();
}

function addUrgent(){
    const contacto = obtainDataForm();
    if (!contacto) return;
    user.unshift(contacto);
    clearForm();
    showContacts();
}

function undoLast(){
    if (user.length === 0) return;
    user.pop();
    showContacts();
}

function helpFirst(){
    if (user.length === 0) return;
    user.shift();
    showContacts();
}

function deleteContact(){
    const index = user.findIndex ( c=>c,id === id);
    if (index !== -1) {
        user.splice (index, 1);
        showContacts();
    }
}

function obtainDataForm(){
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const empresa = document.getElementById("empresa").value.trim();

    if (!nombre || !telefono || !email || !empresa){
        alert("Todos los campos son obligatorios");
        return null;
    }
    return {
        id: Date.now(),
        nombre,
        telefono,
        email,
        empresa
    };
}

function clearForm(){
    document.getElementById("nombre").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("email").value = "";
    document.getElementById("empresa").value = "";
}

