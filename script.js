
class Tarea {
    constructor(nombre, descripcion, fechaCreacion, fechaVencimiento, estado) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.fechaVencimiento = fechaVencimiento;
    this.estado = estado;
    }
}

const listaTareas = [];

function agregarTarea() {
    const nombre = prompt("Ingrese el nombre de la tarea:");
    const descripcion = prompt("Ingrese una descripción de la tarea:");
    const fechaCreacion = new Date();
    const fechaVencimiento = new Date(prompt("Ingrese la fecha de vencimiento (dd/mm/aaaa):"));
    const estado = "pendiente"; // La tarea se crea siempre en estado "pendiente"
    const tarea = new Tarea(nombre, descripcion, fechaCreacion, fechaVencimiento, estado);
    listaTareas.push(tarea);
    mostrarTareas();
}

function editarTarea() {
    const indice = prompt("Ingrese el índice de la tarea a editar:");
    listaTareas[indice].nombre = prompt("Ingrese el nuevo nombre de la tarea:");
    listaTareas[indice].descripcion = prompt("Ingrese la nueva descripción de la tarea:");
    listaTareas[indice].fechaVencimiento = new Date(prompt("Ingrese la nueva fecha de vencimiento (dd/mm/aaaa):"));
    mostrarTareas();
}

function eliminarTarea() {
    const indice = prompt("Ingrese el índice de la tarea a eliminar:");
    listaTareas.splice(indice, 1);
    mostrarTareas();
}

function completarTarea() {
    const indice = prompt("Ingrese el índice de la tarea completada:");
    listaTareas[indice].estado = "completada";
    mostrarTareas();
}

function buscarPorNombre() {
    const nombre = prompt("Ingrese el nombre de la tarea a buscar:");
    const tareasEncontradas = listaTareas.filter(tarea => tarea.nombre.toLowerCase().includes(nombre.toLowerCase()));
    mostrarTareas(tareasEncontradas);
}

function buscarPorEstado() {
    const estado = prompt("Ingrese el estado de la tarea a buscar:");
    const tareasEncontradas = listaTareas.filter(tarea => tarea.estado.toLowerCase() === estado.toLowerCase());
    mostrarTareas(tareasEncontradas);
}

function ordenarPorFechaVencimiento() {
    const tareasOrdenadas = listaTareas.sort((a, b) => a.fechaVencimiento - b.fechaVencimiento);
    mostrarTareas(tareasOrdenadas);
}

function mostrarTareas(tareas = listaTareas) {
    const tbody = document.getElementById("tareas");
    tbody.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${tarea.nombre}</td>
            <td>${tarea.descripcion}</td>
            <td>${tarea.fechaCreacion.toLocaleDateString()}</td>
            <td>${tarea.fechaVencimiento.toLocaleDateString()}</td>
            <td>${tarea.estado}</td>
        `;
        if (tarea.estado === "completada") {
            fila.classList.add("estado-completada");
        }
        tbody.appendChild(fila);
    });
}


