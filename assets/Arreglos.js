let Tarea = []
let boton = document.getElementById("Enviar")
let LisTareas = document.getElementById("ListaTareas");
let tabla


boton.addEventListener("click", function(e){
    let a = document.getElementById("Tarea");
    Tarea.push(a.value)
    MostrarDatos()
});

function CompletarTarea(i) {
        Tarea[i] += " (Completado)";
        MostrarDatos();
    }
    
function EliminarTarea(i) {
        Tarea.splice(i, 1);
        MostrarDatos();
    }
   
function MostrarDatos() {

    if (Tarea.length==0) {
        LisTareas.innerHTML="No hay tareas Pendientes"
    } else {
        for (let i = 0; i < Tarea.length; i++) {
    
            if (i==0) {
                tabla = "<table><tbody><tr><td>Tarea</td><td>Descripcion</td>"+
                "<td>Completar</td><td>Eliminar</td></tr>";
            }

            tabla += 
            "<tr><td> " +(i+1)+ "</td>"+
            "<td>"+ Tarea[i] +" </td>"+ 
            "<td><button onclick=\"CompletarTarea("+i+")\">Completar</button></td>"+
            "<td><button onclick=\"EliminarTarea("+i+")\">Eliminar</button></td>" +
            "</tr>";
            
        if (i==Tarea.length) {
            tabla += "</tbody></table>"
        }
    }
    LisTareas.innerHTML = tabla;
}
}

